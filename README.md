<h1 align="center">
  <a href="https://libp2p.io"><img width="250" src="https://github.com/libp2p/js-libp2p/blob/main/img/libp2p.png?raw=true" alt="libp2p hex logo" /></a>
</h1>

<h3 align="center">The JavaScript implementation of the libp2p Networking Stack.</h3>

<p align="center">
  <a href="http://protocol.ai"><img src="https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square" /></a>
  <a href="http://libp2p.io/"><img src="https://img.shields.io/badge/project-libp2p-yellow.svg?style=flat-square" /></a>
  <a href="http://webchat.freenode.net/?channels=%23libp2p"><img src="https://img.shields.io/badge/freenode-%23libp2p-yellow.svg?style=flat-square" /></a>
  <a href="https://matrix.to/#/#libp2p-implementers:ipfs.io"><img src="https://img.shields.io/badge/matrix-%23libp2p--implementers%3Aipfs.io-blue.svg?style=flat-square" /> </a>
  <a href="https://discord.gg/ipfs"><img src="https://img.shields.io/discord/806902334369824788?color=blueviolet&label=discord&style=flat-square" /></a>
  <a href="https://discuss.libp2p.io"><img src="https://img.shields.io/discourse/https/discuss.libp2p.io/posts.svg" /></a>
  <a href="https://www.npmjs.com/package/libp2p"><img src="https://img.shields.io/npm/dm/libp2p.svg" /></a>
  <a href="https://www.jsdelivr.com/package/npm/libp2p"><img src="https://data.jsdelivr.com/v1/package/npm/libp2p/badge"/></a>
</p>

<p align="center">
  <a href="https://github.com/libp2p/js-libp2p/actions?query=branch%3Amain+workflow%3ACI+"><img src="https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/main.yml?branch=main&label=ci&style=flat-square" /></a>
  <a href="https://codecov.io/gh/libp2p/js-libp2p"><img src="https://img.shields.io/codecov/c/github/libp2p/js-libp2p/main.svg?style=flat-square"></a>
  <br>
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="https://github.com/RichardLitt/standard-readme"><img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" /></a>
  <a href=""><img src="https://img.shields.io/badge/npm-%3E%3D7.0.0-orange.svg?style=flat-square" /></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-%3E%3D15.0.0-orange.svg?style=flat-square" /></a>
  <br>
</p>

# js-libp2p-monorepo <!-- omit in toc -->

