pipeline {
    agent any

    environment {
        PROJECT_NAME = "SGUADHR10B"
    }

    stages {
        stage('Detener servicios previos') {
            steps {
                bat """
                    docker compose -p %PROJECT_NAME% down || exit /b 0
                """
            }
        }

        stage('Eliminar imágenes antiguas') {
            steps {
                bat """
                    for /f "tokens=*" %%i in ('docker images --filter "label=com.docker.compose.project=%PROJECT_NAME%" -q') do (
                        docker rmi -f %%i
                    )
                """
            }
        }

        stage('Clonando repositorio') {
            steps {
                checkout scm
            }
        }

        stage('Construyendo y desplegando con Docker') {
            steps {
                bat """
                    docker compose -p %PROJECT_NAME% up --build -d
                """
            }
        }
    }

    post {
        success {
            echo '✅ Deploy exitoso'
        }
        failure {
            echo '❌ Falló el pipeline'
        }
        always {
            echo '🏁 Pipeline terminado'
        }
    }
}
