### Assignment 1.10

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/pingpong
The ingress is shared with 1.07. You can use the services and the ingress to access them on port :8081 with following:

1. k3d cluster delete
2. k3d cluster create -p 8081:80@loadbalancer --agents 2
3. You need to run the following commands in the 1.07 folder AND this (1.09) folder:
4. kubectl apply -f manifests/deployment.yaml
5. kubectl apply -f manifests/service.yaml
6. You'll then have the two applications deployed with the services running. You can start the shared ingress by running 
kubectl apply -f manifests/ingress.yaml inside this folder.

The main application will be available at http://localhost:8081 and the pingpong allication at http://localhost:8081/pingpong

