pipeline {
  agent any
  stages {
    stage('Checkout') {
        agent any
        steps {
            checkout scm
            sh 'checkout success'
        }
    }
  }
}
