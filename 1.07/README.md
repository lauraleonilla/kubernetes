### Assignment 1.07

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/string-generator-server
You can use service and ingress to access it on port :8081 with following:

1. k3d cluster delete
2. k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
3. kubectl apply -f manifests/deployment.yaml
4. kubectl apply -f manifests/service.yaml
5. kubectl apply -f manifests/ingress.yaml

