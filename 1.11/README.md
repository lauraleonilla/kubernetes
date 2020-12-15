### Assignment 1.09

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/pingpong
The ingress is shared with 1.07. You can use the services and the ingress to access them on port :8081 with following:

1. k3d cluster delete
2. k3d cluster create -p 8081:80@loadbalancer --agents 2
3. docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
4. kubectl apply -f manifests/deployment.yaml
5. kubectl apply -f manifests/service.yaml
6. kubectl apply -f manifests/ingress.yaml 
6. kubectl apply -f manifests/ingress.yaml 
6. kubectl apply -f manifests/ingress.yaml 

The main application will be available at http://localhost:8081 and the pingpong allication at http://localhost:8081/pingpong