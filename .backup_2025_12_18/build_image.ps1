# Build the Docker image using the Production Dockerfile
docker build -f Dockerfile.prod -t dgg-piece:latest .

# Save the image to a tar file
docker save -o dgg-piece.tar dgg-piece:latest

Write-Host "Gotowe! Plik dgg-piece.tar został utworzony."
Write-Host "Teraz wgraj go na NAS w Portainerze: Images -> Import."
