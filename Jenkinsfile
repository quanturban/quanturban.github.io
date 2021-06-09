node {
	stage('Build') {
		git(
			url: 'https://github.com/quanturban/quanturban-web.git',
			credentialsId: 'f1723211-cb73-4491-af25-54ebe88a6318',
			branch: 'master'
		)
		sh 'docker build --tag="quanturban-web" .'
	}

	stage('Push') {
		sh 'docker tag quanturban-web registry.cn-hongkong.aliyuncs.com/quanturban/web:latest'
		withCredentials([string(credentialsId: 'DOCKER_PASSWORD', variable: 'password')]) {
			sh 'docker login --username=quanturban --password=$password registry.cn-hongkong.aliyuncs.com'
			sh 'docker push registry.cn-hongkong.aliyuncs.com/quanturban/web:latest'
		}
	}

	stage('Deploy') {
		sh 'ssh root@39.103.195.18 "(for i in {1..10}; do sudo docker pull registry.cn-hongkong.aliyuncs.com/quanturban/web:latest && s=0 && break || s=\\$? && sleep 5; done; exit \\$s)"'
		sh 'ssh root@39.103.195.18 "sudo docker stop web && sudo docker rm web || true"'
		sh 'sleep 2'
		sh 'ssh root@39.103.195.18 "sudo docker run --name web --network citymap -d --restart unless-stopped registry.cn-hongkong.aliyuncs.com/quanturban/web:latest"'
	}
}