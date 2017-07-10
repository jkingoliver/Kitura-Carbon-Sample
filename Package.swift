import PackageDescription

let package = Package(
    name: "sample",
    targets: [
      Target(name: "sample", dependencies: [ .Target(name: "Application") ])
    ],
    dependencies: [
        .Package(url: "https://github.com/IBM-Swift/Kitura.git",             majorVersion: 1, minor: 7),
        .Package(url: "https://github.com/IBM-Swift/HeliumLogger.git",       majorVersion: 1, minor: 7),
        .Package(url: "https://github.com/IBM-Swift/Health.git",             majorVersion: 0),
        .Package(url: "https://github.com/IBM-Swift/Configuration.git",      majorVersion: 1),
    ],
    exclude: ["src"]
)
