pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'yarn build'
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