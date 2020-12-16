### Assignment 1.11

You can use the service on port :8081 with following:

1. k3d cluster delete
2. k3d cluster create -p 8081:80@loadbalancer --agents 2
3. docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
4. kubectl apply -f manifests/deployment.yaml
5. kubectl apply -f manifests/persistentvolumeclaim.yaml
6. kubectl apply -f manifests/persistentvolume.yaml 
7. kubectl apply -f manifests/service.yaml 
8. kubectl apply -f manifests/ingress.yaml 

/pingpong will increase the number of pongs in the file / will display the ponds with timestamp