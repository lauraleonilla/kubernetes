### Assignment 1.06

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/html-web-server
You can deploy it and enable a nodeport access with kubernetes by running:

1. k3d cluster delete
2. k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
3. kubectl apply -f manifests/deployment.yaml
4. kubectl apply -f manifests/service.yaml

The application will be accessible on port :8082