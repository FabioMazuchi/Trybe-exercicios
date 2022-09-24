from socketserver import TCPServer, StreamRequestHandler

# aula da t16-b


class EcoHandler(StreamRequestHandler):
    def handle(self):
        self.wfile.write(b"Ola!\n")
        while True:
            data = self.rfile.readline().strip().decode("UTF-8")
            if not data:
                self.wfile.write(b"Cliente desconectado")
                print("Cliente foi desconectado")
                break
            print(data)


if __name__ == "__main__":
    server_address = ("localhost", 8085)
    with TCPServer(server_address, EcoHandler) as server:
        print("Servidor on!")
        server.serve_forever()
