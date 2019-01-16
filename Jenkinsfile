pipeline {
  agent {
    docker { image 'node:7-alpine' }
  }
  stages {
    stage('Build') {
      steps {
        echo 'testing'
        sh 'node -v'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing..'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }
}