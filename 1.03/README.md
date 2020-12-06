### Assignment 1.03

The docker image based on the project can be found in https://hub.docker.com/repository/docker/lauraleonilla/string-generator
You can deploy it with kubernetes by running the following inside the folder:

1. kubectl apply -f manifests/deployment.yaml
2. Get the pod name with kubectl get pods
3. You can check the logs with kubectl logs -f string-generator-78c8cc49c5-rs8c7 (the pod name after the -f)