import Foundation
import Kitura
import LoggerAPI
import Health
import Configuration

public let router = Router()
public let manager = ConfigurationManager()
public var port: Int = 8080

public func initialize() throws {

    manager.load(file: "config.json", relativeFrom: .project)
           .load(.environmentVariables)

    port = manager.port

    router.all("/*", middleware: BodyParser())
    router.all("/", middleware: StaticFileServer())


    let health = Health()
    
    router.get("/health") { request, response, _ in
        let result = health.status.toSimpleDictionary()
        if health.status.state == .UP {
            try response.send(json: result).end()
        } else {
            try response.status(.serviceUnavailable).send(json: result).end()
        }
    }
}

public func run() throws {
    Kitura.addHTTPServer(onPort: port, with: router)
    Kitura.run()
}