[![libp2p.io](https://img.shields.io/badge/project-libp2p-yellow.svg?style=flat-square)](http://libp2p.io/)
[![Discuss](https://img.shields.io/discourse/https/discuss.libp2p.io/posts.svg?style=flat-square)](https://discuss.libp2p.io)
[![codecov](https://img.shields.io/codecov/c/github/libp2p/js-libp2p.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p)
[![CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/main.yml?branch=main\&style=flat-square)](https://github.com/libp2p/js-libp2p/actions/workflows/main.yml?query=branch%3Amain)

> JavaScript implementation of libp2p, a modular peer to peer network stack

### Project status

This project has been used in production for years in Ethereum, IPFS, and more.  It is actively maintained by multiple organizations and continues to be improved!  The API might change, but we strictly follow semver.

The documentation in the main branch may contain changes from a pre-release.

If you are looking for the documentation of the latest release, you can view the latest release on [**npm**](https://www.npmjs.com/package/libp2p), or select the tag in github that matches the version you are looking for.

**Want to get started?** Check our [GETTING\_STARTED.md](./doc/GETTING_STARTED.md) guide and [examples](https://github.com/libp2p/js-libp2p-examples).

**Want to update libp2p in your project?** Check our [migrations folder](./doc/migrations).

## Table of contents <!-- omit in toc -->

- [Background](#background)
- [Roadmap](#roadmap)
- [Install](#install)
- [Usage](#usage)
  - [Configuration](#configuration)
  - [Limits](#limits)
  - [Getting started](#getting-started)
  - [Tutorials and Examples](#tutorials-and-examples)
- [Structure](#structure)
- [Development](#development)
  - [Tests](#tests)
    - [Run unit tests](#run-unit-tests)
  - [Packages](#packages)
- [Used by](#used-by)
- [Contribute](#contribute)
- [API Docs](#api-docs)
- [License](#license)

## Background

libp2p is the product of a long and arduous quest to understand the evolution of the Internet networking stack. In order to build P2P applications, devs have long had to make custom ad-hoc solutions to fit their needs, sometimes making some hard assumptions about their runtimes and the state of the network at the time of their development. Today, looking back more than 20 years, we see a clear pattern in the types of mechanisms built around the Internet Protocol, IP, which can be found throughout many layers of the OSI layer system, libp2p distils these mechanisms into flat categories and defines clear interfaces that once exposed, enable other protocols and applications to use and swap them, enabling upgradability and adaptability for the runtime, without breaking the API.

We are in the process of writing better documentation, blog posts, tutorials and a formal specification. Today you can find:

- [libp2p.io](https://libp2p.io)
- [docs.libp2p.io](https://docs.libp2p.io)
- [Specification (WIP)](https://github.com/libp2p/specs)
- [Discussion Forums](https://discuss.libp2p.io)
- Talks
  - [`libp2p <3 ethereum` at DEVCON2](https://archive.devcon.org/archive/watch/2/libp2p-devp2p-ipfs-and-ethereum-networking/)
- Articles
  - [The overview of libp2p](https://github.com/libp2p/libp2p#description)

To sum up, libp2p is a "network stack" -- a protocol suite -- that cleanly separates concerns, and enables sophisticated applications to only use the protocols they absolutely need, without giving up interoperability and upgradeability. libp2p grew out of IPFS, but it is built so that lots of people can use it, for lots of different projects.

## Roadmap

The js-libp2p roadmap can be found here: <https://github.com/libp2p/js-libp2p/blob/main/ROADMAP.md>

It represents current projects the js-libp2p maintainers are focused on and provides an estimation of completion targets.

It is complementary to the overarching libp2p project roadmap: <https://github.com/libp2p/specs/blob/master/ROADMAP.md>

## Install

```sh
npm install libp2p
```

## Usage

### Configuration

For all the information on how you can configure libp2p see [CONFIGURATION.md](./doc/CONFIGURATION.md).

### Limits

For help configuring your node to resist malicious network peers, see [LIMITS.md](./doc/LIMITS.md)

### Getting started

If you are starting your journey with `js-libp2p`, read the [GETTING\_STARTED.md](./doc/GETTING_STARTED.md) guide.

### Tutorials and Examples

You can find multiple examples on the [examples repo](https://github.com/libp2p/js-libp2p-examples) that will guide you through using libp2p for several scenarios.

## Structure

- [`/doc`](./doc) Docs for libp2p
- [`/interop`](./interop) Multidimension Interop Test
- [`/packages/crypto`](./packages/crypto) Crypto primitives for libp2p
- [`/packages/interface`](./packages/interface) The interface implemented by a libp2p node
- [`/packages/interface-compliance-tests`](./packages/interface-compliance-tests) Compliance tests for JS libp2p interfaces
- [`/packages/interface-internal`](./packages/interface-internal) Interfaces implemented by internal libp2p components
- [`/packages/kad-dht`](./packages/kad-dht) JavaScript implementation of the Kad-DHT for libp2p
- [`/packages/keychain`](./packages/keychain) Key management and cryptographically protected messages
- [`/packages/libp2p`](./packages/libp2p) JavaScript implementation of libp2p, a modular peer to peer network stack
- [`/packages/logger`](./packages/logger) A logging component for use in js-libp2p modules
- [`/packages/metrics-prometheus`](./packages/metrics-prometheus) Collect libp2p metrics for scraping by Prometheus or Graphana
- [`/packages/multistream-select`](./packages/multistream-select) JavaScript implementation of multistream-select
- [`/packages/peer-collections`](./packages/peer-collections) Stores values against a peer id
- [`/packages/peer-discovery-bootstrap`](./packages/peer-discovery-bootstrap) Peer discovery via a list of bootstrap peers
- [`/packages/peer-discovery-mdns`](./packages/peer-discovery-mdns) Node.js libp2p mDNS discovery implementation for peer discovery
- [`/packages/peer-id`](./packages/peer-id) Implementation of @libp2p/interface-peer-id
- [`/packages/peer-id-factory`](./packages/peer-id-factory) Create PeerId instances
- [`/packages/peer-record`](./packages/peer-record) Used to transfer signed peer data across the network
- [`/packages/peer-store`](./packages/peer-store) Stores information about peers libp2p knows on the network
- [`/packages/protocol-perf`](./packages/protocol-perf) Implementation of Perf Protocol
- [`/packages/pubsub`](./packages/pubsub) libp2p pubsub base class
- [`/packages/pubsub-floodsub`](./packages/pubsub-floodsub) libp2p-floodsub, also known as pubsub-flood or just dumbsub, this implementation of pubsub focused on delivering an API for Publish/Subscribe, but with no CastTree Forming (it just floods the network).
- [`/packages/stream-multiplexer-mplex`](./packages/stream-multiplexer-mplex) JavaScript implementation of <https://github.com/libp2p/mplex>
- [`/packages/transport-tcp`](./packages/transport-tcp) A TCP transport for libp2p
- [`/packages/transport-webrtc`](./packages/transport-webrtc) A libp2p transport using WebRTC connections
- [`/packages/transport-websockets`](./packages/transport-websockets) JavaScript implementation of the WebSockets module that libp2p uses and that implements the interface-transport spec
- [`/packages/transport-webtransport`](./packages/transport-webtransport) JavaScript implementation of the WebTransport module that libp2p uses and that implements the interface-transport spec
- [`/packages/utils`](./packages/utils) Package to aggregate shared logic and dependencies for the libp2p ecosystem

## Development

**Clone and install dependencies:**

```sh
> git clone https://github.com/libp2p/js-libp2p.git
> cd js-libp2p
> npm install
> npm run build
```

### Tests

#### Run unit tests

```sh
# run all the unit tsts
> npm test

# run just Node.js tests
> npm run test:node

# run just Browser tests (Chrome)
> npm run test:chrome
```

### Packages

List of packages currently in existence for libp2p

> This table is generated using the module `package-table` with `package-table --data=package-list.json`.

| Package | Version | Deps | CI | Coverage |
| ---------|---------|---------|---------|--------- |
| **libp2p** |
| [`libp2p`](//github.com/libp2p/js-libp2p) | [![npm](https://img.shields.io/npm/v/libp2p.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/libp2p?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/libp2p) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p) |
| [`@libp2p/interface`](//github.com/libp2p/js-libp2p/tree/main/packages/interface) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Finterface.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/interface/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Finterface?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Finterface) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/interface/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/interface/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/interface/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/interface) |
| **transports** |
| [`@libp2p/tcp`](//github.com/libp2p/js-libp2p/tree/main/packages/transport-tcp) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Ftcp.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-tcp/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Ftcp?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Ftcp) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/transport-tcp/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-tcp/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-tcp/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-tcp) |
| [`@libp2p/webrtc`](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webrtc) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fwebrtc.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webrtc/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fwebrtc?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fwebrtc) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/transport-webrtc/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webrtc/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-webrtc/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-webrtc) |
| [`@libp2p/websockets`](//github.com/libp2p/js-libp2p/tree/main/packages/transport-websockets) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fwebsockets.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-websockets/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fwebsockets?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fwebsockets) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/transport-websockets/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-websockets/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-websockets/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-websockets) |
| [`@libp2p/webtransport`](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webtransport) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fwebtransport.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webtransport/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fwebtransport?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fwebtransport) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/transport-webtransport/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/transport-webtransport/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-webtransport/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/transport-webtransport) |
| **secure channels** |
| [`@chainsafe/libp2p-noise`](//github.com/ChainSafe/js-libp2p-noise) | [![npm](https://img.shields.io/npm/v/%40chainsafe%2Flibp2p-noise.svg?maxAge=86400&style=flat-square)](//github.com/ChainSafe/js-libp2p-noise/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40chainsafe%2Flibp2p-noise?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40chainsafe%2Flibp2p-noise) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/ChainSafe/js-libp2p-noise/js-test-and-release.yml?branch=master&label=ci&style=flat-square)](//github.com/ChainSafe/js-libp2p-noise/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/ChainSafe/js-libp2p-noise/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/ChainSafe/js-libp2p-noise) |
| [`@libp2p/plaintext`](//github.com/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fplaintext.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fplaintext?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fplaintext) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/connection-encrypter-plaintext) |
| **stream multiplexers** |
| [`@libp2p/mplex`](//github.com/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fmplex.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fmplex?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fmplex) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/stream-multiplexer-mplex) |
| [`@chainsafe/libp2p-yamux`](//github.com/ChainSafe/js-libp2p-yamux) | [![npm](https://img.shields.io/npm/v/%40chainsafe%2Flibp2p-yamux.svg?maxAge=86400&style=flat-square)](//github.com/ChainSafe/js-libp2p-yamux/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40chainsafe%2Flibp2p-yamux?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40chainsafe%2Flibp2p-yamux) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/ChainSafe/js-libp2p-yamux/js-test-and-release.yml?branch=master&label=ci&style=flat-square)](//github.com/ChainSafe/js-libp2p-yamux/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/ChainSafe/js-libp2p-yamux/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/ChainSafe/js-libp2p-yamux) |
| **peer discovery** |
| [`@libp2p/bootstrap`](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fbootstrap.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fbootstrap?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fbootstrap) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-discovery-bootstrap) |
| [`@libp2p/kad-dht`](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fkad-dht.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fkad-dht?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fkad-dht) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/kad-dht/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht) |
| [`@libp2p/mdns`](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fmdns.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fmdns?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fmdns) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-discovery-mdns) |
| [`@chainsafe/discv5`](//github.com/ChainSafe/discv5) | [![npm](https://img.shields.io/npm/v/%40chainsafe%2Fdiscv5.svg?maxAge=86400&style=flat-square)](//github.com/ChainSafe/discv5/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40chainsafe%2Fdiscv5?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40chainsafe%2Fdiscv5) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/ChainSafe/discv5/test_and_release.yml?branch=master&label=ci&style=flat-square)](//github.com/ChainSafe/discv5/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/ChainSafe/discv5/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/ChainSafe/discv5) |
| **content routing** |
| [`@libp2p/http-v1-content-routing`](//github.com/libp2p/js-http-v1-content-routing) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fhttp-v1-content-routing.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-http-v1-content-routing/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fhttp-v1-content-routing?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fhttp-v1-content-routing) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-http-v1-content-routing/js-test-and-release.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-http-v1-content-routing/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-http-v1-content-routing/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-http-v1-content-routing) |
| [`@libp2p/delegated-content-routing`](//github.com/libp2p/js-libp2p-delegated-content-routing) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fdelegated-content-routing.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p-delegated-content-routing/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fdelegated-content-routing?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fdelegated-content-routing) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p-delegated-content-routing/js-test-and-release.yml?branch=master&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p-delegated-content-routing/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p-delegated-content-routing/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p-delegated-content-routing) |
| [`@libp2p/kad-dht`](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fkad-dht.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fkad-dht?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fkad-dht) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/kad-dht/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht) |
| **peer routing** |
| [`@libp2p/delegated-peer-routing`](//github.com/libp2p/js-libp2p-delegated-peer-routing) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fdelegated-peer-routing.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p-delegated-peer-routing/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fdelegated-peer-routing?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fdelegated-peer-routing) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p-delegated-peer-routing/js-test-and-release.yml?branch=master&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p-delegated-peer-routing/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p-delegated-peer-routing/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p-delegated-peer-routing) |
| [`@libp2p/kad-dht`](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fkad-dht.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fkad-dht?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fkad-dht) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/kad-dht/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/kad-dht/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/kad-dht) |
| **utilities** |
| [`@libp2p/crypto`](//github.com/libp2p/js-libp2p/tree/main/packages/crypto) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fcrypto.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/crypto/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fcrypto?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fcrypto) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/crypto/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/crypto/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/crypto/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/crypto) |
| **data types** |
| [`@libp2p/peer-id`](//github.com/libp2p/js-libp2p/tree/main/packages/peer-id) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fpeer-id.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-id/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fpeer-id?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fpeer-id) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/peer-id/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-id/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-id/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-id) |
| [`@libp2p/peer-record`](//github.com/libp2p/js-libp2p/tree/main/packages/peer-record) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Fpeer-record.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-record/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Fpeer-record?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Fpeer-record) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/peer-record/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/peer-record/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-record/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/peer-record) |
| **pubsub** |
| [`@ChainSafe/libp2p-gossipsub`](//github.com/ChainSafe/js-libp2p-gossipsub) | [![npm](https://img.shields.io/npm/v/%40ChainSafe%2Flibp2p-gossipsub.svg?maxAge=86400&style=flat-square)](//github.com/ChainSafe/js-libp2p-gossipsub/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40ChainSafe%2Flibp2p-gossipsub?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40ChainSafe%2Flibp2p-gossipsub) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/ChainSafe/js-libp2p-gossipsub/main.yml?branch=master&label=ci&style=flat-square)](//github.com/ChainSafe/js-libp2p-gossipsub/actions?query=branch%3Amaster+workflow%3Aci+) | [![codecov](https://codecov.io/gh/ChainSafe/js-libp2p-gossipsub/branch/master/graph/badge.svg?style=flat-square)](https://codecov.io/gh/ChainSafe/js-libp2p-gossipsub) |
| [`@libp2p/floodsub`](//github.com/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub) | [![npm](https://img.shields.io/npm/v/%40libp2p%2Ffloodsub.svg?maxAge=86400&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub/releases) | [![Deps](https://img.shields.io/librariesio/release/npm/%40libp2p%2Ffloodsub?logo=Libraries.io&logoColor=white&style=flat-square)](//libraries.io/npm/%40libp2p%2Ffloodsub) | [![GitHub CI](https://img.shields.io/github/actions/workflow/status/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub/main.yml?branch=main&label=ci&style=flat-square)](//github.com/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub/actions?query=branch%3Amain+workflow%3Aci+) | [![codecov](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/libp2p/js-libp2p/tree/main/packages/pubsub-floodsub) |

## Used by

<div style="padding: 20px">
  <p align="middle">
    <a href="https://lodestar.chainsafe.io/"><img width="300" src="https://github.com/ChainSafe/lodestar/blob/unstable/assets/lodestar_icon_text_black_stroke.png?raw=true"></a>
    <a href="https://hoprnet.org/"><img width="150" src="https://github.com/hoprnet/hopr-assets/blob/master/v1/logo/hopr_logo_padded.png?raw=true" alt="HOPR Logo">
    <a href="https://helia.io/"><img src="https://raw.githubusercontent.com/ipfs/helia/main/assets/helia.png" alt="Helia (IPFS in JavaScript) logo" width="150" /></a>
    <a href="https://peerbit.org/"><img src="https://github.com/dao-xyz/peerbit/blob/master/docs/peerbit-logo.png" alt="Peerbit logo" width="150" /></a>
  </p>
</div>

And [many others...](https://github.com/libp2p/js-libp2p/network/dependents)

## Contribute

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## API Docs

- <https://libp2p.github.io/js-libp2p>

## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)
