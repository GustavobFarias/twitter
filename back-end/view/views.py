from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.contrib.auth import authenticate, login


class RegisterUserAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")
        password2 = request.data.get("password2")

        # Verificar campos obrigatórios
        if not username or not password or not password2:
            return Response({"error": "Preencha todos os campos obrigatórios."}, status=status.HTTP_400_BAD_REQUEST)

        # Validar senha e confirmação
        if password != password2:
            return Response({"error": "As senhas não coincidem."}, status=status.HTTP_400_BAD_REQUEST)

        # Verificar se usuário já existe
        if User.objects.filter(username=username).exists():
            return Response({"error": "Usuário já existe."}, status=status.HTTP_400_BAD_REQUEST)

        # Validar complexidade da senha com validators do Django
        try:
            validate_password(password)
        except ValidationError as e:
            return Response({"error": e.messages}, status=status.HTTP_400_BAD_REQUEST)

        # Criar usuário
        user = User.objects.create_user(username=username, email=email, password=password)

        # Autenticar e logar o usuário recém-criado
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)  # cria a sessão para o usuário
            return Response({"message": "Usuário criado e logado com sucesso!"}, status=status.HTTP_201_CREATED)
        else:
            return Response({"message": "Usuário criado, mas não foi possível logar automaticamente."}, status=status.HTTP_201_CREATED)

class LoginUserAPIView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return Response({"message": "Login realizado com sucesso"})
        else:
            return Response({"error": "Usuário ou senha inválidos"}, status=status.HTTP_401_UNAUTHORIZED)
