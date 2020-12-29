### Assignment 1.10

The docker images based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/filereader
and https://hub.docker.com/repository/docker/lauraleonilla/filewriter
You can use the services and the ingress to access them on port :8081 with following:

1. k3d cluster delete
2. k3d cluster create -p 8081:80@loadbalancer --agents 2
3. kubectl apply -f manifests/deployment.yaml
4. kubectl apply -f manifests/service.yaml
5. kubectl apply -f manifests/ingress.yaml

The application will be available at http://localhost:8081

