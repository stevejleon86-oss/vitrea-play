"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod2) => function __require() {
    try {
      return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
    } catch (e) {
      throw mod2 = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/sdp/sdp.js
  var require_sdp = __commonJS({
    "node_modules/sdp/sdp.js"(exports, module) {
      "use strict";
      var SDPUtils2 = {};
      SDPUtils2.generateIdentifier = function() {
        return Math.random().toString(36).substring(2, 12);
      };
      SDPUtils2.localCName = SDPUtils2.generateIdentifier();
      SDPUtils2.splitLines = function(blob) {
        return blob.trim().split("\n").map((line) => line.trim());
      };
      SDPUtils2.splitSections = function(blob) {
        const parts = blob.split("\nm=");
        return parts.map((part, index) => (index > 0 ? "m=" + part : part).trim() + "\r\n");
      };
      SDPUtils2.getDescription = function(blob) {
        const sections = SDPUtils2.splitSections(blob);
        return sections && sections[0];
      };
      SDPUtils2.getMediaSections = function(blob) {
        const sections = SDPUtils2.splitSections(blob);
        sections.shift();
        return sections;
      };
      SDPUtils2.matchPrefix = function(blob, prefix) {
        return SDPUtils2.splitLines(blob).filter((line) => line.indexOf(prefix) === 0);
      };
      SDPUtils2.parseCandidate = function(line) {
        let parts;
        if (line.indexOf("a=candidate:") === 0) {
          parts = line.substring(12).split(" ");
        } else {
          parts = line.substring(10).split(" ");
        }
        const candidate = {
          foundation: parts[0],
          component: { 1: "rtp", 2: "rtcp" }[parts[1]] || parts[1],
          protocol: parts[2].toLowerCase(),
          priority: parseInt(parts[3], 10),
          ip: parts[4],
          address: parts[4],
          // address is an alias for ip.
          port: parseInt(parts[5], 10),
          // skip parts[6] == 'typ'
          type: parts[7]
        };
        for (let i = 8; i < parts.length; i += 2) {
          switch (parts[i]) {
            case "raddr":
              candidate.relatedAddress = parts[i + 1];
              break;
            case "rport":
              candidate.relatedPort = parseInt(parts[i + 1], 10);
              break;
            case "tcptype":
              candidate.tcpType = parts[i + 1];
              break;
            case "ufrag":
              candidate.ufrag = parts[i + 1];
              candidate.usernameFragment = parts[i + 1];
              break;
            default:
              if (candidate[parts[i]] === void 0) {
                candidate[parts[i]] = parts[i + 1];
              }
              break;
          }
        }
        return candidate;
      };
      SDPUtils2.writeCandidate = function(candidate) {
        const sdp2 = [];
        sdp2.push(candidate.foundation);
        const component = candidate.component;
        if (component === "rtp") {
          sdp2.push(1);
        } else if (component === "rtcp") {
          sdp2.push(2);
        } else {
          sdp2.push(component);
        }
        sdp2.push(candidate.protocol.toUpperCase());
        sdp2.push(candidate.priority);
        sdp2.push(candidate.address || candidate.ip);
        sdp2.push(candidate.port);
        const type = candidate.type;
        sdp2.push("typ");
        sdp2.push(type);
        if (type !== "host" && candidate.relatedAddress && candidate.relatedPort !== void 0) {
          sdp2.push("raddr");
          sdp2.push(candidate.relatedAddress);
          sdp2.push("rport");
          sdp2.push(candidate.relatedPort);
        }
        if (candidate.tcpType && candidate.protocol.toLowerCase() === "tcp") {
          sdp2.push("tcptype");
          sdp2.push(candidate.tcpType);
        }
        if (candidate.usernameFragment || candidate.ufrag) {
          sdp2.push("ufrag");
          sdp2.push(candidate.usernameFragment || candidate.ufrag);
        }
        return "candidate:" + sdp2.join(" ");
      };
      SDPUtils2.parseIceOptions = function(line) {
        return line.substring(14).split(" ");
      };
      SDPUtils2.parseRtpMap = function(line) {
        let parts = line.substring(9).split(" ");
        const parsed = {
          payloadType: parseInt(parts.shift(), 10)
          // was: id
        };
        parts = parts[0].split("/");
        parsed.name = parts[0];
        parsed.clockRate = parseInt(parts[1], 10);
        parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
        parsed.numChannels = parsed.channels;
        return parsed;
      };
      SDPUtils2.writeRtpMap = function(codec) {
        let pt = codec.payloadType;
        if (codec.preferredPayloadType !== void 0) {
          pt = codec.preferredPayloadType;
        }
        const channels = codec.channels || codec.numChannels || 1;
        return "a=rtpmap:" + pt + " " + codec.name + "/" + codec.clockRate + (channels !== 1 ? "/" + channels : "") + "\r\n";
      };
      SDPUtils2.parseExtmap = function(line) {
        const parts = line.substring(9).split(" ");
        return {
          id: parseInt(parts[0], 10),
          direction: parts[0].indexOf("/") > 0 ? parts[0].split("/")[1] : "sendrecv",
          uri: parts[1],
          attributes: parts.slice(2).join(" ")
        };
      };
      SDPUtils2.writeExtmap = function(headerExtension) {
        return "a=extmap:" + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== "sendrecv" ? "/" + headerExtension.direction : "") + " " + headerExtension.uri + (headerExtension.attributes ? " " + headerExtension.attributes : "") + "\r\n";
      };
      SDPUtils2.parseFmtp = function(line) {
        const parsed = {};
        let kv;
        const parts = line.substring(line.indexOf(" ") + 1).split(";");
        for (let j = 0; j < parts.length; j++) {
          kv = parts[j].trim().split("=");
          parsed[kv[0].trim()] = kv[1];
        }
        return parsed;
      };
      SDPUtils2.writeFmtp = function(codec) {
        let line = "";
        let pt = codec.payloadType;
        if (codec.preferredPayloadType !== void 0) {
          pt = codec.preferredPayloadType;
        }
        if (codec.parameters && Object.keys(codec.parameters).length) {
          const params = [];
          Object.keys(codec.parameters).forEach((param) => {
            if (codec.parameters[param] !== void 0) {
              params.push(param + "=" + codec.parameters[param]);
            } else {
              params.push(param);
            }
          });
          line += "a=fmtp:" + pt + " " + params.join(";") + "\r\n";
        }
        return line;
      };
      SDPUtils2.parseRtcpFb = function(line) {
        const parts = line.substring(line.indexOf(" ") + 1).split(" ");
        return {
          type: parts.shift(),
          parameter: parts.join(" ")
        };
      };
      SDPUtils2.writeRtcpFb = function(codec) {
        let lines2 = "";
        let pt = codec.payloadType;
        if (codec.preferredPayloadType !== void 0) {
          pt = codec.preferredPayloadType;
        }
        if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
          codec.rtcpFeedback.forEach((fb) => {
            lines2 += "a=rtcp-fb:" + pt + " " + fb.type + (fb.parameter && fb.parameter.length ? " " + fb.parameter : "") + "\r\n";
          });
        }
        return lines2;
      };
      SDPUtils2.parseSsrcMedia = function(line) {
        const sp = line.indexOf(" ");
        const parts = {
          ssrc: parseInt(line.substring(7, sp), 10)
        };
        const colon = line.indexOf(":", sp);
        if (colon > -1) {
          parts.attribute = line.substring(sp + 1, colon);
          parts.value = line.substring(colon + 1);
        } else {
          parts.attribute = line.substring(sp + 1);
        }
        return parts;
      };
      SDPUtils2.parseSsrcGroup = function(line) {
        const parts = line.substring(13).split(" ");
        return {
          semantics: parts.shift(),
          ssrcs: parts.map((ssrc) => parseInt(ssrc, 10))
        };
      };
      SDPUtils2.getMid = function(mediaSection) {
        const mid = SDPUtils2.matchPrefix(mediaSection, "a=mid:")[0];
        if (mid) {
          return mid.substring(6);
        }
      };
      SDPUtils2.parseFingerprint = function(line) {
        const parts = line.substring(14).split(" ");
        return {
          algorithm: parts[0].toLowerCase(),
          // algorithm is case-sensitive in Edge.
          value: parts[1].toUpperCase()
          // the definition is upper-case in RFC 4572.
        };
      };
      SDPUtils2.getDtlsParameters = function(mediaSection, sessionpart) {
        const lines2 = SDPUtils2.matchPrefix(
          mediaSection + sessionpart,
          "a=fingerprint:"
        );
        return {
          role: "auto",
          fingerprints: lines2.map(SDPUtils2.parseFingerprint)
        };
      };
      SDPUtils2.writeDtlsParameters = function(params, setupType) {
        let sdp2 = "a=setup:" + setupType + "\r\n";
        params.fingerprints.forEach((fp) => {
          sdp2 += "a=fingerprint:" + fp.algorithm + " " + fp.value + "\r\n";
        });
        return sdp2;
      };
      SDPUtils2.parseCryptoLine = function(line) {
        const parts = line.substring(9).split(" ");
        return {
          tag: parseInt(parts[0], 10),
          cryptoSuite: parts[1],
          keyParams: parts[2],
          sessionParams: parts.slice(3)
        };
      };
      SDPUtils2.writeCryptoLine = function(parameters) {
        return "a=crypto:" + parameters.tag + " " + parameters.cryptoSuite + " " + (typeof parameters.keyParams === "object" ? SDPUtils2.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? " " + parameters.sessionParams.join(" ") : "") + "\r\n";
      };
      SDPUtils2.parseCryptoKeyParams = function(keyParams) {
        if (keyParams.indexOf("inline:") !== 0) {
          return null;
        }
        const parts = keyParams.substring(7).split("|");
        return {
          keyMethod: "inline",
          keySalt: parts[0],
          lifeTime: parts[1],
          mkiValue: parts[2] ? parts[2].split(":")[0] : void 0,
          mkiLength: parts[2] ? parts[2].split(":")[1] : void 0
        };
      };
      SDPUtils2.writeCryptoKeyParams = function(keyParams) {
        return keyParams.keyMethod + ":" + keyParams.keySalt + (keyParams.lifeTime ? "|" + keyParams.lifeTime : "") + (keyParams.mkiValue && keyParams.mkiLength ? "|" + keyParams.mkiValue + ":" + keyParams.mkiLength : "");
      };
      SDPUtils2.getCryptoParameters = function(mediaSection, sessionpart) {
        const lines2 = SDPUtils2.matchPrefix(
          mediaSection + sessionpart,
          "a=crypto:"
        );
        return lines2.map(SDPUtils2.parseCryptoLine);
      };
      SDPUtils2.getIceParameters = function(mediaSection, sessionpart) {
        const ufrag = SDPUtils2.matchPrefix(
          mediaSection + sessionpart,
          "a=ice-ufrag:"
        )[0];
        const pwd = SDPUtils2.matchPrefix(
          mediaSection + sessionpart,
          "a=ice-pwd:"
        )[0];
        if (!(ufrag && pwd)) {
          return null;
        }
        return {
          usernameFragment: ufrag.substring(12),
          password: pwd.substring(10)
        };
      };
      SDPUtils2.writeIceParameters = function(params) {
        let sdp2 = "a=ice-ufrag:" + params.usernameFragment + "\r\na=ice-pwd:" + params.password + "\r\n";
        if (params.iceLite) {
          sdp2 += "a=ice-lite\r\n";
        }
        return sdp2;
      };
      SDPUtils2.parseRtpParameters = function(mediaSection) {
        const description = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        };
        const lines2 = SDPUtils2.splitLines(mediaSection);
        const mline = lines2[0].split(" ");
        description.profile = mline[2];
        for (let i = 3; i < mline.length; i++) {
          const pt = mline[i];
          const rtpmapline = SDPUtils2.matchPrefix(
            mediaSection,
            "a=rtpmap:" + pt + " "
          )[0];
          if (rtpmapline) {
            const codec = SDPUtils2.parseRtpMap(rtpmapline);
            const fmtps = SDPUtils2.matchPrefix(
              mediaSection,
              "a=fmtp:" + pt + " "
            );
            codec.parameters = fmtps.length ? SDPUtils2.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils2.matchPrefix(
              mediaSection,
              "a=rtcp-fb:" + pt + " "
            ).map(SDPUtils2.parseRtcpFb);
            description.codecs.push(codec);
            switch (codec.name.toUpperCase()) {
              case "RED":
              case "ULPFEC":
                description.fecMechanisms.push(codec.name.toUpperCase());
                break;
              default:
                break;
            }
          }
        }
        SDPUtils2.matchPrefix(mediaSection, "a=extmap:").forEach((line) => {
          description.headerExtensions.push(SDPUtils2.parseExtmap(line));
        });
        const wildcardRtcpFb = SDPUtils2.matchPrefix(mediaSection, "a=rtcp-fb:* ").map(SDPUtils2.parseRtcpFb);
        description.codecs.forEach((codec) => {
          wildcardRtcpFb.forEach((fb) => {
            const duplicate = codec.rtcpFeedback.find((existingFeedback) => {
              return existingFeedback.type === fb.type && existingFeedback.parameter === fb.parameter;
            });
            if (!duplicate) {
              codec.rtcpFeedback.push(fb);
            }
          });
        });
        return description;
      };
      SDPUtils2.writeRtpDescription = function(kind, caps) {
        let sdp2 = "";
        sdp2 += "m=" + kind + " ";
        sdp2 += caps.codecs.length > 0 ? "9" : "0";
        sdp2 += " " + (caps.profile || "UDP/TLS/RTP/SAVPF") + " ";
        sdp2 += caps.codecs.map((codec) => {
          if (codec.preferredPayloadType !== void 0) {
            return codec.preferredPayloadType;
          }
          return codec.payloadType;
        }).join(" ") + "\r\n";
        sdp2 += "c=IN IP4 0.0.0.0\r\n";
        sdp2 += "a=rtcp:9 IN IP4 0.0.0.0\r\n";
        caps.codecs.forEach((codec) => {
          sdp2 += SDPUtils2.writeRtpMap(codec);
          sdp2 += SDPUtils2.writeFmtp(codec);
          sdp2 += SDPUtils2.writeRtcpFb(codec);
        });
        let maxptime = 0;
        caps.codecs.forEach((codec) => {
          if (codec.maxptime > maxptime) {
            maxptime = codec.maxptime;
          }
        });
        if (maxptime > 0) {
          sdp2 += "a=maxptime:" + maxptime + "\r\n";
        }
        if (caps.headerExtensions) {
          caps.headerExtensions.forEach((extension) => {
            sdp2 += SDPUtils2.writeExtmap(extension);
          });
        }
        return sdp2;
      };
      SDPUtils2.parseRtpEncodingParameters = function(mediaSection) {
        const encodingParameters = [];
        const description = SDPUtils2.parseRtpParameters(mediaSection);
        const hasRed = description.fecMechanisms.indexOf("RED") !== -1;
        const hasUlpfec = description.fecMechanisms.indexOf("ULPFEC") !== -1;
        const ssrcs = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map((line) => SDPUtils2.parseSsrcMedia(line)).filter((parts) => parts.attribute === "cname");
        const primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
        let secondarySsrc;
        const flows = SDPUtils2.matchPrefix(mediaSection, "a=ssrc-group:FID").map((line) => {
          const parts = line.substring(17).split(" ");
          return parts.map((part) => parseInt(part, 10));
        });
        if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
          secondarySsrc = flows[0][1];
        }
        description.codecs.forEach((codec) => {
          if (codec.name.toUpperCase() === "RTX" && codec.parameters.apt) {
            let encParam = {
              ssrc: primarySsrc,
              codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) {
              encParam.rtx = { ssrc: secondarySsrc };
            }
            encodingParameters.push(encParam);
            if (hasRed) {
              encParam = JSON.parse(JSON.stringify(encParam));
              encParam.fec = {
                ssrc: primarySsrc,
                mechanism: hasUlpfec ? "red+ulpfec" : "red"
              };
              encodingParameters.push(encParam);
            }
          }
        });
        if (encodingParameters.length === 0 && primarySsrc) {
          encodingParameters.push({
            ssrc: primarySsrc
          });
        }
        let bandwidth = SDPUtils2.matchPrefix(mediaSection, "b=");
        if (bandwidth.length) {
          if (bandwidth[0].indexOf("b=TIAS:") === 0) {
            bandwidth = parseInt(bandwidth[0].substring(7), 10);
          } else if (bandwidth[0].indexOf("b=AS:") === 0) {
            bandwidth = parseInt(bandwidth[0].substring(5), 10) * 1e3 * 0.95 - 50 * 40 * 8;
          } else {
            bandwidth = void 0;
          }
          encodingParameters.forEach((params) => {
            params.maxBitrate = bandwidth;
          });
        }
        return encodingParameters;
      };
      SDPUtils2.parseRtcpParameters = function(mediaSection) {
        const rtcpParameters = {};
        const remoteSsrc = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map((line) => SDPUtils2.parseSsrcMedia(line)).filter((obj) => obj.attribute === "cname")[0];
        if (remoteSsrc) {
          rtcpParameters.cname = remoteSsrc.value;
          rtcpParameters.ssrc = remoteSsrc.ssrc;
        }
        const rsize = SDPUtils2.matchPrefix(mediaSection, "a=rtcp-rsize");
        rtcpParameters.reducedSize = rsize.length > 0;
        rtcpParameters.compound = rsize.length === 0;
        const mux = SDPUtils2.matchPrefix(mediaSection, "a=rtcp-mux");
        rtcpParameters.mux = mux.length > 0;
        return rtcpParameters;
      };
      SDPUtils2.writeRtcpParameters = function(rtcpParameters) {
        let sdp2 = "";
        if (rtcpParameters.reducedSize) {
          sdp2 += "a=rtcp-rsize\r\n";
        }
        if (rtcpParameters.mux) {
          sdp2 += "a=rtcp-mux\r\n";
        }
        if (rtcpParameters.ssrc !== void 0 && rtcpParameters.cname) {
          sdp2 += "a=ssrc:" + rtcpParameters.ssrc + " cname:" + rtcpParameters.cname + "\r\n";
        }
        return sdp2;
      };
      SDPUtils2.parseMsid = function(mediaSection) {
        let parts;
        const spec = SDPUtils2.matchPrefix(mediaSection, "a=msid:");
        if (spec.length === 1) {
          parts = spec[0].substring(7).split(" ");
          return { stream: parts[0], track: parts[1] };
        }
        const planB = SDPUtils2.matchPrefix(mediaSection, "a=ssrc:").map((line) => SDPUtils2.parseSsrcMedia(line)).filter((msidParts) => msidParts.attribute === "msid");
        if (planB.length > 0) {
          parts = planB[0].value.split(" ");
          return { stream: parts[0], track: parts[1] };
        }
      };
      SDPUtils2.parseSctpDescription = function(mediaSection) {
        const mline = SDPUtils2.parseMLine(mediaSection);
        const maxSizeLine = SDPUtils2.matchPrefix(mediaSection, "a=max-message-size:");
        let maxMessageSize;
        if (maxSizeLine.length > 0) {
          maxMessageSize = parseInt(maxSizeLine[0].substring(19), 10);
        }
        if (isNaN(maxMessageSize)) {
          maxMessageSize = 65536;
        }
        const sctpPort = SDPUtils2.matchPrefix(mediaSection, "a=sctp-port:");
        if (sctpPort.length > 0) {
          return {
            port: parseInt(sctpPort[0].substring(12), 10),
            protocol: mline.fmt,
            maxMessageSize
          };
        }
        const sctpMapLines = SDPUtils2.matchPrefix(mediaSection, "a=sctpmap:");
        if (sctpMapLines.length > 0) {
          const parts = sctpMapLines[0].substring(10).split(" ");
          return {
            port: parseInt(parts[0], 10),
            protocol: parts[1],
            maxMessageSize
          };
        }
      };
      SDPUtils2.writeSctpDescription = function(media, sctp) {
        let output = [];
        if (media.protocol !== "DTLS/SCTP") {
          output = [
            "m=" + media.kind + " 9 " + media.protocol + " " + sctp.protocol + "\r\n",
            "c=IN IP4 0.0.0.0\r\n",
            "a=sctp-port:" + sctp.port + "\r\n"
          ];
        } else {
          output = [
            "m=" + media.kind + " 9 " + media.protocol + " " + sctp.port + "\r\n",
            "c=IN IP4 0.0.0.0\r\n",
            "a=sctpmap:" + sctp.port + " " + sctp.protocol + " 65535\r\n"
          ];
        }
        if (sctp.maxMessageSize !== void 0) {
          output.push("a=max-message-size:" + sctp.maxMessageSize + "\r\n");
        }
        return output.join("");
      };
      SDPUtils2.generateSessionId = function() {
        return Math.random().toString().substr(2, 22);
      };
      SDPUtils2.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
        let sessionId;
        const version = sessVer !== void 0 ? sessVer : 2;
        if (sessId) {
          sessionId = sessId;
        } else {
          sessionId = SDPUtils2.generateSessionId();
        }
        const user = sessUser || "thisisadapterortc";
        return "v=0\r\no=" + user + " " + sessionId + " " + version + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n";
      };
      SDPUtils2.getDirection = function(mediaSection, sessionpart) {
        const lines2 = SDPUtils2.splitLines(mediaSection);
        for (let i = 0; i < lines2.length; i++) {
          switch (lines2[i]) {
            case "a=sendrecv":
            case "a=sendonly":
            case "a=recvonly":
            case "a=inactive":
              return lines2[i].substring(2);
            default:
          }
        }
        if (sessionpart) {
          return SDPUtils2.getDirection(sessionpart);
        }
        return "sendrecv";
      };
      SDPUtils2.getKind = function(mediaSection) {
        const lines2 = SDPUtils2.splitLines(mediaSection);
        const mline = lines2[0].split(" ");
        return mline[0].substring(2);
      };
      SDPUtils2.isRejected = function(mediaSection) {
        return mediaSection.split(" ", 2)[1] === "0";
      };
      SDPUtils2.parseMLine = function(mediaSection) {
        const lines2 = SDPUtils2.splitLines(mediaSection);
        const parts = lines2[0].substring(2).split(" ");
        return {
          kind: parts[0],
          port: parseInt(parts[1], 10),
          protocol: parts[2],
          fmt: parts.slice(3).join(" ")
        };
      };
      SDPUtils2.parseOLine = function(mediaSection) {
        const line = SDPUtils2.matchPrefix(mediaSection, "o=")[0];
        const parts = line.substring(2).split(" ");
        return {
          username: parts[0],
          sessionId: parts[1],
          sessionVersion: parseInt(parts[2], 10),
          netType: parts[3],
          addressType: parts[4],
          address: parts[5]
        };
      };
      SDPUtils2.isValidSDP = function(blob) {
        if (typeof blob !== "string" || blob.length === 0) {
          return false;
        }
        const lines2 = SDPUtils2.splitLines(blob);
        for (let i = 0; i < lines2.length; i++) {
          if (lines2[i].length < 2 || lines2[i].charAt(1) !== "=") {
            return false;
          }
        }
        return true;
      };
      if (typeof module === "object") {
        module.exports = SDPUtils2;
      }
    }
  });

  // src/config.ts
  var TILE = 32;
  var MAP_W = 96;
  var MAP_H = 96;
  var RESOURCE_NAME = "crystal";
  var START_CREDITS = 2500;
  var BUILD_RATE = 60;
  var MIN_BUILD_TIME = 2;
  var LOW_POWER_FACTOR = 0.5;
  var PLACE_GAP = 3;
  var BUILD_RADIUS = 10;
  var MAX_QUEUE = 5;
  var WEAPONS = {
    rifle: { range: 3, damage: 10, cooldown: 0.9, speed: 0, style: "tracer", vs: { infantry: 1, light: 0.5, heavy: 0.2, building: 0.25 } },
    mg: { range: 3.5, damage: 9, cooldown: 0.35, speed: 0, style: "tracer", vs: { infantry: 1.2, light: 0.8, heavy: 0.25, building: 0.3 }, hits: "both" },
    raiderGun: { range: 3, damage: 6, cooldown: 0.3, speed: 0, style: "tracer", vs: { infantry: 1.1, light: 0.6, heavy: 0.2, building: 0.2 }, hits: "both" },
    cannon: { range: 4.5, damage: 50, cooldown: 1.8, speed: 10, style: "shell", vs: { infantry: 0.35, light: 1, heavy: 1, building: 0.8 } },
    rocket: { range: 4, damage: 32, cooldown: 2.2, speed: 8, style: "rocket", vs: { infantry: 0.3, light: 1.1, heavy: 1, building: 0.8 }, hits: "both" },
    artilleryShell: { range: 8.5, minRange: 2.5, damage: 70, cooldown: 3.5, speed: 6, style: "arc", splash: 1.3, vs: { infantry: 1.2, light: 0.8, heavy: 0.5, building: 1 } },
    turretGun: { range: 5.5, damage: 40, cooldown: 1.5, speed: 12, style: "shell", vs: { infantry: 0.5, light: 1, heavy: 1, building: 0.5 } },
    turretRocket: { range: 7.5, damage: 55, cooldown: 2.4, speed: 10, style: "rocket", vs: { infantry: 0.4, light: 1.1, heavy: 1.1, building: 0.5 }, hits: "both" },
    // Air war: gunship rockets (ground only), bombs (ground only, big splash), flak (aircraft only).
    gunRockets: { range: 4, damage: 26, cooldown: 1.2, speed: 12, style: "rocket", vs: { infantry: 0.7, light: 1, heavy: 0.8, building: 0.5 } },
    bombs: { range: 1.4, damage: 150, cooldown: 4.5, speed: 5, style: "arc", splash: 1.6, vs: { infantry: 1, light: 1, heavy: 0.9, building: 1.4 } },
    flak: { range: 7, damage: 24, cooldown: 0.55, speed: 14, style: "shell", vs: { infantry: 0, light: 1.2, heavy: 1, building: 0 }, hits: "air" },
    // Shardbound crystal weapons.
    shardRifle: { range: 3.5, damage: 9, cooldown: 0.85, speed: 0, style: "beam", vs: { infantry: 1, light: 0.5, heavy: 0.25, building: 0.25 } },
    shardRepeater: { range: 3.5, damage: 8, cooldown: 0.3, speed: 0, style: "beam", vs: { infantry: 1.1, light: 0.9, heavy: 0.3, building: 0.3 }, hits: "both" },
    prismBeam: { range: 5, damage: 40, cooldown: 1.7, speed: 0, style: "beam", vs: { infantry: 0.4, light: 1, heavy: 1.1, building: 0.8 } },
    resonance: { range: 7.5, minRange: 2, damage: 60, cooldown: 3.2, speed: 7, style: "arc", splash: 1.6, vs: { infantry: 1.6, light: 0.7, heavy: 0.4, building: 0.8 } },
    // Reclaimer scrap weapons.
    scattergun: { range: 2.5, damage: 18, cooldown: 1.1, speed: 0, style: "tracer", vs: { infantry: 1.3, light: 0.6, heavy: 0.2, building: 0.3 } },
    flamer: { range: 2.5, damage: 6, cooldown: 0.15, speed: 0, style: "flame", vs: { infantry: 1.4, light: 0.7, heavy: 0.3, building: 1 } },
    autocannon: { range: 4, damage: 22, cooldown: 0.8, speed: 11, style: "shell", vs: { infantry: 0.6, light: 1, heavy: 0.8, building: 0.6 }, hits: "both" },
    mortar: { range: 6.5, minRange: 2, damage: 45, cooldown: 2.6, speed: 6, style: "arc", splash: 1.2, vs: { infantry: 1.3, light: 0.7, heavy: 0.4, building: 0.9 } },
    // Snipers: long reach, deadly to infantry, next to useless against armour.
    marksmanRifle: { range: 7, damage: 75, cooldown: 3, speed: 0, style: "tracer", vs: { infantry: 1, light: 0.12, heavy: 0.04, building: 0.04 } },
    lancerBeam: { range: 6.5, damage: 55, cooldown: 2.5, speed: 0, style: "beam", vs: { infantry: 1, light: 0.45, heavy: 0.1, building: 0.05 } },
    deadeyeRifle: { range: 6, damage: 65, cooldown: 2.6, speed: 0, style: "tracer", vs: { infantry: 1, light: 0.2, heavy: 0.05, building: 0.05 } },
    // Tech Center heavies.
    twinCannon: { range: 5, damage: 55, cooldown: 1.1, speed: 11, style: "shell", vs: { infantry: 0.4, light: 1, heavy: 1.1, building: 0.9 } },
    monolithBeam: { range: 6.5, damage: 120, cooldown: 2.6, speed: 0, style: "beam", vs: { infantry: 0.5, light: 1, heavy: 1.2, building: 1 } },
    // Hero weapons.
    vancePistols: { range: 4.5, damage: 30, cooldown: 0.55, speed: 0, style: "tracer", vs: { infantry: 1.6, light: 0.6, heavy: 0.25, building: 0.3 } },
    seerBeam: { range: 5, damage: 32, cooldown: 0.7, speed: 0, style: "beam", vs: { infantry: 1.2, light: 1, heavy: 0.7, building: 0.4 }, hits: "both" },
    rookCannon: { range: 3.5, damage: 40, cooldown: 0.8, speed: 0, style: "tracer", vs: { infantry: 1.3, light: 1.1, heavy: 0.6, building: 0.6 } },
    scrapCannon: { range: 4.5, damage: 50, cooldown: 1, speed: 10, style: "shell", splash: 0.9, vs: { infantry: 0.8, light: 1, heavy: 0.9, building: 0.8 } }
  };
  function weapon(kind) {
    return WEAPONS[kind];
  }
  var ALERT_MARGIN = 1.5;
  var GUARD_RADIUS = 7;
  var LEASH = 11;
  var CRYSTALS = {
    /** A tile never holds more than this. */
    maxPerTile: 500,
    /** Units regrown per second on any tile that still has some crystal. */
    regrowRate: 0.75,
    /** Chance per second that a well-stocked tile seeds an empty neighbour. */
    spreadChance: 2e-3,
    /** A tile needs at least this much before it can spread. */
    spreadMin: 220,
    /** How much a freshly seeded tile starts with. */
    seedAmount: 60,
    /** Spreading (and storm seeding) stops once the map holds this many times its starting crystal. */
    capFactor: 1.5,
    /** How often growth is applied. */
    interval: 1
  };
  var STORMS = {
    firstSpawn: 200,
    /** Gap before the next storm after one passes (random in this range). */
    gapMin: 90,
    gapMax: 150,
    /** Full-strength radius (tiles). */
    radius: 4,
    /** A storm builds up for this long (s), rages for a while, then dies down over `fade` (s). */
    buildUp: 20,
    rageMin: 35,
    rageMax: 55,
    fade: 10,
    /** Damage per second inside the storm, by armour class. */
    damage: { infantry: 14, light: 10, heavy: 5, building: 2 },
    /** Tiles per second the raging storm seeds with storm glass, and how much each gets. */
    seedRate: 1.2,
    seedAmount: 150
  };
  var SIGHT = {
    infantry: 4,
    glasswalker: 4.5,
    skimmer: 6.5,
    prismTank: 5.5,
    resonator: 5,
    scrapper: 4,
    junker: 6,
    wrecker: 5,
    mortarCrawler: 5,
    medic: 4,
    mender: 4.5,
    mechanic: 4,
    marksman: 7.5,
    lancer: 7,
    deadeye: 7,
    bastion: 5.5,
    monolith: 6,
    titan: 5,
    vance: 6,
    seer: 7,
    rook: 5,
    rocketInfantry: 4,
    quad: 6,
    raider: 7,
    tank: 5,
    artillery: 5,
    harvester: 4,
    outpostTruck: 5,
    drillRig: 5,
    gunship: 6,
    dropship: 5,
    bomber: 5,
    flakTurret: 7.5,
    building: 5,
    turret: 6.5,
    rocketTurret: 8
  };
  var FOG_INTERVAL = 0.2;
  var FACTION_IDS = ["concord", "shardbound", "reclaimers"];
  var UNIT_STATS = {
    infantry: { label: "Infantry", speed: 1.2, maxHp: 50, radius: 5, cost: 60, producer: "barracks", needs: null, armor: "infantry", weapon: "rifle", faction: "concord" },
    rocketInfantry: { label: "Rocket Trooper", speed: 1.1, maxHp: 45, radius: 5, cost: 100, producer: "barracks", needs: null, armor: "infantry", weapon: "rocket", faction: "any" },
    quad: { label: "Quad", speed: 3.5, maxHp: 120, radius: 9, cost: 260, producer: "lightFactory", needs: null, armor: "light", weapon: "mg", faction: "concord" },
    raider: { label: "Raider", speed: 4.6, maxHp: 80, radius: 8, cost: 150, producer: "lightFactory", needs: null, armor: "light", weapon: "raiderGun", faction: "any" },
    tank: { label: "Tank", speed: 2, maxHp: 450, radius: 11, cost: 620, producer: "heavyFactory", needs: null, armor: "heavy", weapon: "cannon", faction: "concord" },
    artillery: { label: "Artillery", speed: 1.5, maxHp: 160, radius: 11, cost: 720, producer: "heavyFactory", needs: "radar", armor: "light", weapon: "artilleryShell", faction: "concord" },
    harvester: { label: "Harvester", speed: 1.6, maxHp: 400, radius: 13, cost: 1100, producer: "heavyFactory", needs: null, armor: "heavy", weapon: null, faction: "any" },
    // Aircraft (AIR): fly straight over anything; only some weapons can hit them.
    gunship: { label: "Gunship", speed: 4.2, maxHp: 220, radius: 12, cost: 900, producer: "airfield", needs: null, armor: "light", weapon: "gunRockets", faction: "any" },
    dropship: { label: "Dropship", speed: 3.6, maxHp: 380, radius: 14, cost: 700, producer: "airfield", needs: null, armor: "heavy", weapon: null, faction: "any" },
    bomber: { label: "Bomber", speed: 2.6, maxHp: 420, radius: 15, cost: 1800, producer: "airfield", needs: "techCenter", armor: "heavy", weapon: "bombs", faction: "any" },
    // Deployable vehicles: drive to a field, deploy (Q) into a building (economy.ts).
    outpostTruck: { label: "Outpost Truck", speed: 1.5, maxHp: 500, radius: 13, cost: 1600, producer: "heavyFactory", needs: null, armor: "heavy", weapon: null, faction: "any" },
    drillRig: { label: "Drill Rig", speed: 1.6, maxHp: 450, radius: 12, cost: 700, producer: "heavyFactory", needs: null, armor: "heavy", weapon: null, faction: "concord" },
    glasswalker: { label: "Glasswalker", speed: 1.3, maxHp: 55, radius: 5, cost: 70, producer: "barracks", needs: null, armor: "infantry", weapon: "shardRifle", faction: "shardbound" },
    skimmer: { label: "Skimmer", speed: 4.2, maxHp: 100, radius: 9, cost: 280, producer: "lightFactory", needs: null, armor: "light", weapon: "shardRepeater", faction: "shardbound" },
    prismTank: { label: "Prism Tank", speed: 2.3, maxHp: 380, radius: 11, cost: 750, producer: "heavyFactory", needs: null, armor: "heavy", weapon: "prismBeam", faction: "shardbound" },
    resonator: { label: "Resonator", speed: 1.6, maxHp: 150, radius: 11, cost: 800, producer: "heavyFactory", needs: "radar", armor: "light", weapon: "resonance", faction: "shardbound" },
    scrapper: { label: "Scrapper", speed: 1.3, maxHp: 50, radius: 5, cost: 60, producer: "barracks", needs: null, armor: "infantry", weapon: "scattergun", faction: "reclaimers" },
    junker: { label: "Junker", speed: 4, maxHp: 95, radius: 8, cost: 250, producer: "lightFactory", needs: null, armor: "light", weapon: "flamer", faction: "reclaimers" },
    wrecker: { label: "Wrecker", speed: 1.9, maxHp: 400, radius: 11, cost: 600, producer: "heavyFactory", needs: null, armor: "heavy", weapon: "autocannon", faction: "reclaimers" },
    mortarCrawler: { label: "Mortar Crawler", speed: 1.4, maxHp: 140, radius: 10, cost: 600, producer: "heavyFactory", needs: "radar", armor: "light", weapon: "mortar", faction: "reclaimers" },
    // Support infantry (see HEALERS) and snipers.
    medic: { label: "Field Medic", speed: 1.3, maxHp: 60, radius: 5, cost: 200, producer: "barracks", needs: null, armor: "infantry", weapon: null, faction: "concord" },
    mender: { label: "Mender", speed: 1.3, maxHp: 65, radius: 5, cost: 250, producer: "barracks", needs: null, armor: "infantry", weapon: null, faction: "shardbound" },
    mechanic: { label: "Mechanic", speed: 1.3, maxHp: 60, radius: 5, cost: 200, producer: "barracks", needs: null, armor: "infantry", weapon: null, faction: "reclaimers" },
    marksman: { label: "Marksman", speed: 1.1, maxHp: 45, radius: 5, cost: 400, producer: "barracks", needs: "radar", armor: "infantry", weapon: "marksmanRifle", faction: "concord" },
    lancer: { label: "Lancer", speed: 1.2, maxHp: 50, radius: 5, cost: 450, producer: "barracks", needs: "radar", armor: "infantry", weapon: "lancerBeam", faction: "shardbound" },
    deadeye: { label: "Deadeye", speed: 1.2, maxHp: 45, radius: 5, cost: 420, producer: "barracks", needs: "radar", armor: "infantry", weapon: "deadeyeRifle", faction: "reclaimers" },
    // Top tier: needs a Tech Center.
    bastion: { label: "Bastion", speed: 1.5, maxHp: 900, radius: 13, cost: 1450, producer: "heavyFactory", needs: "techCenter", armor: "heavy", weapon: "twinCannon", faction: "concord" },
    monolith: { label: "Monolith", speed: 1.6, maxHp: 700, radius: 13, cost: 1600, producer: "heavyFactory", needs: "techCenter", armor: "heavy", weapon: "monolithBeam", faction: "shardbound" },
    // Heroes (see HEROES): one per side at a time.
    vance: { label: "Captain Vance", speed: 1.6, maxHp: 400, radius: 6, cost: 2e3, producer: "barracks", needs: "techCenter", armor: "infantry", weapon: "vancePistols", faction: "concord" },
    seer: { label: "The Seer", speed: 1.5, maxHp: 350, radius: 6, cost: 2e3, producer: "barracks", needs: "techCenter", armor: "infantry", weapon: "seerBeam", faction: "shardbound" },
    rook: { label: "Boss Rook", speed: 1.4, maxHp: 480, radius: 6, cost: 2e3, producer: "barracks", needs: "techCenter", armor: "infantry", weapon: "rookCannon", faction: "reclaimers" },
    titan: { label: "Scrap Titan", speed: 1.3, maxHp: 1e3, radius: 14, cost: 1500, producer: "heavyFactory", needs: "techCenter", armor: "heavy", weapon: "scrapCannon", faction: "reclaimers" }
  };
  var RESEARCH = {
    compositeArmor: { label: "Composite Armour", faction: "concord", cost: 1500, blurb: "Vehicles take a further 15% less damage.", effect: { vehicleArmor: 0.85 } },
    longBarrels: { label: "Long Barrels", faction: "concord", cost: 1500, blurb: "Unit weapons reach 15% further.", effect: { range: 1.15 } },
    logistics: { label: "Logistics", faction: "concord", cost: 1200, blurb: "Everything is built 25% faster.", effect: { buildSpeed: 1.25 } },
    fieldTraining: { label: "Field Training", faction: "concord", cost: 2e3, blurb: "New units arrive as Veterans.", effect: { startRank: 1 } },
    deepResonance: { label: "Deep Resonance", faction: "shardbound", cost: 1200, blurb: "Crystal heals your units 2.5x as fast.", effect: { regen: 2.5 } },
    stormRiders: { label: "Storm Riders", faction: "shardbound", cost: 1500, blurb: "Storms can't hurt your units, and they move 10% faster.", effect: { storm: 0, speed: 1.1 } },
    prismFocus: { label: "Prism Focus", faction: "shardbound", cost: 1800, blurb: "Unit weapons deal 15% more damage.", effect: { damage: 1.15 } },
    communion: { label: "Shard Communion", faction: "shardbound", cost: 2e3, blurb: "New units arrive as Veterans.", effect: { startRank: 1 } },
    scrapPlating: { label: "Scrap Plating", faction: "reclaimers", cost: 1500, blurb: "All units take 10% less damage.", effect: { armor: 0.9 } },
    stripThemBare: { label: "Strip Them Bare", faction: "reclaimers", cost: 1200, blurb: "Salvage pays 50% of a wreck's cost instead of 25%.", effect: { salvage: 0.25 } },
    overclocked: { label: "Overclocked Engines", faction: "reclaimers", cost: 1500, blurb: "Units move 20% faster.", effect: { speed: 1.2 } },
    hardKnocks: { label: "Hard Knocks", faction: "reclaimers", cost: 2e3, blurb: "New units arrive as Veterans.", effect: { startRank: 1 } }
  };
  var HEROES = {
    vance: { ability: "Demolition Charge", kind: "charge", cooldown: 45, blurb: "Plants a charge on an enemy building next to him; it blows 3 seconds later." },
    seer: { ability: "Crystal Ward", kind: "ward", cooldown: 40, blurb: "Friendly units nearby take 60% less damage for 8 seconds." },
    rook: { ability: "Call the Crew", kind: "crew", cooldown: 60, blurb: "Three Scrappers turn up to help." }
  };
  var HEALERS = {
    medic: { amount: 10, interval: 0.5, range: 2.5, seek: 6, treats: "infantry" },
    mender: { amount: 7, interval: 0.5, range: 3, seek: 6, treats: "infantry" },
    mechanic: { amount: 14, interval: 0.6, range: 2, seek: 6, treats: "vehicles" }
  };
  var FACTIONS = {
    concord: {
      label: "Concord",
      blurb: "The colony company's security force, left behind when the company fled. Armoured, conventional, dependable.",
      perks: ["Reinforced: vehicles take 15% less damage"],
      /** Damage multiplier for this side's vehicles. */
      vehicleArmor: 0.85,
      stormDamage: 1,
      /** Hit points per second regained while standing on crystal. */
      crystalRegen: 0,
      /** Multiplier on unit prices. */
      costFactor: 1,
      /** Share of an enemy unit's cost paid out when it is destroyed. */
      salvage: 0
    },
    shardbound: {
      label: "Shardbound",
      blurb: "Settlers who stayed through the storms and learned to live with the crystal. Fast, strange, glass-powered.",
      perks: ["Storm-hardened: 60% less storm damage", "Crystal-healing: units slowly repair on crystal"],
      vehicleArmor: 1,
      stormDamage: 0.4,
      crystalRegen: 4,
      costFactor: 1,
      salvage: 0
    },
    reclaimers: {
      label: "Reclaimers",
      blurb: "Scavenger clans from the ash wastes who strip every wreck and rebuild it into weapons. Cheap, scrappy, numerous.",
      perks: ["Scrounged: units cost 15% less", "Salvage: destroyed enemy units pay out 25% of their cost"],
      vehicleArmor: 1,
      stormDamage: 1,
      crystalRegen: 0,
      costFactor: 0.85,
      salvage: 0.25
    }
  };
  var EQUIVALENT = {
    concord: {},
    shardbound: { infantry: "glasswalker", quad: "skimmer", tank: "prismTank", artillery: "resonator", medic: "mender", marksman: "lancer", bastion: "monolith", vance: "seer" },
    reclaimers: { infantry: "scrapper", quad: "junker", tank: "wrecker", artillery: "mortarCrawler", medic: "mechanic", marksman: "deadeye", bastion: "titan", vance: "rook" }
  };
  function unitCost(faction, kind) {
    return Math.round(UNIT_STATS[kind].cost * FACTIONS[faction].costFactor);
  }
  function factionUnit(faction, role) {
    return EQUIVALENT[faction][role] ?? role;
  }
  function canTrain(faction, kind) {
    const f = UNIT_STATS[kind].faction;
    return f === "any" || f === faction;
  }
  var VEINS = {
    /** What one unit taken from the tile is worth (credits; for cores, cores). */
    value: [1, 1, 2, 1],
    /** Regrowth, as a share of CRYSTALS.regrowRate (cores use CORES.regrow). */
    regrow: [1, 0.3, 0, 0],
    /** The most a tile of this kind holds. */
    max: [500, 1e3, 500, 40]
  };
  var CORES = {
    /** Cores per deposit tile, and how fast an emptied tile refills (per second). */
    perTile: 40,
    regrow: 0.015,
    /** A harvester carries this many cores a trip, scoops this many a second, and unloads this fast. */
    capacity: 10,
    harvestRate: 1.25,
    unloadRate: 4,
    /** Deposit radius in tiles. */
    radius: 2
  };
  var CORE_COST = {
    // Heroes
    vance: 25,
    seer: 25,
    rook: 25,
    // Tech Center heavies
    bastion: 15,
    monolith: 15,
    titan: 15,
    // Research
    compositeArmor: 10,
    longBarrels: 10,
    logistics: 8,
    fieldTraining: 15,
    deepResonance: 8,
    stormRiders: 10,
    prismFocus: 12,
    communion: 15,
    scrapPlating: 10,
    stripThemBare: 8,
    overclocked: 10,
    hardKnocks: 15
  };
  var coreCost = (kind) => CORE_COST[kind] ?? 0;
  var HARVESTER = {
    /** Resource units a full harvester carries. 1 unit = 1 credit. */
    capacity: 700,
    /** Units scooped per second while sitting on a field tile. */
    harvestRate: 50,
    /** Units credited per second while docked at a refinery. */
    unloadRate: 200,
    /** How far (tiles) to look for a new field when the current one runs dry. */
    searchRadius: 24,
    /** How far to look for the next tile within the same field. */
    fieldRadius: 6
  };
  var BUILDING_STATS = {
    yard: { label: "Construction Yard", w: 3, h: 3, maxHp: 1e3, cost: 0, power: 0, requires: null, weapon: null },
    power: { label: "Power Plant", w: 2, h: 2, maxHp: 500, cost: 300, power: 100, requires: "yard", weapon: null },
    refinery: { label: "Refinery", w: 3, h: 2, maxHp: 900, cost: 1500, power: -30, requires: "power", weapon: null },
    barracks: { label: "Barracks", w: 2, h: 2, maxHp: 600, cost: 300, power: -20, requires: "power", weapon: null },
    turret: { label: "Gun Turret", w: 1, h: 1, maxHp: 700, cost: 600, power: -15, requires: "barracks", weapon: "turretGun" },
    lightFactory: { label: "Light Factory", w: 3, h: 2, maxHp: 700, cost: 400, power: -25, requires: "refinery", weapon: null },
    radar: { label: "Radar Outpost", w: 2, h: 2, maxHp: 600, cost: 800, power: -30, requires: "refinery", weapon: null },
    heavyFactory: { label: "Heavy Factory", w: 3, h: 3, maxHp: 1e3, cost: 1e3, power: -35, requires: "lightFactory", weapon: null },
    repairPad: { label: "Repair Pad", w: 2, h: 2, maxHp: 600, cost: 700, power: -20, requires: "heavyFactory", weapon: null },
    rocketTurret: { label: "Rocket Turret", w: 1, h: 1, maxHp: 650, cost: 900, power: -25, requires: "radar", weapon: "turretRocket" },
    techCenter: { label: "Tech Center", w: 3, h: 3, maxHp: 1e3, cost: 1500, power: -50, requires: "radar", weapon: null },
    // Expansion and the faction economies (economy.ts).
    outpost: { label: "Forward Outpost", w: 2, h: 2, maxHp: 700, cost: 1600, power: -10, requires: "refinery", weapon: null },
    deepDrill: { label: "Deep Drill", w: 2, h: 2, maxHp: 600, cost: 900, power: -25, requires: "refinery", weapon: null, faction: "concord" },
    seedSpire: { label: "Seed Spire", w: 1, h: 1, maxHp: 450, cost: 700, power: -15, requires: "refinery", weapon: null, faction: "shardbound" },
    silo: { label: "Silo", w: 1, h: 1, maxHp: 400, cost: 150, power: -5, requires: "refinery", weapon: null },
    // Defences: walls are laid by dragging a line (paid per segment); gates let your side through.
    // Superweapons (superweapons.ts): one per faction.
    uplink: { label: "Orbital Uplink", w: 3, h: 3, maxHp: 1500, cost: 3e3, power: -80, requires: "techCenter", weapon: null, faction: "concord" },
    stormHeart: { label: "Storm Heart", w: 3, h: 3, maxHp: 1500, cost: 3e3, power: -80, requires: "techCenter", weapon: null, faction: "shardbound" },
    scrapHive: { label: "Scrap Hive", w: 3, h: 3, maxHp: 1500, cost: 3e3, power: -80, requires: "techCenter", weapon: null, faction: "reclaimers" },
    airfield: { label: "Airfield", w: 3, h: 2, maxHp: 900, cost: 1e3, power: -30, requires: "radar", weapon: null },
    flakTurret: { label: "Flak Turret", w: 1, h: 1, maxHp: 600, cost: 800, power: -20, requires: "radar", weapon: "flak" },
    wall: { label: "Wall", w: 1, h: 1, maxHp: 500, cost: 25, power: 0, requires: "barracks", weapon: null },
    gate: { label: "Gate", w: 1, h: 1, maxHp: 700, cost: 150, power: 0, requires: "barracks", weapon: null }
  };
  var BARRIERS = ["wall", "gate"];
  var isBarrier = (kind) => BARRIERS.includes(kind);
  var WALL_RUN = 24;
  var DRIVABLE_BUILDINGS = ["repairPad"];
  var REPAIR = { rate: 30, costPerHp: 0.5 };
  var BUILDABLE = ["power", "refinery", "silo", "wall", "gate", "barracks", "turret", "lightFactory", "radar", "heavyFactory", "repairPad", "rocketTurret", "flakTurret", "airfield", "techCenter", "seedSpire", "uplink", "stormHeart", "scrapHive"];
  var STORAGE = {
    holds: { yard: 1500, refinery: 2e3, outpost: 1e3, silo: 2e3 },
    slowFrom: 0.8
  };
  function canBuild(faction, kind) {
    const only = BUILDING_STATS[kind].faction;
    return !only || only === faction;
  }
  var TRAINABLE = [
    "infantry",
    "glasswalker",
    "scrapper",
    "rocketInfantry",
    "medic",
    "mender",
    "mechanic",
    "marksman",
    "lancer",
    "deadeye",
    "vance",
    "seer",
    "rook",
    "quad",
    "skimmer",
    "junker",
    "raider",
    "tank",
    "prismTank",
    "wrecker",
    "artillery",
    "resonator",
    "mortarCrawler",
    "bastion",
    "monolith",
    "titan",
    "harvester",
    "drillRig",
    "outpostTruck",
    "gunship",
    "dropship",
    "bomber"
  ];
  var AIR = ["gunship", "dropship", "bomber"];
  var isAir = (kind) => AIR.includes(kind);
  var AIR_LIFT = 30;
  var AMMO = {
    gunship: { shots: 8, reload: 1.5 },
    bomber: { shots: 2, reload: 6 }
  };
  var DROPSHIP_SEATS = 5;
  var STRIP = { frames: 32, size: 96, scale: 0.5 };
  var AIR_STRIP = { ...STRIP, scale: STRIP.scale * 1.25 };
  var UNIT_SPRITES = {
    tank: STRIP,
    harvester: STRIP,
    outpostTruck: STRIP,
    drillRig: STRIP,
    gunship: AIR_STRIP,
    dropship: AIR_STRIP,
    bomber: AIR_STRIP,
    quad: STRIP,
    infantry: STRIP,
    rocketInfantry: STRIP,
    raider: STRIP,
    artillery: STRIP,
    glasswalker: STRIP,
    skimmer: STRIP,
    prismTank: STRIP,
    resonator: STRIP,
    scrapper: STRIP,
    junker: STRIP,
    wrecker: STRIP,
    mortarCrawler: STRIP,
    medic: STRIP,
    mender: STRIP,
    mechanic: STRIP,
    marksman: STRIP,
    lancer: STRIP,
    deadeye: STRIP,
    bastion: STRIP,
    monolith: STRIP,
    titan: STRIP,
    vance: STRIP,
    seer: STRIP,
    rook: STRIP
  };
  var UNIT_TURRETS = {
    tank: { pivot: -1.33 },
    quad: { pivot: -2 },
    prismTank: { pivot: 0.67 },
    wrecker: { pivot: -2 },
    mortarCrawler: { pivot: -0.67 },
    bastion: { pivot: -2 },
    titan: { pivot: -2.67 }
  };
  var TURRET_SPRITES = {
    turret: STRIP,
    rocketTurret: STRIP,
    flakTurret: STRIP
  };
  var BUILDING_SPRITE = { marginX: 16, marginY: 48, scale: 0.5 };
  function buildTime(cost) {
    return Math.max(MIN_BUILD_TIME, cost / BUILD_RATE);
  }

  // src/rng.ts
  function mulberry32(seed) {
    let a = seed >>> 0;
    return () => {
      a = a + 1831565813 >>> 0;
      let t = a;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  // src/map.ts
  var Terrain = { Sand: 0, Rock: 1, Cliff: 2 };
  var Vein = { Crystal: 0, Dense: 1, StormGlass: 2, Core: 3 };
  function idx(m, x, y) {
    return y * m.w + x;
  }
  function inBounds(m, x, y) {
    return x >= 0 && y >= 0 && x < m.w && y < m.h;
  }
  function isPassable(m, x, y) {
    if (!inBounds(m, x, y)) return false;
    const i = idx(m, x, y);
    return m.terrain[i] !== Terrain.Cliff && m.blocked[i] !== 1;
  }
  function isBuildable(m, x, y) {
    if (!inBounds(m, x, y)) return false;
    const i = idx(m, x, y);
    return m.terrain[i] === Terrain.Rock && m.blocked[i] === 0;
  }
  function nearestPassable(m, p, maxR = 12) {
    if (isPassable(m, p.x, p.y)) return { x: p.x, y: p.y };
    for (let r = 1; r <= maxR; r++) {
      let best = null;
      let bestD = Infinity;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          const x = p.x + dx;
          const y = p.y + dy;
          if (!isPassable(m, x, y)) continue;
          const d = dx * dx + dy * dy;
          if (d < bestD) {
            bestD = d;
            best = { x, y };
          }
        }
      }
      if (best) return best;
    }
    return null;
  }
  var isCoreTile = (m, i) => m.vein[i] === Vein.Core;
  function findNearestSpice(m, from, maxR, exclude = /* @__PURE__ */ new Set(), cores = false) {
    const startTile = nearestPassable(m, from);
    if (!startTile) return null;
    const seen = new Uint8Array(m.w * m.h);
    const queue = [idx(m, startTile.x, startTile.y)];
    seen[queue[0]] = 1;
    for (let head = 0; head < queue.length; head++) {
      const i = queue[head];
      const x = i % m.w;
      const y = (i - x) / m.w;
      if (m.spice[i] > 0 && !exclude.has(i) && isCoreTile(m, i) === cores) return { x, y };
      for (const [dx, dy] of NEIGHBOURS_4) {
        const nx = x + dx;
        const ny = y + dy;
        if (Math.max(Math.abs(nx - from.x), Math.abs(ny - from.y)) > maxR) continue;
        if (!isPassable(m, nx, ny)) continue;
        const ni = idx(m, nx, ny);
        if (seen[ni]) continue;
        seen[ni] = 1;
        queue.push(ni);
      }
    }
    return null;
  }
  var NEIGHBOURS_4 = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];
  function valueNoise(rng, w, h, cell) {
    const gw = Math.ceil(w / cell) + 2;
    const gh = Math.ceil(h / cell) + 2;
    const grid = new Float32Array(gw * gh);
    for (let i = 0; i < grid.length; i++) grid[i] = rng();
    const out = new Float32Array(w * h);
    const smooth2 = (t) => t * t * (3 - 2 * t);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const gx = x / cell;
        const gy = y / cell;
        const x0 = Math.floor(gx);
        const y0 = Math.floor(gy);
        const tx = smooth2(gx - x0);
        const ty = smooth2(gy - y0);
        const a = grid[y0 * gw + x0];
        const b = grid[y0 * gw + x0 + 1];
        const c = grid[(y0 + 1) * gw + x0];
        const d = grid[(y0 + 1) * gw + x0 + 1];
        out[y * w + x] = (a + (b - a) * tx) * (1 - ty) + (c + (d - c) * tx) * ty;
      }
    }
    return out;
  }
  var PLATEAU = { x: 14, y: 13, r: 10 };
  var BASE_OFFSET = { x: -4, y: -3 };
  var FIELD_GRID = 20;
  function mirror(m, p) {
    return { x: m.w - 1 - p.x, y: m.h - 1 - p.y };
  }
  function rotate(n, p) {
    return { x: n - 1 - p.y, y: p.x };
  }
  function cornerPlateaus(n) {
    const out = [{ ...PLATEAU }];
    for (let k = 1; k < 4; k++) out.push({ ...rotate(n, out[k - 1]), r: PLATEAU.r });
    return out;
  }
  function generateMap(seed, w = MAP_W, h = MAP_H, players = 2) {
    if (players > 2) return generateMap4(seed, w);
    const rng = mulberry32(seed);
    const n1 = valueNoise(rng, w, h, 16);
    const n2 = valueNoise(rng, w, h, 8);
    const n3 = valueNoise(rng, w, h, 4);
    const enemyPlateau = { ...mirror({ w, h }, PLATEAU), r: PLATEAU.r };
    const m = {
      w,
      h,
      terrain: new Uint8Array(w * h),
      spice: new Float32Array(w * h),
      vein: new Uint8Array(w * h),
      blocked: new Uint8Array(w * h),
      shade: new Float32Array(w * h),
      start: { x: PLATEAU.x + BASE_OFFSET.x, y: PLATEAU.y + BASE_OFFSET.y },
      enemyStart: { x: enemyPlateau.x + BASE_OFFSET.x, y: enemyPlateau.y + BASE_OFFSET.y },
      fields: []
    };
    for (let i = 0; i < w * h; i++) {
      const n = 0.6 * n1[i] + 0.3 * n2[i] + 0.1 * n3[i];
      m.terrain[i] = n > 0.72 ? Terrain.Cliff : n > 0.58 ? Terrain.Rock : Terrain.Sand;
      m.shade[i] = rng();
    }
    for (const p of [PLATEAU, enemyPlateau]) {
      forDisc(m, p.x, p.y, p.r, (i) => {
        m.terrain[i] = Terrain.Rock;
      });
    }
    const firstHalf = (p) => idx(m, p.x, p.y) < w * h / 2;
    const angle = rng() * (Math.PI / 2);
    const home = {
      x: Math.round(PLATEAU.x + Math.cos(angle) * 17),
      y: Math.round(PLATEAU.y + Math.sin(angle) * 17)
    };
    addField(m, rng, home, 5, true);
    for (let gy = 0; gy * FIELD_GRID < h; gy++) {
      for (let gx = 0; gx * FIELD_GRID < w; gx++) {
        const c = {
          x: Math.floor(gx * FIELD_GRID + FIELD_GRID / 2 + (rng() - 0.5) * FIELD_GRID * 0.5),
          y: Math.floor(gy * FIELD_GRID + FIELD_GRID / 2 + (rng() - 0.5) * FIELD_GRID * 0.5)
        };
        if (!inBounds(m, c.x, c.y) || !firstHalf(c)) continue;
        if (Math.hypot(c.x - PLATEAU.x, c.y - PLATEAU.y) < PLATEAU.r + 6) continue;
        if (Math.hypot(c.x - enemyPlateau.x, c.y - enemyPlateau.y) < enemyPlateau.r + 6) continue;
        if (m.fields.some((f) => Math.hypot(f.x - c.x, f.y - c.y) < 9)) continue;
        addField(m, rng, c, 3 + Math.floor(rng() * 2), true);
      }
    }
    connectFields(m, [{ x: Math.floor(w / 2), y: Math.floor(h / 2) - 1 }]);
    for (let i = Math.ceil(w * h / 2); i < w * h; i++) {
      m.terrain[i] = m.terrain[w * h - 1 - i];
      m.spice[i] = m.spice[w * h - 1 - i];
    }
    for (const f of [...m.fields]) m.fields.push(mirror(m, f));
    const copies = (p) => [p, mirror(m, p)];
    thinFields(m, seed, copies, m.fields.length / 2);
    addVeins(m, seed, copies, m.fields.length / 2, [
      // The middle, and on the line exactly between the bases (the bases sit top-left and bottom-right).
      { x: (w - 1) / 2, y: (h - 1) / 2 },
      { x: Math.round(w * 0.3), y: Math.round(h * 0.7) }
    ], [PLATEAU, enemyPlateau]);
    return m;
  }
  var FIELD_KEEP = 0.5;
  var FIELD_RICHNESS = 0.7;
  function thinFields(m, seed, copies, baseFields, share = FIELD_KEEP) {
    const rng = mulberry32(seed * 3571 + 13);
    const base = m.fields.slice(0, baseFields);
    const keep = base.map((_, f) => f === 0 || rng() < share);
    for (let f = 0; f < base.length; f++) {
      if (keep[f]) continue;
      for (const c of copies(base[f])) forDisc(m, Math.round(c.x), Math.round(c.y), 4, (i) => m.spice[i] = 0);
    }
    for (let i = 0; i < m.spice.length; i++) m.spice[i] = Math.round(m.spice[i] * FIELD_RICHNESS);
    const survivors = base.filter((_, f) => keep[f]);
    const n = survivors.length;
    const rest = [];
    for (let k = 1; k < copies(survivors[0] ?? { x: 0, y: 0 }).length; k++) for (const p of survivors) rest.push(copies(p)[k]);
    m.fields = [...survivors, ...rest];
    return n;
  }
  function addVeins(m, seed, copies, baseFields, deposits, plateaus) {
    const rng = mulberry32(seed * 6151 + 29);
    const contest = (p) => {
      const d = plateaus.map((q) => Math.hypot(q.x - p.x, q.y - p.y)).sort((a, b) => a - b);
      return Math.abs(d[0] - d[1]);
    };
    const ranked = Array.from({ length: baseFields - 1 }, (_, k) => k + 1).sort((a, b) => contest(m.fields[a]) - contest(m.fields[b]));
    const dense = new Set(ranked.slice(0, Math.max(1, Math.round(ranked.length * 0.34))));
    for (let f = 1; f < baseFields; f++) {
      if (!dense.has(f) || rng() > 0.9) continue;
      for (const c of copies(m.fields[f])) {
        forDisc(m, Math.round(c.x), Math.round(c.y), 5, (i) => {
          if (m.spice[i] <= 0) return;
          m.vein[i] = Vein.Dense;
          m.spice[i] = Math.min(1e3, Math.round(m.spice[i] * 1.6));
        });
      }
    }
    for (const d of deposits) {
      for (const c of copies(d)) {
        const r = CORES_RADIUS + 0.5;
        for (let y = Math.floor(c.y - r); y <= Math.ceil(c.y + r); y++) {
          for (let x = Math.floor(c.x - r); x <= Math.ceil(c.x + r); x++) {
            if (!inBounds(m, x, y) || Math.hypot(x - c.x, y - c.y) > r) continue;
            const i = idx(m, x, y);
            m.terrain[i] = Terrain.Sand;
            m.vein[i] = Vein.Core;
            m.spice[i] = CORES_PER_TILE;
          }
        }
      }
    }
    for (const p of plateaus) {
      const reach = reachableFrom(m, p);
      for (const d of deposits) {
        for (const c of copies(d)) {
          const t = { x: Math.round(c.x), y: Math.round(c.y) };
          if (!reach[idx(m, t.x, t.y)]) carveLine(m, { x: p.x, y: p.y }, t);
        }
      }
    }
  }
  var CORES_RADIUS = 2;
  var CORES_PER_TILE = 40;
  function generateMap4(seed, n) {
    const rng = mulberry32(seed * 7 + 4);
    const n1 = valueNoise(rng, n, n, 16);
    const n2 = valueNoise(rng, n, n, 8);
    const n3 = valueNoise(rng, n, n, 4);
    const plateaus = cornerPlateaus(n);
    const m = {
      w: n,
      h: n,
      terrain: new Uint8Array(n * n),
      spice: new Float32Array(n * n),
      vein: new Uint8Array(n * n),
      blocked: new Uint8Array(n * n),
      shade: new Float32Array(n * n),
      start: { x: PLATEAU.x + BASE_OFFSET.x, y: PLATEAU.y + BASE_OFFSET.y },
      enemyStart: { x: 0, y: 0 },
      fields: []
    };
    for (let i = 0; i < n * n; i++) {
      const v = 0.6 * n1[i] + 0.3 * n2[i] + 0.1 * n3[i];
      m.terrain[i] = v > 0.72 ? Terrain.Cliff : v > 0.58 ? Terrain.Rock : Terrain.Sand;
      m.shade[i] = rng();
    }
    const half = n / 2;
    const inQuarter = (p) => p.x < half && p.y < half;
    forDisc(m, PLATEAU.x, PLATEAU.y, PLATEAU.r, (i) => m.terrain[i] = Terrain.Rock);
    const angle = rng() * (Math.PI / 2);
    addField(m, rng, { x: Math.round(PLATEAU.x + Math.cos(angle) * 17), y: Math.round(PLATEAU.y + Math.sin(angle) * 17) }, 5, true);
    for (let gy = 0; gy * FIELD_GRID < half; gy++) {
      for (let gx = 0; gx * FIELD_GRID < half; gx++) {
        const c = {
          x: Math.floor(gx * FIELD_GRID + FIELD_GRID / 2 + (rng() - 0.5) * FIELD_GRID * 0.5),
          y: Math.floor(gy * FIELD_GRID + FIELD_GRID / 2 + (rng() - 0.5) * FIELD_GRID * 0.5)
        };
        if (!inQuarter({ x: c.x + 5, y: c.y + 5 })) continue;
        if (plateaus.some((p) => Math.hypot(c.x - p.x, c.y - p.y) < p.r + 6)) continue;
        if (m.fields.some((f) => Math.hypot(f.x - c.x, f.y - c.y) < 9)) continue;
        addField(m, rng, c, 3 + Math.floor(rng() * 2), true);
      }
    }
    forDisc(m, half - 7, half - 7, 4, (i) => m.terrain[i] = Terrain.Sand);
    connectFields(m, [{ x: half - 1, y: half - 1 }, { x: half - 7, y: half - 7 }]);
    for (let y = 0; y < half; y++) {
      for (let x = 0; x < half; x++) {
        let p = { x, y };
        const i = idx(m, x, y);
        for (let k = 1; k < 4; k++) {
          p = rotate(n, p);
          const j = idx(m, p.x, p.y);
          m.terrain[j] = m.terrain[i];
          m.spice[j] = m.spice[i];
        }
      }
    }
    const quarterFields = [...m.fields];
    for (const f of quarterFields) {
      let p = f;
      for (let k = 1; k < 4; k++) m.fields.push(p = rotate(n, p));
    }
    const turns = (p) => {
      const out = [p];
      for (let k = 1; k < 4; k++) out.push(rotate(n, out[k - 1]));
      return out;
    };
    const kept = thinFields(m, seed, turns, quarterFields.length, 0.8);
    addVeins(m, seed, turns, kept, [{ x: half - 7, y: half - 7 }], plateaus);
    m.starts = plateaus.map((p) => ({ x: p.x + BASE_OFFSET.x, y: p.y + BASE_OFFSET.y }));
    m.start = m.starts[0];
    m.enemyStart = m.starts[2];
    return m;
  }
  function forDisc(m, cx, cy, r, fn) {
    for (let y = cy - r; y <= cy + r; y++) {
      for (let x = cx - r; x <= cx + r; x++) {
        if (!inBounds(m, x, y)) continue;
        const d = Math.hypot(x - cx, y - cy);
        if (d <= r) fn(idx(m, x, y), d);
      }
    }
  }
  function addField(m, rng, c, r, forceSand) {
    const cx = Math.min(m.w - 1, Math.max(0, c.x));
    const cy = Math.min(m.h - 1, Math.max(0, c.y));
    m.fields.push({ x: cx, y: cy });
    forDisc(m, cx, cy, r, (i, d) => {
      if (forceSand) m.terrain[i] = Terrain.Sand;
      if (m.terrain[i] !== Terrain.Sand) return;
      const edge = d / r;
      if (edge > 0.7 && rng() < 0.4) return;
      m.spice[i] = Math.round(150 + 350 * (1 - edge) * (0.7 + 0.3 * rng()));
    });
  }
  function connectFields(m, extra = []) {
    const reach = reachableFrom(m, { x: PLATEAU.x, y: PLATEAU.y });
    for (const f of [...m.fields, ...extra]) {
      if (reach[idx(m, f.x, f.y)]) continue;
      carveLine(m, { x: PLATEAU.x, y: PLATEAU.y }, f);
    }
  }
  function reachableFrom(m, p) {
    const seen = new Uint8Array(m.w * m.h);
    const queue = [idx(m, p.x, p.y)];
    seen[queue[0]] = 1;
    for (let head = 0; head < queue.length; head++) {
      const i = queue[head];
      const x = i % m.w;
      const y = (i - x) / m.w;
      for (const [dx, dy] of NEIGHBOURS_4) {
        const nx = x + dx;
        const ny = y + dy;
        if (!isPassable(m, nx, ny)) continue;
        const ni = idx(m, nx, ny);
        if (seen[ni]) continue;
        seen[ni] = 1;
        queue.push(ni);
      }
    }
    return seen;
  }
  function carveLine(m, a, b) {
    const steps = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    for (let s = 0; s <= steps; s++) {
      const x = Math.round(a.x + (b.x - a.x) * s / steps);
      const y = Math.round(a.y + (b.y - a.y) * s / steps);
      for (const [dx, dy] of [[0, 0], [1, 0], [0, 1]]) {
        if (!inBounds(m, x + dx, y + dy)) continue;
        const i = idx(m, x + dx, y + dy);
        if (m.terrain[i] === Terrain.Cliff) m.terrain[i] = Terrain.Rock;
      }
    }
  }

  // src/path.ts
  var SQRT2 = Math.SQRT2;
  var DIRS = [
    [1, 0, 1],
    [-1, 0, 1],
    [0, 1, 1],
    [0, -1, 1],
    [1, 1, SQRT2],
    [1, -1, SQRT2],
    [-1, 1, SQRT2],
    [-1, -1, SQRT2]
  ];
  function octile(ax, ay, bx, by) {
    const dx = Math.abs(ax - bx);
    const dy = Math.abs(ay - by);
    return dx + dy + (SQRT2 - 2) * Math.min(dx, dy);
  }
  var Heap = class {
    items = [];
    score;
    constructor(score) {
      this.score = score;
    }
    get size() {
      return this.items.length;
    }
    push(i) {
      const a = this.items;
      a.push(i);
      let c = a.length - 1;
      while (c > 0) {
        const p = c - 1 >> 1;
        if (this.score[a[p]] <= this.score[a[c]]) break;
        [a[p], a[c]] = [a[c], a[p]];
        c = p;
      }
    }
    pop() {
      const a = this.items;
      const top = a[0];
      const last = a.pop();
      if (a.length > 0) {
        a[0] = last;
        let p = 0;
        for (; ; ) {
          const l = 2 * p + 1;
          const r = l + 1;
          let m = p;
          if (l < a.length && this.score[a[l]] < this.score[a[m]]) m = l;
          if (r < a.length && this.score[a[r]] < this.score[a[m]]) m = r;
          if (m === p) break;
          [a[p], a[m]] = [a[m], a[p]];
          p = m;
        }
      }
      return top;
    }
  };
  function findPath(m, start2, goal, maxNodes = 2e4, extraCost) {
    const target = nearestPassable(m, goal);
    if (!target) return [];
    if (start2.x === target.x && start2.y === target.y) return [];
    const n = m.w * m.h;
    const g = new Float64Array(n).fill(Infinity);
    const f = new Float64Array(n).fill(Infinity);
    const from = new Int32Array(n).fill(-1);
    const closed = new Uint8Array(n);
    const open = new Heap(f);
    const s = idx(m, start2.x, start2.y);
    const t = idx(m, target.x, target.y);
    g[s] = 0;
    f[s] = octile(start2.x, start2.y, target.x, target.y);
    open.push(s);
    let best = s;
    let bestH = f[s];
    let expanded = 0;
    while (open.size > 0 && expanded < maxNodes) {
      const cur = open.pop();
      if (closed[cur]) continue;
      closed[cur] = 1;
      expanded++;
      if (cur === t) {
        best = t;
        break;
      }
      const cx = cur % m.w;
      const cy = (cur - cx) / m.w;
      const h = octile(cx, cy, target.x, target.y);
      if (h < bestH) {
        bestH = h;
        best = cur;
      }
      for (const [dx, dy, cost] of DIRS) {
        const nx = cx + dx;
        const ny = cy + dy;
        if (!isPassable(m, nx, ny)) continue;
        if (dx !== 0 && dy !== 0 && (!isPassable(m, cx + dx, cy) || !isPassable(m, cx, cy + dy))) continue;
        const ni = idx(m, nx, ny);
        if (closed[ni]) continue;
        const ng = g[cur] + cost + (extraCost ? extraCost(ni) : 0);
        if (ng < g[ni]) {
          g[ni] = ng;
          f[ni] = ng + octile(nx, ny, target.x, target.y);
          from[ni] = cur;
          open.push(ni);
        }
      }
    }
    const path = [];
    for (let i = best; i !== s && i !== -1; i = from[i]) {
      const x = i % m.w;
      path.push({ x, y: (i - x) / m.w });
    }
    return path.reverse();
  }

  // src/events.ts
  var MAX_EVENTS = 96;
  function emit(g, e) {
    if (g.events.length < MAX_EVENTS) g.events.push(e);
  }
  function announce(g, line, gap = 0) {
    const last = g.announced[line] ?? -Infinity;
    if (g.time - last < gap) return;
    g.announced[line] = g.time;
    emit(g, { kind: "announce", line });
  }

  // src/veterancy.ts
  var RANK_NAMES = ["", "Veteran", "Elite", "Heroic"];
  var MAX_RANK = 3;
  var VETERANCY = {
    /** Damage needed per rank, as a multiple of the unit's cost. */
    xpPerCost: 1.5,
    /** Healing counts this many times over (healers don't fight). */
    healXp: 2,
    armor: 0.85,
    cooldown: 0.9,
    damage: 1.2,
    sight: 1,
    /** Heroic units regain this share of max health per second... */
    regen: 0.015,
    /** ...once this many seconds have passed since they were last hit. */
    regenDelay: 4
  };
  function xpPerRank(u) {
    return Math.max(100, UNIT_STATS[u.kind].cost) * VETERANCY.xpPerCost;
  }
  var rankArmor = (u) => u.rank >= 1 ? VETERANCY.armor : 1;
  var rankCooldown = (u) => u.rank >= 1 ? VETERANCY.cooldown : 1;
  var rankDamage = (u) => u.rank >= 2 ? VETERANCY.damage : 1;
  var rankSight = (u) => u.rank >= 2 ? VETERANCY.sight : 0;
  function gainXp(g, u, amount) {
    if (u.rank >= MAX_RANK || amount <= 0) return;
    u.xp += amount;
    const per = xpPerRank(u);
    while (u.rank < MAX_RANK && u.xp >= per) {
      u.xp -= per;
      u.rank++;
      if (u.owner === g.local) {
        notify(g, `${UNIT_STATS[u.kind].label} promoted: ${RANK_NAMES[u.rank]}`);
        emit(g, { kind: "promote", x: u.x, y: u.y });
        announce(g, "unit_promoted", 3);
      }
    }
    if (u.rank >= MAX_RANK) u.xp = 0;
  }
  function updateVeterancy(g, dt) {
    for (const u of g.units) {
      if (u.rank < 3 || g.time - u.hitAt < VETERANCY.regenDelay) continue;
      const max = UNIT_STATS[u.kind].maxHp;
      u.hp = Math.min(max, u.hp + max * VETERANCY.regen * dt);
    }
  }

  // src/weather.ts
  var WEATHER_MODES = ["clear", "dust"];
  var TIME_MODES = ["day", "dusk", "night", "cycle"];
  var WEATHER = {
    /** First dust storm between these times (s), then gaps between storms (s). */
    firstDust: [120, 200],
    dustGap: [170, 280],
    /** Build-up and fade (s), and how long it blows at full strength (s). */
    dustRamp: 15,
    dustHold: [45, 75],
    /** At full strength: sight × this, long guns' reach × this. */
    dustSight: 0.55,
    dustRange: 0.7,
    /** Weapons that reach further than this (tiles) are "long guns". */
    longRange: 5,
    /** Daylight levels (1 = noon) and what full night does to sight and long guns. */
    duskLight: 0.62,
    nightLight: 0.3,
    nightSight: 0.7,
    nightRange: 0.85,
    /** A full day-and-night cycle (s): day, dusk, night, dawn. */
    dayLength: 600
  };
  function createWeather(seed, mode = "clear", time = "day") {
    const rng = mulberry32(seed * 48271 + 11);
    const between = (r) => r[0] + rng() * (r[1] - r[0]);
    const w = { mode, time, dust: 0, dustStart: -Infinity, dustHold: 0, nextDust: Infinity, light: 1, rng };
    if (mode === "dust") w.nextDust = between(WEATHER.firstDust);
    w.light = daylight(time, 0);
    return w;
  }
  function daylight(time, t) {
    if (time === "day") return 1;
    if (time === "dusk") return WEATHER.duskLight;
    if (time === "night") return WEATHER.nightLight;
    const p = t / WEATHER.dayLength % 1;
    const night = WEATHER.nightLight;
    const ease = (a, b, k) => a + (b - a) * (k * k * (3 - 2 * k));
    if (p < 0.4) return 1;
    if (p < 0.5) return ease(1, night, (p - 0.4) / 0.1);
    if (p < 0.85) return night;
    return ease(night, 1, (p - 0.85) / 0.15);
  }
  function updateWeather(w, t) {
    w.light = daylight(w.time, t);
    if (w.mode !== "dust") return;
    const between = (r) => r[0] + w.rng() * (r[1] - r[0]);
    const ramp = WEATHER.dustRamp;
    if (t >= w.nextDust) {
      w.dustStart = t;
      w.dustHold = between(WEATHER.dustHold);
      w.nextDust = t + w.dustHold + 2 * ramp + between(WEATHER.dustGap);
    }
    const age = t - w.dustStart;
    const total = w.dustHold + 2 * ramp;
    w.dust = age < 0 || age > total ? 0 : age < ramp ? age / ramp : age > total - ramp ? (total - age) / ramp : 1;
  }
  function sightFactor(w) {
    if (!w) return 1;
    const night = w.light >= 1 ? 1 : 1 - (1 - WEATHER.nightSight) * ((1 - w.light) / (1 - WEATHER.nightLight));
    const dust = w.dust > 0 ? 1 - (1 - WEATHER.dustSight) * w.dust : 1;
    return night * dust;
  }
  function rangeFactor(w, range) {
    if (!w || range <= WEATHER.longRange) return 1;
    const night = w.light >= 1 ? 1 : 1 - (1 - WEATHER.nightRange) * ((1 - w.light) / (1 - WEATHER.nightLight));
    const dust = w.dust > 0 ? 1 - (1 - WEATHER.dustRange) * w.dust : 1;
    return night * dust;
  }

  // src/fog.ts
  function createFog(w, h, enabled) {
    const fog = { enabled, explored: new Uint8Array(w * h), visible: new Uint8Array(w * h), timer: 0 };
    if (!enabled) {
      fog.explored.fill(1);
      fog.visible.fill(1);
    }
    return fog;
  }
  function reveal(fog, g, cx, cy, r) {
    const { explored, visible } = fog;
    const r2 = r * r;
    for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
      for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
        if (!inBounds(g.map, x, y)) continue;
        const dx = x + 0.5 - cx;
        const dy = y + 0.5 - cy;
        if (dx * dx + dy * dy > r2) continue;
        const i = idx(g.map, x, y);
        visible[i] = 1;
        explored[i] = 1;
      }
    }
  }
  function refreshFog(g) {
    for (const owner of g.humans) {
      const fog = g.fogs[owner];
      if (!fog.enabled) continue;
      fog.visible.fill(0);
      const team = g.teams[owner];
      const sight = sightFactor(g.weather);
      const lit = 0.5 + 0.5 * sight;
      for (const u of g.units) {
        if (g.teams[u.owner] === team) reveal(fog, g, u.x / TILE, u.y / TILE, (SIGHT[u.kind] + rankSight(u)) * sight);
      }
      for (const b of g.buildings) {
        if (g.teams[b.owner] !== team) continue;
        const own2 = SIGHT[b.kind];
        reveal(fog, g, b.tx + b.w / 2, b.ty + b.h / 2, (own2 ?? SIGHT.building + Math.max(b.w, b.h) / 2) * lit);
      }
    }
  }
  function updateFog(g, dt) {
    const fog = g.fogs[g.humans[0]];
    if (!fog?.enabled) return;
    fog.timer -= dt;
    if (fog.timer > 0) return;
    fog.timer = FOG_INTERVAL;
    refreshFog(g);
  }
  var fogFor = (g, owner) => owner === void 0 ? g.fog : g.fogs[owner];
  function visibleAt(g, wx, wy, owner) {
    const tx = Math.floor(wx / TILE);
    const ty = Math.floor(wy / TILE);
    return inBounds(g.map, tx, ty) && fogFor(g, owner).visible[idx(g.map, tx, ty)] === 1;
  }
  function exploredRect(g, tx, ty, w, h, owner) {
    const fog = fogFor(g, owner);
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        if (inBounds(g.map, x, y) && fog.explored[idx(g.map, x, y)]) return true;
      }
    }
    return false;
  }
  function visibleRect(g, tx, ty, w, h, owner) {
    const fog = fogFor(g, owner);
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        if (inBounds(g.map, x, y) && fog.visible[idx(g.map, x, y)]) return true;
      }
    }
    return false;
  }

  // src/fx.ts
  var WRECK_LIFE = 40;
  var SCORCH_LIFE = 30;
  var CRATER_LIFE = 60;
  var MAX_EFFECTS = 1400;
  function add(g, e) {
    g.effects.push({ x2: e.x, y2: e.y, age: 0, size: 1, ...e });
  }
  var rand = (a, b) => a + Math.random() * (b - a);
  function burst(g, kind, x, y, count2, speed, life, size, color) {
    for (let i = 0; i < count2; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = speed * rand(0.4, 1);
      add(g, { kind, x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v * 0.75, spin: rand(-12, 12), life: life * rand(0.7, 1.15), size: size * rand(0.6, 1.3), color });
    }
  }
  function trim(g) {
    if (g.effects.length <= MAX_EFFECTS) return;
    const lasting = (e) => e.kind === "wreck" || e.kind === "scorch";
    let excess = g.effects.length - MAX_EFFECTS;
    g.effects = g.effects.filter((e) => excess <= 0 || lasting(e) || (excess--, false));
  }
  function unitDeathFx(g, u) {
    const glass = g.factions[u.owner] === "shardbound";
    const stats = UNIT_STATS[u.kind];
    if (stats.armor === "infantry") {
      add(g, { kind: "fire", x: u.x, y: u.y, life: 0.35, size: 0.45 });
      add(g, { kind: "plume", x: u.x, y: u.y, life: 1.6, size: 0.5 });
      burst(g, "debris", u.x, u.y, 4, 60, 0.6, 0.6);
      if (glass) burst(g, "shard", u.x, u.y, 9, 90, 0.9, 0.7);
    } else {
      const scale = stats.radius / 11;
      add(g, { kind: "fire", x: u.x, y: u.y, life: 0.7, size: 1.2 * scale });
      add(g, { kind: "ring", x: u.x, y: u.y, life: 0.45, size: 1.1 * scale });
      add(g, { kind: "plume", x: u.x, y: u.y, life: 6, size: 1.1 * scale });
      burst(g, "debris", u.x, u.y, Math.round(10 * scale), 130, 1, scale);
      burst(g, "spark", u.x, u.y, Math.round(8 * scale), 200, 0.45, 1);
      if (glass || u.kind === "harvester") burst(g, "shard", u.x, u.y, Math.round(14 * scale), 150, 1.2, scale, glass ? "#6fe3f0" : "#8fe8f5");
      add(g, { kind: "scorch", x: u.x, y: u.y, life: SCORCH_LIFE, size: 1.2 * scale });
      add(g, { kind: "wreck", x: u.x, y: u.y, life: WRECK_LIFE, size: scale, unit: u.kind, angle: u.angle, owner: u.owner });
      add(g, { kind: "shake", x: u.x, y: u.y, life: 0.3, size: 0.6 * scale });
    }
    trim(g);
  }
  function buildingDeathFx(g, x, y, w, h) {
    const scale = Math.max(w, h) / 2;
    add(g, { kind: "fire", x, y, life: 1.1, size: 2.2 * scale });
    add(g, { kind: "fire", x: x + rand(-10, 10) * scale, y: y + rand(-8, 8) * scale, life: 0.9, size: 1.4 * scale });
    add(g, { kind: "ring", x, y, life: 0.7, size: 2.2 * scale });
    add(g, { kind: "plume", x, y, life: 10, size: 1.8 * scale });
    burst(g, "debris", x, y, Math.round(14 * scale), 170, 1.3, 1.3);
    burst(g, "spark", x, y, Math.round(12 * scale), 240, 0.6, 1.2);
    add(g, { kind: "scorch", x, y, life: CRATER_LIFE, size: 1.4 * Math.max(w, h) });
    add(g, { kind: "shake", x, y, life: 0.5, size: 1.2 * scale });
    trim(g);
  }
  function impactFx(g, x, y, big) {
    if (big) {
      add(g, { kind: "fire", x, y, life: 0.5, size: 0.9 });
      add(g, { kind: "ring", x, y, life: 0.35, size: 0.7 });
      burst(g, "spark", x, y, 5, 170, 0.35, 0.9);
      add(g, { kind: "scorch", x, y, life: 10, size: 0.6 });
    } else {
      add(g, { kind: "fire", x, y, life: 0.3, size: 0.45 });
      burst(g, "spark", x, y, 3, 130, 0.3, 0.7);
    }
    trim(g);
  }
  function muzzleFx(g, x, y, tx, ty, style, reach, infantry = false) {
    if (infantry) add(g, { kind: "smoke", x: x + (Math.random() - 0.5) * 4, y: y + 3, life: 0.45, size: 0.4 });
    if (style === "beam" || style === "flame") return;
    const angle = Math.atan2(ty - y, tx - x);
    const mx = x + Math.cos(angle) * reach;
    const my = y + Math.sin(angle) * reach;
    const heavy = style === "shell" || style === "rocket" || style === "arc";
    add(g, { kind: "muzzle", x: mx, y: my, angle, life: heavy ? 0.12 : 0.06, size: heavy ? 1.3 : 0.6 });
    if (heavy) add(g, { kind: "smoke", x: mx, y: my, life: 0.6, size: 0.8 });
  }
  function particlePos(e, age) {
    const k = Math.min(age, e.life) - Math.min(age, e.life) ** 2 / (2 * e.life);
    return { x: e.x + (e.vx ?? 0) * k, y: e.y + (e.vy ?? 0) * k };
  }

  // src/research.ts
  var RESEARCH_SPEED = 0.5;
  var AI_RESERVE = 1500;
  function createResearch() {
    const none = () => ({ done: [], current: null });
    return { 0: none(), 1: none(), 2: none(), 3: none() };
  }
  function researchFor(faction) {
    return Object.keys(RESEARCH).filter((id) => RESEARCH[id].faction === faction);
  }
  var ADDITIVE = ["startRank", "salvage"];
  function bonus(g, owner, key) {
    const additive = ADDITIVE.includes(key);
    let v = additive ? 0 : 1;
    for (const id of g.research[owner].done) {
      const e = RESEARCH[id].effect[key];
      if (e === void 0) continue;
      v = additive ? v + e : v * e;
    }
    return v;
  }
  function researchBlocked(g, owner, id) {
    const r = g.research[owner];
    if (RESEARCH[id].faction !== g.factions[owner]) return "Not your faction's research.";
    if (r.done.includes(id)) return "Already researched.";
    if (!hasBuilding(g, "techCenter", owner)) return "Requires Tech Center";
    if (r.current) return "Already researching something.";
    if (walletOf(g, owner).cores < coreCost(id)) return `Needs ${coreCost(id)} glass cores`;
    return null;
  }
  function startResearch(g, owner, id) {
    if (researchBlocked(g, owner, id)) return false;
    walletOf(g, owner).cores -= coreCost(id);
    g.research[owner].current = { id, spent: 0 };
    if (owner === g.local) emit(g, { kind: "buildStart" });
    return true;
  }
  function cancelResearch(g, owner) {
    const r = g.research[owner];
    if (!r.current) return;
    walletOf(g, owner).credits += r.current.spent;
    walletOf(g, owner).cores += coreCost(r.current.id);
    r.current = null;
    if (owner === g.local) emit(g, { kind: "cancel" });
  }
  function updateResearch(g, dt) {
    if (g.result) return;
    for (const side of g.sides) {
      const brain = g.ais[side];
      if (!brain || g.humans.includes(side) || g.research[side].current || !brain.builds || brain.credits <= AI_RESERVE) continue;
      const next = researchFor(g.factions[side]).find((id) => !researchBlocked(g, side, id));
      if (next) startResearch(g, side, next);
    }
    for (const owner of g.sides) {
      const r = g.research[owner];
      if (!r.current || !hasBuilding(g, "techCenter", owner)) continue;
      const wallet = walletOf(g, owner);
      const factor = (powerInfo(g, owner).low ? LOW_POWER_FACTOR : 1) * RESEARCH_SPEED;
      if (advance(wallet, r.current, RESEARCH[r.current.id].cost, dt, factor)) {
        r.done.push(r.current.id);
        if (owner === g.local) {
          notify(g, `Research complete: ${RESEARCH[r.current.id].label}`);
          emit(g, { kind: "structureReady" });
          announce(g, "research_complete");
        }
        r.current = null;
      }
    }
  }
  function researchTime(id) {
    return RESEARCH[id].cost / BUILD_RATE / RESEARCH_SPEED;
  }

  // src/combat.ts
  function power(g, source) {
    return source ? rankDamage(source) * bonus(g, source.owner, "damage") : 1;
  }
  function buildingCentre(b) {
    return { x: (b.tx + b.w / 2) * TILE, y: (b.ty + b.h / 2) * TILE };
  }
  function targetInfo(g, id) {
    const u = g.units.find((x) => x.id === id);
    if (u) return { id, x: u.x, y: u.y, r: UNIT_STATS[u.kind].radius, owner: u.owner, armor: UNIT_STATS[u.kind].armor };
    const b = g.buildings.find((x) => x.id === id);
    if (b) {
      const c = buildingCentre(b);
      return { id, x: c.x, y: c.y, r: Math.min(b.w, b.h) * TILE / 2, owner: b.owner, armor: "building" };
    }
    return null;
  }
  function edgeDist(x, y, t) {
    return Math.max(0, Math.hypot(t.x - x, t.y - y) - t.r);
  }
  function canHit(weapon2, kind) {
    if (!weapon2) return false;
    const hits = weapon(weapon2).hits ?? "ground";
    return isAir(kind) ? hits !== "ground" : hits !== "air";
  }
  function nearestHostile(g, owner, x, y, maxDist, minDist = 0, weapon2) {
    const air = weapon2 ? weapon(weapon2).hits ?? "ground" : "both";
    let best = null;
    let bestD = Infinity;
    const blind = g.humans.includes(owner) && g.fogs[owner].enabled;
    for (const u of g.units) {
      if (!hostile(g, u.owner, owner)) continue;
      if (air !== "both" && isAir(u.kind) !== (air === "air")) continue;
      const r = UNIT_STATS[u.kind].radius;
      if (Math.abs(u.x - x) - r > maxDist || Math.abs(u.y - y) - r > maxDist) continue;
      if (blind && !visibleAt(g, u.x, u.y, owner)) continue;
      const centre = Math.hypot(u.x - x, u.y - y);
      const d = Math.max(0, centre - r);
      if (minDist > 0 && centre < minDist) continue;
      if (d <= maxDist && d < bestD) {
        best = u;
        bestD = d;
      }
    }
    if (best) return targetInfo(g, best.id);
    if (air === "air") return null;
    for (const b of g.buildings) {
      if (!hostile(g, b.owner, owner)) continue;
      const cx = (b.tx + b.w / 2) * TILE;
      const cy = (b.ty + b.h / 2) * TILE;
      const r = Math.min(b.w, b.h) * TILE / 2;
      if (Math.abs(cx - x) - r > maxDist || Math.abs(cy - y) - r > maxDist) continue;
      if (blind && !visibleRect(g, b.tx, b.ty, b.w, b.h, owner)) continue;
      const centre = Math.hypot(cx - x, cy - y);
      const d = Math.max(0, centre - r);
      if (minDist > 0 && centre < minDist) continue;
      if (d <= maxDist && d < bestD) {
        best = b;
        bestD = d;
      }
    }
    return best ? targetInfo(g, best.id) : null;
  }
  function addEffect(g, e) {
    g.effects.push({ x2: e.x, y2: e.y, age: 0, size: 1, ...e });
  }
  function damage(g, id, amount, source, attacker) {
    const by = attacker ?? source?.owner;
    const u = g.units.find((x) => x.id === id);
    if (u) {
      if (by !== void 0 && hostile(g, by, u.owner) && u.owner === g.local) underAttack(g, u.x, u.y, false);
      const vehicle = UNIT_STATS[u.kind].armor !== "infantry";
      const armour = (vehicle ? FACTIONS[g.factions[u.owner]].vehicleArmor * bonus(g, u.owner, "vehicleArmor") : 1) * bonus(g, u.owner, "armor");
      const dealt = Math.min(u.hp, amount * armour * rankArmor(u) * wardFactor(g, u));
      u.hp -= dealt;
      u.hitAt = g.time;
      if (source && hostile(g, source.owner, u.owner)) gainXp(g, source, dealt);
      if (u.hp <= 0) destroyUnit(g, u, by);
      return;
    }
    const b = g.buildings.find((x) => x.id === id);
    if (b) {
      if (by !== void 0 && hostile(g, by, b.owner) && b.owner === g.local) {
        const c = buildingCentre(b);
        underAttack(g, c.x, c.y, true);
      }
      const dealt = Math.min(b.hp, amount);
      b.hp -= dealt;
      if (source && hostile(g, source.owner, b.owner)) gainXp(g, source, dealt);
      if (b.hp <= 0) destroyBuilding(g, b);
    }
  }
  var whose = (g, owner) => hostile(g, owner, g.local) ? "Enemy" : "Allied";
  function destroyUnit(g, u, by) {
    g.units = g.units.filter((x) => x !== u);
    if (UNIT_STATS[u.kind].armor !== "infantry") leaveSalvage(g, u.x / TILE, u.y / TILE, unitCost(g.factions[u.owner], u.kind));
    g.selection.delete(u.id);
    const big = u.kind === "tank" || u.kind === "harvester" || u.kind === "artillery";
    emit(g, { kind: "explode", big, x: u.x, y: u.y });
    unitDeathFx(g, u);
    if (isHero(u.kind)) notify(g, u.owner === g.local ? `${UNIT_STATS[u.kind].label} has fallen!` : `${whose(g, u.owner)} hero ${UNIT_STATS[u.kind].label} is down!`);
    if (u.owner === g.local && isHero(u.kind)) emit(g, { kind: "heroVoice", unit: u.kind, line: "fallen" });
    else if (u.owner === g.local && u.kind !== "harvester") announce(g, "unit_lost", 6);
    if (u.owner === g.local && u.kind === "harvester") {
      announce(g, "harvester_lost");
      notify(g, "Harvester lost");
    }
    if (u.owner === PLAYER && u.kind === "harvester") {
      g.stats.harvestersLost++;
    }
    if (hostile(g, u.owner, PLAYER)) g.stats.enemyUnitsDestroyed++;
    const rival = by !== void 0 && hostile(g, by, u.owner) ? by : g.sides.length === 2 ? u.owner === PLAYER ? ENEMY : PLAYER : void 0;
    const share = rival === void 0 ? 0 : FACTIONS[g.factions[rival]].salvage + bonus(g, rival, "salvage");
    if (rival !== void 0 && share > 0) {
      const payout = unitCost(g.factions[u.owner], u.kind) * share;
      walletOf(g, rival).credits += payout;
    }
  }
  function destroyBuilding(g, b) {
    g.buildings = g.buildings.filter((x) => x !== b);
    leaveSalvage(g, b.tx + b.w / 2, b.ty + b.h, BUILDING_STATS[b.kind].cost);
    for (let y = b.ty; y < b.ty + b.h; y++) {
      for (let x = b.tx; x < b.tx + b.w; x++) {
        if (inBounds(g.map, x, y)) g.map.blocked[idx(g.map, x, y)] = 0;
      }
    }
    if (g.selectedBuilding === b.id) g.selectedBuilding = null;
    const c = buildingCentre(b);
    emit(g, { kind: "explode", big: true, x: c.x, y: c.y });
    buildingDeathFx(g, c.x, c.y, b.w, b.h);
    notify(g, b.owner === g.local ? `${BUILDING_STATS[b.kind].label} destroyed` : `${whose(g, b.owner)} ${BUILDING_STATS[b.kind].label} destroyed`);
    if (b.owner === g.local) announce(g, "structure_lost", 3);
  }
  function lift(g, id) {
    const u = g.units.find((x) => x.id === id);
    return u && isAir(u.kind) ? AIR_LIFT : 0;
  }
  function fire(g, owner, x, y0, weapon2, t0, source) {
    const w = weapon(weapon2);
    const y = y0 - (source ? lift(g, source.id) : 0);
    const t = { ...t0, y: t0.y - lift(g, t0.id) };
    emit(g, { kind: "shot", weapon: weapon2, x, y });
    muzzleFx(g, x, y, t.x, t.y, w.style, source ? UNIT_STATS[source.kind].radius + 2 : 12, !!source && UNIT_STATS[source.kind].armor === "infantry");
    if (w.speed === 0) {
      const look2 = w.style === "beam" ? "beam" : w.style === "flame" ? "flame" : "tracer";
      addEffect(g, { kind: look2, x: t.x, y: t.y, x2: x, y2: y, life: look2 === "beam" ? 0.14 : look2 === "flame" ? 0.18 : 0.08 });
      addEffect(g, { kind: "hit", x: t.x + (Math.random() - 0.5) * t.r, y: t.y + (Math.random() - 0.5) * t.r, life: 0.2, size: 0.5 });
      damage(g, t.id, w.damage * w.vs[t.armor] * power(g, source), source, owner);
    } else {
      g.projectiles.push({ x, y, sx: x, sy: y, targetId: t.id, tx: t.x, ty: t.y, weapon: weapon2, style: w.style, owner, sourceId: source?.id ?? null, puff: 0 });
    }
  }
  function splashDamage(g, owner, x, y, weapon2, source) {
    const w = weapon(weapon2);
    const r = (w.splash ?? 0) * TILE;
    const hits = [];
    for (const u of g.units) {
      if (!hostile(g, u.owner, owner) || isAir(u.kind)) continue;
      const d = Math.hypot(u.x - x, u.y - y);
      if (d <= r) hits.push({ id: u.id, d, armor: UNIT_STATS[u.kind].armor });
    }
    for (const b of g.buildings) {
      if (!hostile(g, b.owner, owner)) continue;
      const c = buildingCentre(b);
      const d = Math.max(0, Math.hypot(c.x - x, c.y - y) - Math.min(b.w, b.h) * TILE / 2);
      if (d <= r) hits.push({ id: b.id, d, armor: "building" });
    }
    const mult = power(g, source);
    for (const h of hits) damage(g, h.id, w.damage * w.vs[h.armor] * mult * (1 - 0.5 * (h.d / r)), source, owner);
  }
  function tileOf(t) {
    return { x: Math.floor(t.x / TILE), y: Math.floor(t.y / TILE) };
  }
  function treats(h, o) {
    if (isAir(o.kind)) return false;
    const armor = UNIT_STATS[o.kind].armor;
    return h.treats === "all" || (h.treats === "infantry" ? armor === "infantry" : armor !== "infantry");
  }
  function updateHealer(g, u, h, dt) {
    u.cooldown = Math.max(0, u.cooldown - dt);
    u.repath -= dt;
    const hurt = (o) => o !== u && o.owner === u.owner && o.hp < UNIT_STATS[o.kind].maxHp && treats(h, o);
    let target = u.targetId !== null ? g.units.find((o) => o.id === u.targetId) : void 0;
    if (target && !hurt(target)) target = void 0;
    if (!target && u.order !== "move") {
      const reach = (u.order === "idle" || u.order === "attackMove" ? h.seek : h.range) * TILE;
      let best = Infinity;
      for (const o of g.units) {
        if (!hurt(o)) continue;
        const d2 = Math.hypot(o.x - u.x, o.y - u.y);
        if (d2 > reach) continue;
        const score = o.hp / UNIT_STATS[o.kind].maxHp + d2 / (reach * 4);
        if (score < best) {
          best = score;
          target = o;
        }
      }
    }
    u.targetId = target?.id ?? null;
    if (!target) {
      if (u.order === "attackMove" && u.attackGoal && u.path.length === 0) {
        const here = unitTile(u);
        if (here.x === u.attackGoal.x && here.y === u.attackGoal.y) u.order = "idle";
        else setPath(g, u, u.attackGoal);
      }
      return;
    }
    const d = Math.hypot(target.x - u.x, target.y - u.y) - UNIT_STATS[target.kind].radius;
    if (d <= h.range * TILE) {
      if (u.order !== "move") u.path = [];
      u.angle = Math.atan2(target.y - u.y, target.x - u.x);
      if (u.cooldown <= 0) {
        const healed = Math.min(UNIT_STATS[target.kind].maxHp - target.hp, h.amount);
        target.hp += healed;
        gainXp(g, u, healed * VETERANCY.healXp);
        u.cooldown = h.interval;
        addEffect(g, { kind: "heal", x: target.x, y: target.y, x2: u.x, y2: u.y, life: 0.35 });
        emit(g, { kind: "heal", x: u.x, y: u.y });
      }
    } else if (u.order !== "move" && (u.repath <= 0 || u.path.length === 0)) {
      setPath(g, u, unitTile(target));
      u.repath = 0.5;
    }
  }
  function rearm(g, u, dt) {
    const ammo = AMMO[u.kind];
    const fields = g.buildings.filter((b) => b.owner === u.owner && b.kind === "airfield");
    if (fields.length === 0) return;
    const field = fields.reduce((a, b) => Math.hypot(a.tx - u.x / TILE, a.ty - u.y / TILE) < Math.hypot(b.tx - u.x / TILE, b.ty - u.y / TILE) ? a : b);
    const tx = Math.floor(u.x / TILE);
    const ty = Math.floor(u.y / TILE);
    const over = tx >= field.tx && ty >= field.ty && tx < field.tx + field.w && ty < field.ty + field.h;
    u.targetId = null;
    if (!over) {
      const spot = { x: field.tx + 1, y: field.ty };
      if (u.path.length === 0 || u.goal?.x !== spot.x || u.goal?.y !== spot.y) setPath(g, u, spot);
      return;
    }
    if (u.path.length > 0) return;
    u.ammo = Math.min(ammo.shots, (u.ammo ?? 0) + dt / ammo.reload);
    if (u.ammo >= ammo.shots) {
      u.ammo = ammo.shots;
      u.rearming = false;
      u.order = "idle";
      if (u.owner === g.local) notify(g, `${UNIT_STATS[u.kind].label} rearmed.`);
    }
  }
  function updateUnit(g, u, dt) {
    const healer = HEALERS[u.kind];
    if (healer) return updateHealer(g, u, healer, dt);
    const weapon2 = UNIT_STATS[u.kind].weapon;
    if (!weapon2) return;
    if (AMMO[u.kind]) {
      if (!u.rearming && (u.ammo ?? 0) < 1) {
        u.rearming = true;
        if (u.owner === g.local) notify(g, `${UNIT_STATS[u.kind].label} out of ammunition: returning to rearm.`);
      }
      if (u.rearming) return rearm(g, u, dt);
    }
    const w = weapon(weapon2);
    const range = w.range * bonus(g, u.owner, "range") * rangeFactor(g.weather, w.range) * TILE;
    const minRange = (w.minRange ?? 0) * TILE;
    u.cooldown = Math.max(0, u.cooldown - dt);
    u.repath -= dt;
    let target = u.targetId !== null ? targetInfo(g, u.targetId) : null;
    if (target) {
      const tu = g.units.find((x) => x.id === target.id);
      if (tu && !canHit(weapon2, tu.kind)) target = null;
    }
    if (u.targetId !== null && !target) {
      u.targetId = null;
      u.explicitTarget = false;
      if (u.order === "attack") u.order = "idle";
    }
    if (target && !u.explicitTarget) {
      const fromPost = u.post ? Math.hypot(u.x - (u.post.x + 0.5) * TILE, u.y - (u.post.y + 0.5) * TILE) : 0;
      const tooFar = u.post ? fromPost > LEASH * TILE : edgeDist(u.x, u.y, target) > range + (ALERT_MARGIN + 2) * TILE;
      if (tooFar) {
        target = null;
        u.targetId = null;
        u.path = [];
      }
    }
    if (!target && u.order !== "move") {
      target = u.post ? nearestHostile(g, u.owner, (u.post.x + 0.5) * TILE, (u.post.y + 0.5) * TILE, GUARD_RADIUS * TILE, 0, weapon2) : nearestHostile(g, u.owner, u.x, u.y, range + ALERT_MARGIN * TILE, minRange, weapon2);
      if (target) {
        u.targetId = target.id;
        u.explicitTarget = false;
        u.repath = 0;
      }
    }
    if (!target) {
      if (u.order === "attackMove" && u.attackGoal && u.path.length === 0) {
        const here = unitTile(u);
        if (here.x === u.attackGoal.x && here.y === u.attackGoal.y) u.order = "idle";
        else setPath(g, u, u.attackGoal);
      } else if (u.post && u.path.length === 0) {
        const here = unitTile(u);
        if (Math.hypot(here.x - u.post.x, here.y - u.post.y) > 1.5) setPath(g, u, u.post);
      }
      return;
    }
    const d = edgeDist(u.x, u.y, target);
    const tooClose = minRange > 0 && Math.hypot(target.x - u.x, target.y - u.y) < minRange;
    if (tooClose) {
      if (!u.explicitTarget) u.targetId = null;
      return;
    }
    if (d <= range) {
      u.path = [];
      u.angle = Math.atan2(target.y - u.y, target.x - u.x);
      if (u.cooldown <= 0) {
        fire(g, u.owner, u.x, u.y, weapon2, target, u);
        u.cooldown = w.cooldown * rankCooldown(u);
        if (u.ammo !== void 0) u.ammo = Math.max(0, u.ammo - 1);
      }
    } else if (u.repath <= 0 || u.path.length === 0) {
      setPath(g, u, tileOf(target));
      u.repath = 0.5;
    }
  }
  function updateTurret(g, b, dt, lowPower) {
    const weapon2 = BUILDING_STATS[b.kind].weapon;
    if (!weapon2) return;
    const w = weapon(weapon2);
    const range = w.range * rangeFactor(g.weather, w.range) * TILE;
    const c = buildingCentre(b);
    b.cooldown = Math.max(0, b.cooldown - dt);
    let target = b.targetId !== null ? targetInfo(g, b.targetId) : null;
    if (!target || edgeDist(c.x, c.y, target) > range) {
      target = nearestHostile(g, b.owner, c.x, c.y, range, 0, weapon2);
      b.targetId = target?.id ?? null;
    }
    if (!target) return;
    b.angle = Math.atan2(target.y - c.y, target.x - c.x);
    if (b.cooldown <= 0) {
      fire(g, b.owner, c.x + Math.cos(b.angle) * 12, c.y + Math.sin(b.angle) * 12, weapon2, target);
      b.cooldown = w.cooldown * (lowPower ? 2 : 1);
    }
  }
  function updateProjectiles(g, dt) {
    const keep = [];
    for (const p of g.projectiles) {
      const t = targetInfo(g, p.targetId);
      if (t) {
        p.tx = t.x;
        p.ty = t.y - lift(g, t.id);
      }
      const w = weapon(p.weapon);
      const step = w.speed * TILE * dt;
      const dx = p.tx - p.x;
      const dy = p.ty - p.y;
      const d = Math.hypot(dx, dy);
      if (p.style === "rocket") {
        p.puff -= dt;
        if (p.puff <= 0) {
          p.puff = 0.03;
          addEffect(g, { kind: "smoke", x: p.x, y: p.y, life: 0.5, size: 0.6 });
        }
      }
      if (d <= step) {
        emit(g, { kind: "impact", big: !!w.splash, x: p.tx, y: p.ty });
        const source = p.sourceId !== null ? g.units.find((u) => u.id === p.sourceId) : void 0;
        if (w.splash) {
          splashDamage(g, p.owner, p.tx, p.ty, p.weapon, source);
          impactFx(g, p.tx, p.ty, true);
        } else {
          if (t) damage(g, t.id, w.damage * w.vs[t.armor] * power(g, source), source, p.owner);
          impactFx(g, p.tx, p.ty, false);
        }
      } else {
        p.x += dx / d * step;
        p.y += dy / d * step;
        keep.push(p);
      }
    }
    g.projectiles = keep;
  }
  function updateCombat(g, dt) {
    for (const u of [...g.units]) {
      if (g.units.includes(u)) updateUnit(g, u, dt);
    }
    const low = {};
    for (const s of g.sides) low[s] = powerInfo(g, s).low;
    for (const b of [...g.buildings]) {
      if (g.buildings.includes(b)) updateTurret(g, b, dt, !!low[b.owner]);
    }
    updateProjectiles(g, dt);
    for (const e of g.effects) e.age += dt;
    g.effects = g.effects.filter((e) => e.age < e.life);
    if (!g.result) {
      if (g.mission) {
        if (!g.buildings.some((b) => b.owner === PLAYER) && !g.units.some((u) => u.owner === PLAYER)) {
          g.result = "defeat";
          g.resultReason = "Your forces have been wiped out.";
          emit(g, { kind: "defeat" });
        }
      } else {
        const standing = (s) => g.buildings.some((b) => b.owner === s && !isBarrier(b.kind));
        if (g.sides.length > 2) noteEliminations(g, standing);
        const mine = g.teams[PLAYER];
        if (!g.sides.some((s) => g.teams[s] !== mine && standing(s))) g.result = "victory";
        else if (!g.sides.some((s) => g.teams[s] === mine && standing(s))) g.result = "defeat";
        if (g.result) emit(g, { kind: g.result });
      }
    }
  }
  function noteEliminations(g, standing) {
    for (const s of g.sides) {
      if (g.eliminated.includes(s) || standing(s)) continue;
      g.eliminated.push(s);
      const name = FACTIONS[g.factions[s]].label;
      if (s === g.local) notify(g, g.sides.some((o) => o !== s && !hostile(g, o, s) && standing(o)) ? "Your base has fallen. Your ally fights on." : "Your base has fallen.");
      else notify(g, `${hostile(g, s, g.local) ? "" : "Our ally "}${name}${hostile(g, s, g.local) ? " (" + sideColour(s) + ")" : ""} has been knocked out!`);
    }
  }
  function sideColour(s) {
    return ["blue", "red", "green", "violet"][s];
  }

  // src/heroes.ts
  var CHARGE = { delay: 3, damage: 1600, reach: 1.5 };
  var WARD = { radius: 4, duration: 8, factor: 0.4 };
  var CREW = { count: 3 };
  function isHero(kind) {
    return kind in HEROES;
  }
  function heroCount(g, owner) {
    const lines2 = linesOf(g, owner);
    const alive2 = g.units.filter((u) => u.owner === owner && isHero(u.kind)).length;
    const building = Object.values(lines2).reduce(
      (n, l) => n + (l.current && isHero(l.current.kind) ? 1 : 0) + ("queue" in l ? l.queue.filter(isHero).length : 0),
      0
    );
    return alive2 + building;
  }
  function wardFactor(g, u) {
    return g.time < u.shieldUntil ? WARD.factor : 1;
  }
  function nearestEnemyBuilding(g, u) {
    let best = { d: Infinity, b: null };
    for (const b of g.buildings) {
      if (!hostile(g, b.owner, u.owner)) continue;
      const dx = Math.max(b.tx * TILE - u.x, 0, u.x - (b.tx + b.w) * TILE);
      const dy = Math.max(b.ty * TILE - u.y, 0, u.y - (b.ty + b.h) * TILE);
      const d = Math.hypot(dx, dy);
      if (d < best.d) best = { d, b };
    }
    return best;
  }
  function useAbility(g, u) {
    const hero = HEROES[u.kind];
    if (!hero) return "Only heroes have abilities.";
    if (u.abilityCd > 0) return `${hero.ability} recharging (${Math.ceil(u.abilityCd)}s)`;
    if (hero.kind === "charge") {
      const { d, b } = nearestEnemyBuilding(g, u);
      if (!b || d > CHARGE.reach * TILE) return "Move next to an enemy building first.";
      if (g.charges.some((c2) => c2.buildingId === b.id)) return "A charge is already set there.";
      const c = buildingCentre(b);
      g.charges.push({ buildingId: b.id, owner: u.owner, sourceId: u.id, x: c.x, y: c.y, timer: CHARGE.delay });
      if (u.owner === g.local) notify(g, "Charge set!");
    } else if (hero.kind === "ward") {
      for (const o of g.units) {
        if (o.owner === u.owner && Math.hypot(o.x - u.x, o.y - u.y) <= WARD.radius * TILE) o.shieldUntil = g.time + WARD.duration;
      }
    } else {
      const kind = factionUnit(g.factions[u.owner], "infantry");
      const crew = formationTiles(g.map, unitTile(u), CREW.count + 1).filter((t) => !(t.x === unitTile(u).x && t.y === unitTile(u).y)).slice(0, CREW.count).map((t) => spawnUnit(g, kind, t.x, t.y, u.owner));
      if (!g.humans.includes(u.owner)) g.ais[u.owner]?.raiders.push(...crew.map((c) => c.id));
    }
    u.abilityCd = hero.cooldown;
    emit(g, { kind: "ability", ability: hero.kind, owner: u.owner, x: u.x, y: u.y });
    return null;
  }
  function updateHeroes(g, dt) {
    for (const u of g.units) if (u.abilityCd > 0) u.abilityCd = Math.max(0, u.abilityCd - dt);
    const ticking = [];
    for (const c of g.charges) {
      c.timer -= dt;
      if (c.timer > 0) {
        ticking.push(c);
        continue;
      }
      const source = g.units.find((u) => u.id === c.sourceId);
      if (g.buildings.some((b) => b.id === c.buildingId)) damage(g, c.buildingId, CHARGE.damage, source);
    }
    g.charges = ticking.filter((c) => g.buildings.some((b) => b.id === c.buildingId));
    for (const u of g.units) {
      const hero = HEROES[u.kind];
      if (!hero || g.humans.includes(u.owner) || !g.ais[u.owner] || u.abilityCd > 0) continue;
      const fighting = nearestHostile(g, u.owner, u.x, u.y, 5 * TILE) !== null;
      if (hero.kind === "charge") {
        const { d, b } = nearestEnemyBuilding(g, u);
        if (b && d <= CHARGE.reach * TILE) useAbility(g, u);
      } else if (hero.kind === "ward") {
        const near = g.units.filter((o) => o.owner === u.owner && Math.hypot(o.x - u.x, o.y - u.y) <= WARD.radius * TILE).length;
        if (fighting && near >= 3) useAbility(g, u);
      } else if (fighting) {
        useAbility(g, u);
      }
    }
  }
  function abilityStatus(u) {
    const hero = HEROES[u.kind];
    if (!hero) return "";
    return u.abilityCd > 0 ? `${hero.ability} \u2014 ${Math.ceil(u.abilityCd)}s` : `${hero.ability} \u2014 ready`;
  }

  // src/production.ts
  function powerInfo(g, owner = PLAYER) {
    let produced = 0;
    let used = 0;
    for (const b of g.buildings) {
      if (b.owner !== owner) continue;
      const p = BUILDING_STATS[b.kind].power;
      if (p > 0) produced += p;
      else used -= p;
    }
    return { produced, used, low: used > produced };
  }
  function hasBuilding(g, kind, owner = PLAYER) {
    return g.buildings.some((b) => b.kind === kind && b.owner === owner);
  }
  function missingFor(g, kind, owner = PLAYER) {
    const needs = kind in UNIT_STATS ? [UNIT_STATS[kind].producer, UNIT_STATS[kind].needs] : [BUILDING_STATS[kind].requires];
    return needs.find((n) => !!n && !hasBuilding(g, n, owner)) ?? null;
  }
  function hasRadar(g, owner = PLAYER) {
    return hasBuilding(g, "radar", owner) && !powerInfo(g, owner).low;
  }
  function updateRepairs(g, dt) {
    for (const field of g.buildings) {
      if (field.kind !== "airfield") continue;
      const wallet = walletOf(g, field.owner);
      for (const u of g.units) {
        if (u.owner !== field.owner || !isAir(u.kind) || u.path.length > 0 || u.hp >= UNIT_STATS[u.kind].maxHp) continue;
        const tx = Math.floor(u.x / 32);
        const ty = Math.floor(u.y / 32);
        if (tx < field.tx || ty < field.ty || tx >= field.tx + field.w || ty >= field.ty + field.h) continue;
        const hp = Math.min(REPAIR.rate * dt, UNIT_STATS[u.kind].maxHp - u.hp, wallet.credits / REPAIR.costPerHp);
        if (hp <= 0) continue;
        u.hp += hp;
        wallet.credits -= hp * REPAIR.costPerHp;
      }
    }
    for (const pad of g.buildings) {
      if (pad.kind !== "repairPad") continue;
      const wallet = walletOf(g, pad.owner);
      for (const u of g.units) {
        if (u.owner !== pad.owner || u.path.length > 0 || UNIT_STATS[u.kind].armor === "infantry") continue;
        const max = UNIT_STATS[u.kind].maxHp;
        if (u.hp >= max) continue;
        const tx = Math.floor(u.x / 32);
        const ty = Math.floor(u.y / 32);
        if (tx < pad.tx || ty < pad.ty || tx >= pad.tx + pad.w || ty >= pad.ty + pad.h) continue;
        const hp = Math.min(REPAIR.rate * dt, max - u.hp, wallet.credits / REPAIR.costPerHp);
        if (hp <= 0) continue;
        u.hp += hp;
        wallet.credits -= hp * REPAIR.costPerHp;
      }
    }
  }
  function advance(wallet, job, cost, dt, factor) {
    const step = cost / buildTime(cost) * factor * dt;
    const spend = Math.min(step, cost - job.spent, wallet.credits);
    wallet.credits -= spend;
    job.spent += spend;
    return job.spent >= cost - 1e-6;
  }
  function updateProduction(g, dt) {
    if (g.result) return;
    for (const owner of g.humans) updateSideProduction(g, owner, dt);
  }
  function updateSideProduction(g, owner, dt) {
    const local = owner === g.local;
    const wallet = walletOf(g, owner);
    const lines2 = linesOf(g, owner);
    const low = powerInfo(g, owner).low;
    const factor = (low ? LOW_POWER_FACTOR : 1) * bonus(g, owner, "buildSpeed");
    if (local) {
      if (low && !g.lowPower) announce(g, "low_power", 10);
      g.lowPower = low;
    }
    const job = structureOf(g, owner);
    const building = job && !job.done || Object.values(lines2).some((l) => l.current);
    if (local && building && wallet.credits < 1) announce(g, "insufficient_funds", 20);
    if (job && !job.done && hasBuilding(g, "yard", owner)) {
      if (advance(wallet, job, BUILDING_STATS[job.kind].cost, dt, factor)) {
        job.done = true;
        if (local) {
          notify(g, `${BUILDING_STATS[job.kind].label} ready to place`);
          emit(g, { kind: "structureReady" });
          announce(g, "construction_complete");
        }
      }
    }
    for (const producer of Object.keys(lines2)) {
      const line = lines2[producer];
      const factory = g.buildings.find((b) => b.kind === producer && b.owner === owner);
      if (!factory) continue;
      if (!line.current && line.queue.length > 0) line.current = { kind: line.queue.shift(), spent: 0 };
      const cur = line.current;
      if (!cur) continue;
      if (advance(wallet, cur, unitCost(g.factions[owner], cur.kind), dt, factor)) {
        const t = exitTile(g, factory);
        const u = spawnUnit(g, cur.kind, t.x, t.y, owner);
        if (u.kind === "harvester") autoHarvest(g, u, t);
        else if (factory.rally) commandMove(g, [u], factory.rally);
        if (line.repeat === cur.kind && line.queue.length === 0 && !missingFor(g, cur.kind, owner)) line.queue.push(cur.kind);
        if (local) {
          notify(g, `${UNIT_STATS[cur.kind].label} ready`);
          emit(g, { kind: "unitReady" });
          if (isHero(cur.kind)) emit(g, { kind: "heroVoice", unit: cur.kind, line: "ready" });
          else announce(g, "unit_ready", 1.5);
        }
        line.current = null;
      }
    }
  }
  function startStructure(g, kind, owner = PLAYER) {
    if (structureOf(g, owner) || missingFor(g, kind, owner) || BUILDING_STATS[kind].cost <= 0) return false;
    if (!canBuild(g.factions[owner], kind)) return false;
    setStructureOf(g, owner, { kind, spent: 0, done: false });
    if (owner === g.local) {
      emit(g, { kind: "buildStart" });
      announce(g, "building");
    }
    return true;
  }
  function cancelStructure(g, owner = PLAYER) {
    const job = structureOf(g, owner);
    if (!job) return;
    walletOf(g, owner).credits += job.spent;
    setStructureOf(g, owner, null);
    if (owner === g.local) {
      emit(g, { kind: "cancel" });
      announce(g, "cancelled");
    }
  }
  function placementTiles(g, kind, tx, ty, owner = PLAYER) {
    const { w, h } = BUILDING_STATS[kind];
    const occupied = new Set(g.units.map((u) => {
      const t = unitTile(u);
      return `${t.x},${t.y}`;
    }));
    if (isRemote(kind)) return remoteTiles(g, kind, tx, ty, owner, occupied);
    if (kind === "seedSpire") {
      const m = g.map;
      const ok = inBounds(m, tx, ty) && nearBase(g, tx, ty, 1, 1, owner) && m.terrain[idx(m, tx, ty)] === Terrain.Sand && m.blocked[idx(m, tx, ty)] === 0 && m.spice[idx(m, tx, ty)] <= 0 && !occupied.has(`${tx},${ty}`);
      return [{ x: tx, y: ty, ok }];
    }
    if (isBarrier(kind)) {
      const m = g.map;
      const ok = inBounds(m, tx, ty) && nearBase(g, tx, ty, 1, 1, owner) && m.terrain[idx(m, tx, ty)] !== Terrain.Cliff && m.blocked[idx(m, tx, ty)] === 0 && m.spice[idx(m, tx, ty)] <= 0 && !occupied.has(`${tx},${ty}`);
      return [{ x: tx, y: ty, ok }];
    }
    const near = nearBase(g, tx, ty, w, h, owner);
    const tiles = [];
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        tiles.push({ x, y, ok: near && isBuildable(g.map, x, y) && !occupied.has(`${x},${y}`) });
      }
    }
    return tiles;
  }
  function nearBase(g, tx, ty, w, h, owner) {
    const cx = tx + w / 2;
    const cy = ty + h / 2;
    return g.buildings.some(
      (b) => b.owner === owner && !isBarrier(b.kind) && ((b.kind === "yard" || b.kind === "outpost") && Math.hypot(b.tx + b.w / 2 - cx, b.ty + b.h / 2 - cy) <= BUILD_RADIUS || tx < b.tx + b.w + PLACE_GAP && tx + w > b.tx - PLACE_GAP && ty < b.ty + b.h + PLACE_GAP && ty + h > b.ty - PLACE_GAP)
    );
  }
  function canPlace(g, kind, tx, ty, owner = PLAYER) {
    return placementTiles(g, kind, tx, ty, owner).every((t) => t.ok);
  }
  function placeStructure(g, tx, ty, owner = PLAYER) {
    const job = structureOf(g, owner);
    if (!job?.done || !canPlace(g, job.kind, tx, ty, owner)) return false;
    const b = placeBuilding(g, job.kind, tx, ty, owner);
    clearUnder(g, b);
    if (isDock(b.kind)) spawnFreeHarvester(g, b);
    setStructureOf(g, owner, null);
    if (owner === g.local) {
      emit(g, { kind: "place" });
      if (b.kind === "radar" && !powerInfo(g, owner).low) announce(g, "radar_online");
    }
    return true;
  }
  function queuedCount(g, kind, owner = PLAYER) {
    const line = linesOf(g, owner)[UNIT_STATS[kind].producer];
    return line.queue.filter((k) => k === kind).length + (line.current?.kind === kind ? 1 : 0);
  }
  function queueUnits(g, kind, n, owner = PLAYER) {
    let added = 0;
    while (added < n && queueUnit(g, kind, added > 0, owner)) added++;
    return added;
  }
  function toggleRepeat(g, kind, owner = PLAYER) {
    if (!canTrain(g.factions[owner], kind) || missingFor(g, kind, owner) || isHero(kind)) return false;
    const line = linesOf(g, owner)[UNIT_STATS[kind].producer];
    line.repeat = line.repeat === kind ? null : kind;
    if (line.repeat && !line.current && line.queue.length === 0) queueUnit(g, kind, false, owner);
    return true;
  }
  function queueUnit(g, kind, quiet = false, owner = PLAYER) {
    if (!canTrain(g.factions[owner], kind) || missingFor(g, kind, owner)) return false;
    if (isHero(kind) && heroCount(g, owner) > 0) return false;
    const line = linesOf(g, owner)[UNIT_STATS[kind].producer];
    if (line.queue.length + (line.current ? 1 : 0) >= MAX_QUEUE) return false;
    const wallet = walletOf(g, owner);
    if (wallet.cores < coreCost(kind)) return false;
    wallet.cores -= coreCost(kind);
    line.queue.push(kind);
    if (!quiet && owner === g.local) {
      emit(g, { kind: "buildStart" });
      announce(g, "training", 1);
    }
    return true;
  }
  function layWall(g, tiles, owner = PLAYER) {
    if (missingFor(g, "wall", owner)) return 0;
    const wallet = walletOf(g, owner);
    const cost = BUILDING_STATS.wall.cost;
    let laid = 0;
    for (const t of tiles.slice(0, WALL_RUN)) {
      if (wallet.credits < cost || !canPlace(g, "wall", t.x, t.y, owner)) continue;
      wallet.credits -= cost;
      placeBuilding(g, "wall", t.x, t.y, owner);
      laid++;
    }
    if (laid > 0 && owner === g.local) emit(g, { kind: "place" });
    return laid;
  }
  function wallLine(a, b) {
    const n = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
    const out = [{ x: a.x, y: a.y }];
    for (let i = 1; i <= n && out.length < WALL_RUN; i++) {
      const p = { x: Math.round(a.x + (b.x - a.x) * i / n), y: Math.round(a.y + (b.y - a.y) * i / n) };
      const last = out[out.length - 1];
      if (p.x !== last.x && p.y !== last.y) out.push({ x: p.x, y: last.y });
      out.push(p);
    }
    return out.slice(0, WALL_RUN);
  }
  var SELL_REFUND = 0.5;
  var BUILDING_REPAIR = { rate: 25, costShare: 0.5 };
  function sellBuilding(g, b, owner = PLAYER) {
    if (b.owner !== owner) return "That's not yours to sell.";
    if (b.kind === "yard") return "The Construction Yard can't be sold.";
    const refund = Math.floor(BUILDING_STATS[b.kind].cost * SELL_REFUND * (b.hp / BUILDING_STATS[b.kind].maxHp));
    for (let y = b.ty; y < b.ty + b.h; y++) for (let x = b.tx; x < b.tx + b.w; x++) if (inBounds(g.map, x, y)) g.map.blocked[idx(g.map, x, y)] = 0;
    g.buildings = g.buildings.filter((o) => o !== b);
    g.charges = g.charges.filter((c) => c.buildingId !== b.id);
    if (g.selectedBuilding === b.id) g.selectedBuilding = null;
    walletOf(g, owner).credits += refund;
    if (owner === g.local) {
      notify(g, `Sold ${BUILDING_STATS[b.kind].label} for ${refund}`);
      emit(g, { kind: "place" });
    }
    return null;
  }
  function toggleBuildingRepair(g, b, owner = PLAYER) {
    if (b.owner !== owner) return "You can only repair your own buildings.";
    if (!b.repairing && b.hp >= BUILDING_STATS[b.kind].maxHp) return "That building isn't damaged.";
    b.repairing = !b.repairing;
    if (owner === g.local) emit(g, { kind: b.repairing ? "buildStart" : "cancel" });
    return null;
  }
  function updateBuildingRepairs(g, dt) {
    for (const b of g.buildings) {
      const max = BUILDING_STATS[b.kind].maxHp;
      const wallet = walletOf(g, b.owner);
      if (g.ais[b.owner] && !g.humans.includes(b.owner) && !b.repairing && b.hp < max * 0.6 && wallet.credits > 600) b.repairing = true;
      if (!b.repairing) continue;
      const perHp = BUILDING_STATS[b.kind].cost * BUILDING_REPAIR.costShare / max;
      const hp = Math.min(max - b.hp, BUILDING_REPAIR.rate * dt, perHp > 0 ? wallet.credits / perHp : Infinity);
      b.hp += hp;
      wallet.credits -= hp * perHp;
      if (b.hp >= max - 1e-6 || perHp > 0 && wallet.credits < perHp) b.repairing = false;
    }
  }
  function dequeueUnit(g, kind, owner = PLAYER) {
    const line = linesOf(g, owner)[UNIT_STATS[kind].producer];
    const i = line.queue.lastIndexOf(kind);
    if (i !== -1) {
      line.queue.splice(i, 1);
      walletOf(g, owner).cores += coreCost(kind);
      return true;
    }
    if (line.current?.kind === kind) {
      walletOf(g, owner).credits += line.current.spent;
      walletOf(g, owner).cores += coreCost(kind);
      line.current = null;
      return true;
    }
    return false;
  }

  // src/crystals.ts
  function canGrowAt(m, x, y) {
    if (!inBounds(m, x, y)) return false;
    const i = idx(m, x, y);
    return m.terrain[i] === Terrain.Sand && m.blocked[i] === 0 && m.vein[i] !== Vein.Core;
  }
  function totalCrystal(m) {
    let t = 0;
    for (let i = 0; i < m.spice.length; i++) if (m.vein[i] !== Vein.Core) t += m.spice[i];
    return t;
  }
  var NEIGHBOURS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  function updateCrystals(g, dt) {
    g.crystalTimer -= dt;
    if (g.crystalTimer > 0) return;
    const step = CRYSTALS.interval;
    g.crystalTimer += step;
    const m = g.map;
    g.crystalTotal = totalCrystal(m);
    const canSpread = g.crystalTotal < g.crystalCap;
    const seeds = [];
    for (let y = 0; y < m.h; y++) {
      for (let x = 0; x < m.w; x++) {
        const i = idx(m, x, y);
        const amt = m.spice[i];
        const vein = m.vein[i];
        if (vein === Vein.Core) {
          m.spice[i] = Math.min(CORES.perTile, amt + CORES.regrow * step);
          continue;
        }
        if (amt <= 0) continue;
        m.spice[i] = Math.min(VEINS.max[vein], amt + CRYSTALS.regrowRate * VEINS.regrow[vein] * step);
        if (vein === Vein.StormGlass) continue;
        if (!canSpread || amt < CRYSTALS.spreadMin || g.crystalRng() >= CRYSTALS.spreadChance * step) continue;
        const [dx, dy] = NEIGHBOURS[Math.floor(g.crystalRng() * 4)];
        if (canGrowAt(m, x + dx, y + dy) && m.spice[idx(m, x + dx, y + dy)] === 0) seeds.push(idx(m, x + dx, y + dy));
      }
    }
    for (const i of seeds) {
      m.spice[i] = CRYSTALS.seedAmount;
      m.vein[i] = Vein.Crystal;
    }
  }

  // src/storm.ts
  function stormRadius(s) {
    const grow2 = Math.min(1, s.age / STORMS.buildUp);
    const fade = Math.min(1, (s.life - s.age) / STORMS.fade);
    return STORMS.radius * Math.max(0.15, Math.min(grow2, fade));
  }
  var raging = (s) => s.age >= STORMS.buildUp && s.life - s.age > STORMS.fade;
  function stormSpot(g) {
    const r = g.hazardRng;
    const m = g.map;
    let best = null;
    let bestScore = Infinity;
    for (let k = 0; k < 10; k++) {
      const p = { x: Math.floor(6 + r() * (m.w - 12)), y: Math.floor(6 + r() * (m.h - 12)) };
      if (!isPassable(m, p.x, p.y)) continue;
      const d = g.sides.map((s) => Math.hypot(g.startOf[s].x + 1.5 - p.x, g.startOf[s].y + 1.5 - p.y)).sort((a, b) => a - b);
      let score = Math.abs(d[0] - (d[1] ?? d[0]));
      if (g.buildings.some((b) => Math.hypot(b.tx + b.w / 2 - p.x, b.ty + b.h / 2 - p.y) < STORMS.radius + 6)) score += 100;
      if (score < bestScore) {
        best = p;
        bestScore = score;
      }
    }
    return best ?? { x: m.w >> 1, y: m.h >> 1 };
  }
  function spawnStorm(g, at) {
    const p = at ?? stormSpot(g);
    const s = {
      id: g.nextId++,
      x: (p.x + 0.5) * TILE,
      y: (p.y + 0.5) * TILE,
      age: 0,
      life: STORMS.buildUp + STORMS.rageMin + g.hazardRng() * (STORMS.rageMax - STORMS.rageMin) + STORMS.fade,
      seedDebt: 0
    };
    g.storms.push(s);
    notify(g, "Crystal storm building up! (Space to look)");
    g.pings.push({ x: s.x, y: s.y, age: 0 });
    emit(g, { kind: "stormWarning" });
    return s;
  }
  function stormNear(g, x, y, margin) {
    return g.storms.some((s) => Math.hypot(x - s.x, y - s.y) <= (stormRadius(s) + margin) * TILE);
  }
  function inStorm(s, x, y) {
    return Math.hypot(x - s.x, y - s.y) <= stormRadius(s) * TILE;
  }
  function updateStorm(g, s, dt) {
    s.age += dt;
    const strength = Math.min(1, s.age / STORMS.buildUp);
    for (const u of [...g.units]) {
      if (inStorm(s, u.x, u.y)) damage(g, u.id, STORMS.damage[UNIT_STATS[u.kind].armor] * FACTIONS[g.factions[u.owner]].stormDamage * bonus(g, u.owner, "storm") * strength * dt);
    }
    for (const b of [...g.buildings]) {
      const cx = (b.tx + b.w / 2) * TILE;
      const cy = (b.ty + b.h / 2) * TILE;
      if (inStorm(s, cx, cy)) damage(g, b.id, STORMS.damage.building * strength * dt * (BUILDING_STATS[b.kind].maxHp / 500));
    }
    if (raging(s)) {
      s.seedDebt += STORMS.seedRate * dt;
      while (s.seedDebt >= 1) {
        s.seedDebt -= 1;
        const a = g.hazardRng() * Math.PI * 2;
        const r = Math.sqrt(g.hazardRng()) * stormRadius(s);
        const tx = Math.floor(s.x / TILE + Math.cos(a) * r);
        const ty = Math.floor(s.y / TILE + Math.sin(a) * r);
        if (!inBounds(g.map, tx, ty) || !canGrowAt(g.map, tx, ty)) continue;
        const i = idx(g.map, tx, ty);
        if (g.map.spice[i] <= 0) g.map.vein[i] = Vein.StormGlass;
        g.crystalTotal += Math.max(0, STORMS.seedAmount - g.map.spice[i]);
        g.map.spice[i] = Math.max(g.map.spice[i], STORMS.seedAmount);
      }
    }
    return s.age < s.life;
  }
  function updateStorms(g, dt) {
    if (g.result) return;
    if (g.storms.length === 0) {
      g.stormTimer -= dt;
      if (g.stormTimer <= 0) {
        spawnStorm(g);
        g.stormTimer = Infinity;
      }
    }
    const passed = g.storms.filter((s) => !updateStorm(g, s, dt));
    if (passed.length > 0) {
      g.storms = g.storms.filter((s) => !passed.includes(s));
      if (g.storms.length === 0) {
        const [lo, hi] = g.stormGap ?? [STORMS.gapMin, STORMS.gapMax];
        g.stormTimer = lo + g.hazardRng() * (hi - lo);
      }
    }
  }

  // src/superweapons.ts
  var SUPER = {
    /** Seconds to charge (it pauses while its owner's power is low). */
    charge: 300,
    /** Orbital strike: warning time (s), radius (tiles), damage at the centre. */
    orbitalDelay: 3,
    orbitalRadius: 3.5,
    orbitalDamage: 650,
    /** Called storm: how long it rages (s). */
    stormRage: 30,
    /** Salvage swarm: how long (s), radius (tiles), damage per bite (every half second), share paid out. */
    swarmLife: 12,
    swarmRadius: 3.5,
    swarmBite: 22,
    swarmPay: 0.6
  };
  var SUPERWEAPONS = {
    uplink: { kind: "orbital", name: "Orbital Strike" },
    stormHeart: { kind: "storm", name: "Called Storm" },
    scrapHive: { kind: "swarm", name: "Salvage Swarm" }
  };
  var isSuper = (kind) => !!SUPERWEAPONS[kind];
  function superweaponBuilt(g, b) {
    b.cooldown = SUPER.charge;
    if (hostile(g, b.owner, g.local)) {
      notify(g, `Warning: enemy superweapon detected (${SUPERWEAPONS[b.kind].name}).`);
      announce(g, "superweapon_detected");
    }
  }
  function fireSuperweapon(g, b, tx, ty) {
    const sw = SUPERWEAPONS[b.kind];
    if (!sw) return "That isn't a superweapon.";
    if (b.cooldown > 0) return `${sw.name} isn't ready (${Math.ceil(b.cooldown)}s).`;
    if (tx < 0 || ty < 0 || tx >= g.map.w || ty >= g.map.h) return "That's off the map.";
    b.cooldown = SUPER.charge;
    b.targetId = null;
    const x = (tx + 0.5) * TILE;
    const y = (ty + 0.5) * TILE;
    if (sw.kind === "storm") {
      const s = spawnStorm(g, { x: tx, y: ty });
      s.age = STORMS.buildUp;
      s.life = STORMS.buildUp + SUPER.stormRage + STORMS.fade;
    } else {
      g.strikes.push({ id: g.nextId++, kind: sw.kind, owner: b.owner, x, y, age: 0, life: sw.kind === "orbital" ? SUPER.orbitalDelay + 1 : SUPER.swarmLife, tick: 0 });
    }
    if (b.owner === g.local) notify(g, `${sw.name} away!`);
    else {
      notify(g, hostile(g, b.owner, g.local) ? `Enemy ${sw.name.toLowerCase()} incoming! (Space to look)` : `Our ally fired a ${sw.name.toLowerCase()}.`);
      g.pings.push({ x, y, age: 0 });
      if (hostile(g, b.owner, g.local)) emit(g, { kind: "alarm" });
    }
    return null;
  }
  function updateSuperweapons(g, dt) {
    for (const b of g.buildings) {
      const sw = SUPERWEAPONS[b.kind];
      if (!sw || b.cooldown <= 0) continue;
      if (powerInfo(g, b.owner).low) continue;
      b.cooldown = Math.max(0, b.cooldown - dt);
      if (b.cooldown === 0 && b.owner === g.local) {
        notify(g, `${sw.name} ready: select it and press Q, then click a target.`);
        announce(g, "superweapon_ready");
      }
    }
    if (g.strikes.length === 0) return;
    for (const s of g.strikes) {
      s.age += dt;
      if (s.kind === "orbital" && s.tick === 0 && s.age >= SUPER.orbitalDelay) {
        s.tick = 1;
        orbitalImpact(g, s);
      } else if (s.kind === "swarm") {
        s.tick -= dt;
        if (s.tick <= 0) {
          s.tick += 0.5;
          swarmBite(g, s);
        }
      }
    }
    g.strikes = g.strikes.filter((s) => s.age < s.life);
  }
  function orbitalImpact(g, s) {
    const r = SUPER.orbitalRadius * TILE;
    for (const u of [...g.units]) {
      const d = Math.hypot(u.x - s.x, u.y - s.y);
      if (d <= r) damage(g, u.id, SUPER.orbitalDamage * (1 - 0.6 * (d / r)), void 0, s.owner);
    }
    for (const b of [...g.buildings]) {
      const cx = (b.tx + b.w / 2) * TILE;
      const cy = (b.ty + b.h / 2) * TILE;
      const d = Math.max(0, Math.hypot(cx - s.x, cy - s.y) - Math.min(b.w, b.h) * TILE / 2);
      if (d <= r) damage(g, b.id, SUPER.orbitalDamage * 1.2 * (1 - 0.6 * (d / r)), void 0, s.owner);
    }
    emit(g, { kind: "explode", big: true, x: s.x, y: s.y });
    for (let k = 0; k < 6; k++) {
      const a = k / 6 * Math.PI * 2;
      g.effects.push({ kind: "bigBoom", x: s.x + Math.cos(a) * r * 0.45, y: s.y + Math.sin(a) * r * 0.45, x2: s.x, y2: s.y, age: 0, life: 0.9, size: 1.4 });
    }
    g.effects.push({ kind: "bigBoom", x: s.x, y: s.y, x2: s.x, y2: s.y, age: 0, life: 1.1, size: 2.4 });
    g.effects.push({ kind: "scorch", x: s.x, y: s.y, x2: s.x, y2: s.y, age: 0, life: 90, size: 3 });
    g.effects.push({ kind: "shake", x: s.x, y: s.y, x2: s.x, y2: s.y, age: 0, life: 0.8, size: 2.5 });
  }
  function swarmBite(g, s) {
    const r = SUPER.swarmRadius * TILE;
    let stripped = 0;
    for (const u of [...g.units]) {
      if (!hostile(g, u.owner, s.owner) || UNIT_STATS[u.kind].armor === "infantry" || isAir(u.kind)) continue;
      if (Math.hypot(u.x - s.x, u.y - s.y) > r) continue;
      const dealt = Math.min(u.hp, SUPER.swarmBite);
      stripped += dealt;
      damage(g, u.id, SUPER.swarmBite, void 0, s.owner);
    }
    for (const b of [...g.buildings]) {
      if (!hostile(g, b.owner, s.owner)) continue;
      const cx = (b.tx + b.w / 2) * TILE;
      const cy = (b.ty + b.h / 2) * TILE;
      if (Math.hypot(cx - s.x, cy - s.y) > r + Math.min(b.w, b.h) * TILE / 2) continue;
      const bite = SUPER.swarmBite * 1.5;
      const dealt = Math.min(b.hp, bite);
      stripped += dealt * (BUILDING_STATS[b.kind].cost / Math.max(1, BUILDING_STATS[b.kind].maxHp));
      damage(g, b.id, bite, void 0, s.owner);
    }
    if (stripped > 0) walletOf(g, s.owner).credits += stripped * SUPER.swarmPay;
  }
  function bestTarget(g, me) {
    let best = null;
    let bestScore = 0;
    const targets = g.buildings.filter((b) => hostile(g, b.owner, me) && b.kind !== "wall" && b.kind !== "gate");
    for (const b of targets) {
      const cx = b.tx + b.w / 2;
      const cy = b.ty + b.h / 2;
      let score = 0;
      for (const o of targets) if (Math.hypot(o.tx + o.w / 2 - cx, o.ty + o.h / 2 - cy) <= SUPER.orbitalRadius + 1) score += BUILDING_STATS[o.kind].cost + 200;
      if (score > bestScore) {
        bestScore = score;
        best = { x: Math.floor(cx), y: Math.floor(cy) };
      }
    }
    return best;
  }

  // src/ai.ts
  var superFor = (faction) => Object.keys(SUPERWEAPONS).find((k) => BUILDING_STATS[k].faction === faction) ?? null;
  var AI_LEVELS = {
    easy: { startCredits: 1500, trickle: 1, buildSpeed: 0.7, firstWave: 330, waveGap: 210, waveStart: 3, waveGrow: 1, maxWave: 8, counter: 0, raidGap: 0, retreat: 0, flank: 0 },
    normal: { startCredits: 2500, trickle: 3, buildSpeed: 1, firstWave: 240, waveGap: 160, waveStart: 4, waveGrow: 2, maxWave: 12, counter: 1, raidGap: 140, retreat: 0.25, flank: 1 },
    hard: { startCredits: 4e3, trickle: 6, buildSpeed: 1.3, firstWave: 180, waveGap: 120, waveStart: 6, waveGrow: 2, maxWave: 16, counter: 1, raidGap: 80, retreat: 0.35, flank: 1 }
  };
  var RAID_SIZE = 3;
  var FLANK_MIN_WAVE = 6;
  var FLANK_SWING = 14;
  var MENDED = 0.8;
  var MEND_TIMEOUT = 45;
  var THINK_INTERVAL = 1;
  var WAVE_PATIENCE = 90;
  var MAX_TURRETS = 3;
  var MAX_HARVESTERS = 6;
  var HARVESTERS_PER_DOCK = 2;
  var MAX_ARMY = 24;
  var AIR_WING = 4;
  function createAiState(difficulty) {
    const level = AI_LEVELS[difficulty];
    return {
      difficulty,
      credits: level.startCredits,
      cores: 0,
      structure: null,
      lines: {
        barracks: { current: null, queue: [] },
        lightFactory: { current: null, queue: [] },
        heavyFactory: { current: null, queue: [] },
        airfield: { current: null, queue: [] }
      },
      think: 0,
      nextWave: level.firstWave,
      waveSize: level.waveStart,
      waves: 0,
      army: [],
      raiders: [],
      skipUntil: {},
      builds: true,
      raid: [],
      nextRaid: level.firstWave + level.raidGap,
      mending: {},
      deployers: [],
      flank: null
    };
  }
  var aiOf = (g, me) => g.ais[me];
  var count = (g, kind, me) => g.buildings.filter((b) => b.owner === me && b.kind === kind).length;
  var alive = (g, ids) => ids.map((id) => g.units.find((u) => u.id === id)).filter((u) => !!u);
  function myYard(g, me) {
    return g.buildings.find((b) => b.owner === me && b.kind === "yard");
  }
  function chooseRival(g, me) {
    const home = g.startOf[me];
    let best = null;
    let bestScore = Infinity;
    for (const s of g.sides) {
      if (!hostile(g, s, me)) continue;
      if (g.sides.length > 2 && !g.buildings.some((b) => b.owner === s)) continue;
      const p = g.startOf[s];
      const army = g.units.filter((u) => u.owner === s && u.kind !== "harvester").length;
      const score = Math.hypot(p.x - home.x, p.y - home.y) * (1 + army / 20);
      if (score < bestScore) {
        best = s;
        bestScore = score;
      }
    }
    return best;
  }
  function enemyHome(g, me) {
    const rival = chooseRival(g, me);
    return rival === null ? g.startOf[me] : g.startOf[rival];
  }
  function rallyPoint(g, me = ENEMY) {
    const e = g.startOf[me];
    const p = enemyHome(g, me);
    const d = Math.hypot(p.x - e.x, p.y - e.y) || 1;
    const target = { x: Math.round(e.x + (p.x - e.x) / d * 6), y: Math.round(e.y + (p.y - e.y) / d * 6) };
    return nearestPassable(g.map, target) ?? e;
  }
  function chooseStructure(g, me = ENEMY) {
    const ai = aiOf(g, me);
    const power2 = powerInfo(g, me);
    const headroom = power2.produced - power2.used;
    const full = ai.credits > storageOf(g, me) * 0.75;
    const wants = [
      [full && count(g, "refinery", me) > 0, "silo"],
      [headroom < 20, "power"],
      [count(g, "refinery", me) === 0, "refinery"],
      [!hasBuilding(g, "barracks", me), "barracks"],
      [!hasBuilding(g, "lightFactory", me), "lightFactory"],
      [!hasBuilding(g, "heavyFactory", me), "heavyFactory"],
      [count(g, "refinery", me) < 2 && g.time > 300, "refinery"],
      [count(g, "turret", me) < MAX_TURRETS && g.time > 200, "turret"],
      [!hasBuilding(g, "radar", me) && g.time > 260, "radar"],
      [count(g, "rocketTurret", me) < 2 && g.time > 420, "rocketTurret"],
      // The superweapon, late and only with money to spare (Normal and Hard).
      [AI_LEVELS[ai.difficulty].raidGap > 0 && g.time > 900 && ai.credits > 3500 && !g.buildings.some((b) => b.owner === me && isSuper(b.kind)) && !!superFor(g.factions[me]), superFor(g.factions[me]) ?? "power"],
      // Air: an airfield on Normal and Hard, and flak once the enemy flies.
      [AI_LEVELS[ai.difficulty].raidGap > 0 && !hasBuilding(g, "airfield", me) && g.time > 480, "airfield"],
      [enemyAir(g, me) > 0 && count(g, "flakTurret", me) < Math.min(3, 1 + Math.floor(enemyAir(g, me) / 2)), "flakTurret"],
      [!hasBuilding(g, "techCenter", me) && g.time > 540, "techCenter"],
      // The faction economies, then expansion to a field of its own.
      [canBuild(g.factions[me], "seedSpire") && count(g, "seedSpire", me) < 2 && g.time > 200, "seedSpire"],
      // Somewhere for pulled-back vehicles to get patched up.
      [AI_LEVELS[ai.difficulty].retreat > 0 && !hasBuilding(g, "repairPad", me) && g.time > 400, "repairPad"],
      [headroom < 50, "power"]
    ];
    for (const [want, kind] of wants) {
      const skipped = (ai.skipUntil[kind] ?? 0) > g.time;
      if (want && !skipped && !missingFor(g, kind, me)) return kind;
    }
    return null;
  }
  function resourceRoom(g, x, y) {
    let n = 0;
    for (let dy = -5; dy <= 5; dy++) for (let dx = -5; dx <= 5; dx++) if (inBounds(g.map, x + dx, y + dy) && g.map.terrain[idx(g.map, x + dx, y + dy)] === 0) n++;
    return n;
  }
  function findFieldSpot(g, kind, me) {
    const docks = g.buildings.filter((b) => b.owner === me && isDock(b.kind));
    const home = g.startOf[me];
    const outpost = kind === "outpost";
    const fields = g.map.fields.filter((f) => {
      const nearDock = docks.some((d) => Math.hypot(d.tx - f.x, d.ty - f.y) < (outpost ? 16 : 13));
      return outpost ? !nearDock : nearDock;
    }).sort((a, b) => Math.hypot(a.x - home.x, a.y - home.y) - Math.hypot(b.x - home.x, b.y - home.y));
    for (const f of fields.slice(0, 6)) {
      let best = null;
      for (let y = f.y - 7; y <= f.y + 7; y++) {
        for (let x = f.x - 7; x <= f.x + 7; x++) {
          if (!canPlace(g, kind, x, y, me)) continue;
          const score = outpost ? Math.hypot(x - f.x, y - f.y) : -resourceNear(g, x + 1, y + 1, 3);
          if (!best || score < best.score) best = { x, y, score };
        }
      }
      if (best) return { x: best.x, y: best.y };
    }
    return null;
  }
  function enemyAir(g, me) {
    return g.units.filter((u) => hostile(g, u.owner, me) && isAir(u.kind)).length;
  }
  function hasClearance(g, tx, ty, w, h) {
    for (let y = ty - 1; y <= ty + h; y++) {
      for (let x = tx - 1; x <= tx + w; x++) {
        if (inBounds(g.map, x, y) && g.map.blocked[idx(g.map, x, y)]) return false;
      }
    }
    return true;
  }
  function findSpot(g, kind, me = ENEMY) {
    if (isRemote(kind)) return findFieldSpot(g, kind, me);
    const yard = myYard(g, me) ?? g.buildings.find((b) => b.owner === me);
    if (!yard) return null;
    const { w, h } = BUILDING_STATS[kind];
    const cx = yard.tx + 1;
    const cy = yard.ty + 1;
    const foe = enemyHome(g, me);
    const candidates = [];
    for (let y = cy - 14; y <= cy + 14; y++) {
      for (let x = cx - 14; x <= cx + 14; x++) {
        if (!canPlace(g, kind, x, y, me)) continue;
        if (kind === "refinery" && !isPassable(g.map, x + 1, y + h)) continue;
        const fromYard = Math.hypot(x - cx, y - cy);
        const toEnemy = Math.hypot(x - foe.x, y - foe.y);
        const cramped = hasClearance(g, x, y, w, h) ? 0 : 100;
        const room = kind === "seedSpire" ? -resourceRoom(g, x, y) * 0.4 : 0;
        candidates.push({ x, y, score: cramped + room + (kind === "turret" ? toEnemy + fromYard * 0.5 : fromYard) });
      }
    }
    candidates.sort((a, b) => a.score - b.score);
    return candidates[0] ?? null;
  }
  function chooseUnit(g, producer, me) {
    const role = chooseRole(g, producer, me);
    return factionUnit(g.factions[me], role);
  }
  function enemyMix(g, me) {
    let foot = 0;
    let armour = 0;
    for (const u of g.units) {
      if (!hostile(g, u.owner, me) || u.kind === "harvester" || !UNIT_STATS[u.kind].weapon) continue;
      if (UNIT_STATS[u.kind].armor === "infantry") foot++;
      else armour++;
    }
    if (foot + armour < 4) return "mixed";
    if (foot >= (foot + armour) * 0.65) return "infantry";
    if (armour >= (foot + armour) * 0.65) return "vehicles";
    return "mixed";
  }
  function chooseRole(g, producer, me) {
    const F = (k) => factionUnit(g.factions[me], k);
    const mine = (k) => g.units.filter((u) => u.owner === me && u.kind === F(k)).length;
    const ai = aiOf(g, me);
    const mix = ai.waves > 0;
    const facing = AI_LEVELS[ai.difficulty].counter ? enemyMix(g, me) : "mixed";
    if (producer === "barracks") {
      const affordable = (k) => ai.cores >= coreCost(F(k));
      if (!missingFor(g, F("vance"), me) && heroCount(g, me) === 0 && affordable("vance")) return "vance";
      if (mix && mine("medic") * 4 < mine("infantry")) return "medic";
      const snipers = facing === "infantry" ? 2 : facing === "vehicles" ? 99 : 3;
      if (mix && !missingFor(g, F("marksman"), me) && mine("marksman") * snipers < mine("infantry")) return "marksman";
      if (facing === "vehicles") return mine("rocketInfantry") <= mine("infantry") * 2 ? "rocketInfantry" : "infantry";
      return mix && mine("rocketInfantry") * 2 < mine("infantry") ? "rocketInfantry" : "infantry";
    }
    if (producer === "airfield") {
      if (!missingFor(g, "bomber", me) && mine("bomber") * 3 < mine("gunship")) return "bomber";
      return "gunship";
    }
    if (producer === "lightFactory") {
      if (facing === "infantry") return mine("raider") < mine("quad") ? "raider" : "quad";
      return mix && mine("raider") * 2 < mine("quad") ? "raider" : "quad";
    }
    const coreMiner = hasBuilding(g, "techCenter", me) || g.time > 420 ? 1 : 0;
    const docks = count(g, "refinery", me) + count(g, "outpost", me);
    if (mine("harvester") < Math.min(MAX_HARVESTERS + count(g, "outpost", me), docks * HARVESTERS_PER_DOCK + coreMiner)) return "harvester";
    const placed = (b) => count(g, b, me);
    if (canTrain(g.factions[me], "drillRig") && placed("deepDrill") + mine("drillRig") < 1 && g.time > 360) return "drillRig";
    if (placed("outpost") + mine("outpostTruck") < 1 && g.time > 360 && ai.credits > 2200) return "outpostTruck";
    if (!missingFor(g, F("bastion"), me) && mine("bastion") * 2 <= mine("tank") && ai.cores >= coreCost(F("bastion"))) return "bastion";
    const guns = facing === "infantry" ? 1 : facing === "vehicles" ? 4 : 2;
    if (!missingFor(g, F("artillery"), me) && mine("artillery") * guns < mine("tank")) return "artillery";
    return "tank";
  }
  function updateAi(g, dt) {
    if (g.result) return;
    for (const me of g.sides) {
      if (g.humans.includes(me) || !g.ais[me]) continue;
      updateSide(g, me, dt);
    }
  }
  function updateSide(g, me, dt) {
    const ai = aiOf(g, me);
    const level = AI_LEVELS[ai.difficulty];
    ai.credits += level.trickle * dt;
    const factor = (powerInfo(g, me).low ? LOW_POWER_FACTOR : 1) * level.buildSpeed * bonus(g, me, "buildSpeed");
    const job = ai.structure;
    if (job && myYard(g, me) && advance(ai, job, BUILDING_STATS[job.kind].cost, dt, factor)) {
      const spot = findSpot(g, job.kind, me);
      if (spot) {
        const b = placeBuilding(g, job.kind, spot.x, spot.y, me);
        clearUnder(g, b);
        if (isDock(b.kind)) spawnFreeHarvester(g, b);
      } else {
        ai.credits += job.spent;
        ai.skipUntil[job.kind] = g.time + 60;
      }
      ai.structure = null;
    }
    for (const producer of Object.keys(ai.lines)) {
      const line = ai.lines[producer];
      const factory = g.buildings.find((b) => b.owner === me && b.kind === producer);
      if (!factory || !line.current) continue;
      if (advance(ai, line.current, unitCost(g.factions[me], line.current.kind), dt, factor)) {
        const t = exitTile(g, factory);
        const u = spawnUnit(g, line.current.kind, t.x, t.y, me);
        if (u.kind === "harvester") autoHarvest(g, u, t);
        else if (DEPLOYS[u.kind]) ai.deployers.push({ id: u.id, spot: null });
        else {
          ai.army.push(u.id);
          commandMove(g, [u], rallyPoint(g, me));
        }
        line.current = null;
      }
    }
    ai.think -= dt;
    if (ai.think > 0) return;
    ai.think = THINK_INTERVAL;
    think(g, me);
  }
  function think(g, me) {
    const ai = aiOf(g, me);
    const level = AI_LEVELS[ai.difficulty];
    if (ai.builds && !ai.structure && myYard(g, me)) {
      const kind = chooseStructure(g, me);
      if (kind) ai.structure = { kind, spent: 0, done: false };
    }
    ai.army = alive(g, ai.army).map((u) => u.id);
    ai.raiders = alive(g, ai.raiders).map((u) => u.id);
    const reserve = ai.structure ? Math.min(600, BUILDING_STATS[ai.structure.kind].cost - ai.structure.spent) : 0;
    const lines2 = Object.values(ai.lines);
    const inProduction = lines2.filter((l) => l.current && l.current.kind !== "harvester" && !DEPLOYS[l.current.kind]).length;
    let wanted = ai.waveSize - ai.army.length - inProduction;
    const infantry = () => alive(g, ai.army).filter((u) => u.kind === "infantry" || u.kind === "rocketInfantry").length + (ai.lines.barracks.current ? 1 : 0);
    for (const producer of ["airfield", "heavyFactory", "lightFactory", "barracks"]) {
      const line = ai.lines[producer];
      if (line.current || !hasBuilding(g, producer, me)) continue;
      const kind = chooseUnit(g, producer, me);
      const flyer = isAir(kind);
      if (flyer && g.units.filter((u) => u.owner === me && isAir(u.kind)).length >= AIR_WING) continue;
      const fighter = kind !== "harvester" && !DEPLOYS[kind] && !flyer;
      if (fighter) {
        if (wanted <= 0 || ai.army.length + ai.raiders.length >= MAX_ARMY) continue;
        const footShare = kind === factionUnit(g.factions[me], "rocketInfantry") && level.counter && enemyMix(g, me) === "vehicles" ? 0.7 : 0.5;
        if (UNIT_STATS[kind].armor === "infantry" && infantry() >= Math.ceil(ai.waveSize * footShare)) continue;
      }
      if (ai.credits < reserve + unitCost(g.factions[me], kind) * 0.25) continue;
      if (ai.cores < coreCost(kind)) continue;
      ai.cores -= coreCost(kind);
      line.current = { kind, spent: 0 };
      if (fighter) wanted--;
    }
    const army = alive(g, ai.army);
    const due = g.time >= ai.nextWave;
    const overdue = g.time >= ai.nextWave + WAVE_PATIENCE;
    if (due && (army.length >= ai.waveSize || overdue && army.length >= 2)) {
      const home = g.startOf[me];
      const target = nearestEnemyBuilding2(g, me, home.x * TILE, home.y * TILE, chooseRival(g, me));
      if (target) {
        const flankers = level.flank && army.length >= FLANK_MIN_WAVE && !ai.flank ? pickFlankers(army) : [];
        const via = flankers.length ? flankPoint(g, home, target.at, ai.waves) : null;
        const main = army.filter((u) => !flankers.includes(u));
        commandAttackMove(g, main, target.at);
        ai.raiders.push(...main.map((u) => u.id));
        if (via) {
          commandAttackMove(g, flankers, via);
          ai.flank = { ids: flankers.map((u) => u.id), via, target: target.at, since: g.time };
        }
        ai.army = [];
        ai.waves++;
        ai.waveSize = Math.min(level.maxWave, ai.waveSize + level.waveGrow);
        ai.nextWave = g.time + level.waveGap;
        if (target.owner === g.local) {
          notify(g, "Enemy attack incoming!");
          emit(g, { kind: "alarm" });
          announce(g, "enemy_approaching");
        } else if (!hostile(g, me, g.local)) notify(g, "Our ally is launching an attack.");
      }
    }
    defendBase(g, me);
    mineCores(g, me);
    for (const b of g.buildings) {
      if (b.owner !== me || !isSuper(b.kind) || b.cooldown > 0) continue;
      const at = bestTarget(g, me);
      if (at) fireSuperweapon(g, b, at.x, at.y);
    }
    driveDeployers(g, me);
    if (level.retreat > 0) pullBackWounded(g, me);
    if (level.raidGap > 0) runRaids(g, me);
    runFlank(g, me);
    for (const u of alive(g, ai.raiders)) {
      if (u.order !== "idle" || u.targetId !== null || u.path.length > 0) continue;
      const target = nearestEnemyBuilding2(g, me, u.x, u.y);
      if (target) commandAttackMove(g, [u], target.at);
    }
  }
  function driveDeployers(g, me) {
    const ai = aiOf(g, me);
    ai.deployers = ai.deployers.filter((d) => g.units.some((u) => u.id === d.id));
    for (const d of ai.deployers) {
      const u = g.units.find((x) => x.id === d.id);
      const kind = DEPLOYS[u.kind];
      d.spot ??= findFieldSpot(g, kind, me);
      if (!d.spot) continue;
      const here = { x: Math.floor(u.x / TILE), y: Math.floor(u.y / TILE) };
      if (Math.hypot(here.x - d.spot.x, here.y - d.spot.y) <= 1.5 && u.path.length === 0) {
        if (deployUnit(g, u)) d.spot = null;
      } else if (u.path.length === 0) commandMove(g, [u], d.spot);
    }
    ai.deployers = ai.deployers.filter((d) => g.units.some((u) => u.id === d.id));
  }
  var CORES_WANTED = 50;
  var CORES_PLENTY = 90;
  function mineCores(g, me) {
    const ai = aiOf(g, me);
    const harvesters = g.units.filter((u) => u.owner === me && u.kind === "harvester");
    const miner = harvesters.find((u) => u.load === "cores");
    const useful = hasBuilding(g, "techCenter", me) || g.time > 420;
    if (miner && (ai.cores >= CORES_PLENTY || !useful)) {
      miner.load = "crystal";
      if (miner.cargo === 0) autoHarvest(g, miner, { x: Math.floor(miner.x / TILE), y: Math.floor(miner.y / TILE) });
      return;
    }
    if (miner || !useful || ai.cores >= CORES_WANTED || harvesters.length < 2) return;
    const home = g.startOf[me];
    const deposit = findNearestSpice(g.map, { x: home.x + 1, y: home.y + 1 }, 80, /* @__PURE__ */ new Set(), true);
    if (!deposit) return;
    const pick2 = [...harvesters].sort((a, b) => a.cargo - b.cargo || a.id - b.id)[0];
    commandHarvest(g, [pick2], deposit);
  }
  var isFast = (u) => UNIT_STATS[u.kind].armor === "light" && UNIT_STATS[u.kind].speed >= 3.5 && !!UNIT_STATS[u.kind].weapon;
  var health = (u) => u.hp / UNIT_STATS[u.kind].maxHp;
  function pickFlankers(army) {
    const n = Math.floor(army.length / 3);
    return [...army].sort((a, b) => UNIT_STATS[b.kind].speed - UNIT_STATS[a.kind].speed || a.id - b.id).slice(0, n);
  }
  function flankPoint(g, home, target, wave) {
    const dx = target.x - home.x;
    const dy = target.y - home.y;
    const d = Math.hypot(dx, dy) || 1;
    const side = wave % 2 === 0 ? 1 : -1;
    const p = {
      x: Math.round(home.x + dx * 0.66 + -dy / d * FLANK_SWING * side),
      y: Math.round(home.y + dy * 0.66 + dx / d * FLANK_SWING * side)
    };
    const clamped = { x: Math.max(2, Math.min(g.map.w - 3, p.x)), y: Math.max(2, Math.min(g.map.h - 3, p.y)) };
    return nearestPassable(g.map, clamped) ?? target;
  }
  function runFlank(g, me) {
    const ai = aiOf(g, me);
    const f = ai.flank;
    if (!f) return;
    const units = alive(g, f.ids);
    if (units.length === 0) {
      ai.flank = null;
      return;
    }
    const there = units.filter((u) => Math.hypot(u.x / TILE - f.via.x, u.y / TILE - f.via.y) < 5).length;
    if (there * 2 >= units.length || g.time - f.since > 50) {
      commandAttackMove(g, units, f.target);
      ai.raiders.push(...units.map((u) => u.id));
      ai.flank = null;
    }
  }
  function runRaids(g, me) {
    const ai = aiOf(g, me);
    const level = AI_LEVELS[ai.difficulty];
    ai.raid = alive(g, ai.raid).map((u) => u.id);
    const raiders = alive(g, ai.raid);
    const prey = (u) => {
      let best = null;
      let bestD = Infinity;
      for (const h of g.units) {
        if (h.kind !== "harvester" || !hostile(g, h.owner, me)) continue;
        const d = Math.hypot(h.x - u.x, h.y - u.y);
        if (d < bestD) {
          best = h;
          bestD = d;
        }
      }
      return best;
    };
    for (const u of raiders) {
      if (health(u) < 0.45) {
        ai.raid = ai.raid.filter((id) => id !== u.id);
        ai.mending[u.id] = g.time;
        goMend(g, me, u);
        continue;
      }
      if (u.targetId !== null && g.units.some((h2) => h2.id === u.targetId)) continue;
      const h = prey(u);
      if (h) commandAttack(g, [u], h.id);
      else {
        ai.raid = ai.raid.filter((id) => id !== u.id);
        ai.army.push(u.id);
        commandMove(g, [u], rallyPoint(g, me));
      }
    }
    if (g.time < ai.nextRaid || raiders.length > 0) return;
    ai.nextRaid = g.time + level.raidGap;
    const fast = alive(g, ai.army).filter((u) => isFast(u) && health(u) > 0.7 && !(u.id in ai.mending));
    if (fast.length < 2) return;
    const party = fast.slice(0, RAID_SIZE);
    const target = prey(party[0]);
    if (!target) return;
    commandAttack(g, party, target.id);
    ai.raid.push(...party.map((u) => u.id));
    ai.army = ai.army.filter((id) => !party.some((u) => u.id === id));
  }
  function goMend(g, me, u) {
    const pad = UNIT_STATS[u.kind].armor !== "infantry" ? g.buildings.find((b) => b.owner === me && b.kind === "repairPad") : void 0;
    commandMove(g, [u], pad ? { x: pad.tx, y: pad.ty } : rallyPoint(g, me));
  }
  function pullBackWounded(g, me) {
    const ai = aiOf(g, me);
    const level = AI_LEVELS[ai.difficulty];
    for (const u of alive(g, ai.raiders)) {
      if (health(u) >= level.retreat || g.time - u.hitAt > 3) continue;
      if (UNIT_STATS[u.kind].armor === "infantry" && UNIT_STATS[u.kind].maxHp < 100) continue;
      ai.raiders = ai.raiders.filter((id) => id !== u.id);
      ai.mending[u.id] = g.time;
      goMend(g, me, u);
    }
    for (const key of Object.keys(ai.mending)) {
      const id = Number(key);
      const u = g.units.find((x) => x.id === id);
      if (!u) {
        delete ai.mending[id];
        continue;
      }
      if (health(u) >= MENDED || g.time - ai.mending[id] > MEND_TIMEOUT) {
        delete ai.mending[id];
        if (!ai.army.includes(id)) ai.army.push(id);
      }
    }
  }
  var DEFEND_RADIUS = 10;
  function defendBase(g, me) {
    const ai = aiOf(g, me);
    const base = g.buildings.filter((b) => b.owner === me);
    let intruder = null;
    let best = Infinity;
    for (const u of g.units) {
      if (!hostile(g, u.owner, me)) continue;
      for (const b of base) {
        const d = Math.hypot(u.x / TILE - (b.tx + b.w / 2), u.y / TILE - (b.ty + b.h / 2));
        if (d < DEFEND_RADIUS && d < best) {
          best = d;
          intruder = u;
        }
      }
    }
    const army = alive(g, ai.army).filter((u) => !(u.id in ai.mending));
    if (intruder) {
      const spot = { x: Math.floor(intruder.x / TILE), y: Math.floor(intruder.y / TILE) };
      for (const u of army) {
        const goal = u.attackGoal;
        const busy = u.targetId !== null || u.order === "attackMove" && goal && Math.hypot(goal.x - spot.x, goal.y - spot.y) < 4;
        if (!busy) commandAttackMove(g, [u], spot);
      }
      return;
    }
    const rally = rallyPoint(g, me);
    for (const u of army) {
      if (u.order === "idle" && u.targetId === null && u.path.length === 0 && Math.hypot(u.x / TILE - rally.x, u.y / TILE - rally.y) > 6) {
        commandMove(g, [u], rally);
      }
    }
  }
  function nearestEnemyBuilding2(g, me, x, y, only = null) {
    let best = null;
    let bestD = Infinity;
    for (const b of g.buildings) {
      if (!hostile(g, b.owner, me) || only !== null && b.owner !== only || isBarrier(b.kind)) continue;
      const c = { x: b.tx + Math.floor(b.w / 2), y: b.ty + b.h };
      const d = Math.hypot(c.x * TILE - x, c.y * TILE - y);
      if (d < bestD) {
        best = { at: c, owner: b.owner };
        bestD = d;
      }
    }
    return best;
  }

  // src/missions.ts
  var CAPTURE_TIME = 8;
  var has = (g, owner, kind) => g.buildings.some((b) => b.owner === owner && b.kind === kind);
  var playerHarvesters = (g) => g.units.filter((u) => u.owner === PLAYER && u.kind === "harvester").length;
  var mins = (n) => n * 60;
  function stripPlayerBase(g) {
    for (const b of g.buildings.filter((b2) => b2.owner === PLAYER)) {
      for (let y = b.ty; y < b.ty + b.h; y++) for (let x = b.tx; x < b.tx + b.w; x++) g.map.blocked[idx(g.map, x, y)] = 0;
    }
    g.buildings = g.buildings.filter((b) => b.owner !== PLAYER);
    g.units = g.units.filter((u) => u.owner !== PLAYER);
  }
  function openSpot(g, near, size) {
    for (let r = 0; r < 30; r++) {
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
          const x = near.x + dx;
          const y = near.y + dy;
          let ok = true;
          for (let yy = y; ok && yy < y + size; yy++) for (let xx = x; ok && xx < x + size; xx++) ok = isPassable(g.map, xx, yy) && g.map.blocked[idx(g.map, xx, yy)] === 0;
          if (ok) return { x, y };
        }
      }
    }
    return near;
  }
  function spawnGroup(g, owner, kinds, near) {
    formationTiles(g.map, near, kinds.length).forEach((t, i) => spawnUnit(g, kinds[i], t.x, t.y, owner));
  }
  function addZone(g, x, y, r, label, capturable = true) {
    const z = { x, y, r, label, owner: null, claimant: null, hold: 0, capturable };
    g.mission.zones.push(z);
    return z;
  }
  function sidesIn(g, z) {
    const out = /* @__PURE__ */ new Set();
    for (const u of g.units) {
      if (u.kind === "harvester") continue;
      if (Math.hypot(u.x / TILE - (z.x + 0.5), u.y / TILE - (z.y + 0.5)) <= z.r) out.add(u.owner);
    }
    return [...out];
  }
  function updateZones(g, zones, dt) {
    for (const z of zones) {
      if (!z.capturable) continue;
      const here = sidesIn(g, z);
      const teams = new Set(here.map((s) => g.teams[s]));
      if (teams.size !== 1) continue;
      const side = here.includes(PLAYER) ? PLAYER : here[0];
      if (z.owner !== null && g.teams[z.owner] === g.teams[side]) {
        z.claimant = null;
        z.hold = 0;
        continue;
      }
      if (z.claimant === null || g.teams[z.claimant] !== g.teams[side]) {
        z.claimant = side;
        z.hold = 0;
      }
      z.hold += dt;
      if (z.hold >= CAPTURE_TIME) {
        z.owner = side;
        z.claimant = null;
        z.hold = 0;
        if (side === g.local) notify(g, `${z.label} captured!`);
        else if (z.owner !== null && hostile(g, side, g.local)) notify(g, `The enemy has taken ${z.label}!`);
      }
    }
  }
  var clockText = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
  var convoys = /* @__PURE__ */ new WeakMap();
  var relays = /* @__PURE__ */ new WeakMap();
  var drill = /* @__PURE__ */ new WeakMap();
  var combatUnits = (g) => g.units.filter((u) => u.owner === PLAYER && u.kind !== "harvester");
  var TUTORIAL = {
    id: "training",
    title: "Basic Training",
    briefing: [
      "Commander, before the real thing: a short drill on a quiet stretch of the plateau. Nobody's shooting at us today.",
      "Follow the steps in the top-left corner. Each one waits until you've done it, and the button you need will glow."
    ],
    seed: 5,
    faction: "concord",
    enemyFaction: "reclaimers",
    difficulty: "easy",
    hazards: false,
    fog: false,
    enemyBuilds: false,
    enemyAttacks: false,
    sequential: true,
    setup(g) {
      const quadStarts = new Map(g.units.filter((u) => u.owner === PLAYER && u.kind === "quad").map((u) => [u.id, { x: u.x, y: u.y }]));
      const near = { x: Math.round((g.map.start.x + g.map.w / 2) / 2) + 4, y: Math.round((g.map.start.y + g.map.h / 2) / 2) };
      const before = new Set(g.units.map((u) => u.id));
      spawnGroup(g, ENEMY, ["scrapper", "scrapper", "scrapper"], openSpot(g, near, 2));
      const scouts = g.units.filter((u) => !before.has(u.id)).map((u) => u.id);
      drill.set(g, { quadStarts, scouts });
    },
    objectives: [
      {
        text: "Select your Quads",
        hint: "Drag a box around the three Quads next to your base. Clicking one selects just that one; its ID card appears bottom-left.",
        done: (g) => [...g.selection].some((id) => g.units.find((u) => u.id === id)?.kind === "quad")
      },
      {
        text: "Move them out",
        hint: "Right-click open ground to send them there. Move the view with WASD, the arrow keys, or by pushing the mouse against the screen edge.",
        done: (g) => {
          const d = drill.get(g);
          return !!d && g.units.some((u) => {
            const s = d.quadStarts.get(u.id);
            return !!s && Math.hypot(u.x - s.x, u.y - s.y) > 4 * 32;
          });
        }
      },
      {
        text: "Build a Barracks",
        hint: "Click Barracks in the sidebar (or press Y). When it reads READY, click it again and pick a spot near your base \u2014 green squares mean the ground is clear.",
        point: "Barracks",
        done: (g) => has(g, PLAYER, "barracks")
      },
      {
        text: "Train three Infantry",
        hint: "Click your new Barracks and its troops appear in the sidebar. Click Infantry three times \u2014 Shift-click queues five at once.",
        point: "Infantry",
        done: (g) => g.units.filter((u) => u.owner === PLAYER && u.kind === "infantry").length >= 3
      },
      {
        text: "Earn 600 credits from crystal",
        hint: "Your Harvester mines the glowing crystal by itself and unloads at the Refinery; watch Credits climb in the top-right. More Harvesters mean more money.",
        done: (g) => g.stats.creditsHarvested >= 600
      },
      {
        text: "Select your whole army",
        hint: "Press E to select every fighting unit (twice to jump the camera to them). Ctrl + 1\u20139 saves a group you can call back with that number.",
        done: (g) => {
          const army = combatUnits(g);
          return army.length >= 4 && army.every((u) => g.selection.has(u.id));
        }
      },
      {
        text: "Destroy the Reclaimer scouts",
        hint: "They're dug in south-east of your base, out on the plain. Right-click an enemy to attack it, or Ctrl + right-click the ground to attack-move: your units fight whatever they meet on the way.",
        done: (g) => {
          const d = drill.get(g);
          return !!d && d.scouts.every((id) => !g.units.some((u) => u.id === id));
        }
      }
    ]
  };
  var MISSIONS = [
    {
      id: "landfall",
      title: "1. Landfall",
      briefing: [
        "Commander, welcome to Vitrea. The colony company left this plateau in a hurry \u2014 the yard, a power plant and a refinery are still standing.",
        "Get the colony working again: raise a Barracks, put a Radar Outpost up so we can see the land, and get the crystal flowing. Reclaimer scouts are watching from the far side of the map, but they won't move on us yet."
      ],
      scene: [
        { who: "vance", side: 0, name: "Captain Vance", text: "So this is what the company left us. A yard, a power plant, and a lot of glass." },
        { who: "infantry", side: 0, name: "Lt. Hale", text: "Refinery's still warm, Captain. Somebody was running it until a week ago." },
        { who: "vance", side: 0, name: "Captain Vance", text: "Then we run it now. Get the crystal moving, Lieutenant. Vitrea doesn't wait for anyone." }
      ],
      seed: 11,
      faction: "concord",
      enemyFaction: "reclaimers",
      difficulty: "easy",
      hazards: false,
      fog: true,
      enemyBuilds: false,
      enemyAttacks: false,
      objectives: [
        { text: "Build a Barracks", done: (g) => has(g, PLAYER, "barracks") },
        { text: "Build a Radar Outpost", done: (g) => has(g, PLAYER, "radar") },
        { text: "Harvest 4,000 credits of crystal", done: (g) => g.stats.creditsHarvested >= 4e3 }
      ]
    },
    {
      id: "storm-season",
      title: "2. Storm Season",
      briefing: [
        "The storms are coming early this year, and they're coming often. The Shardbound know it \u2014 they'll use the weather as cover to raid us.",
        "Hold out for eight minutes. Keep your harvesters out of the storms; they'll run for the refinery when one gets close, but they need somewhere safe to run to."
      ],
      scene: [
        { who: "infantry", side: 0, name: "Lt. Hale", text: "Storm front on the scope, Captain. Three of them. Four. They're early." },
        { who: "seer", side: 1, name: "The Seer", text: "The glass is singing, colonists. It always sings before it cuts." },
        { who: "vance", side: 0, name: "Captain Vance", text: "Ignore her. Bring the harvesters in when the sky turns. We hold eight minutes, then it's our season." }
      ],
      seed: 23,
      faction: "concord",
      enemyFaction: "shardbound",
      difficulty: "normal",
      hazards: true,
      fog: true,
      enemyBuilds: false,
      enemyAttacks: true,
      setup(g) {
        g.stormTimer = 45;
        g.stormGap = [35, 60];
        const e = g.map.enemyStart;
        placeBuilding(g, "refinery", e.x + 4, e.y + 4, ENEMY);
        placeBuilding(g, "lightFactory", e.x - 4, e.y + 4, ENEMY);
        g.ai.nextWave = 150;
        g.ai.credits = 2500;
      },
      objectives: [
        { text: "Survive for 8 minutes", done: (g) => g.time >= mins(8) },
        { text: "Bonus: don't lose a harvester", bonus: true, done: (g) => g.time >= mins(8) && g.stats.harvestersLost === 0 }
      ],
      // Lost only when nothing is left to rebuild the harvest with.
      fail: (g) => playerHarvesters(g) === 0 && !has(g, PLAYER, "refinery") && !has(g, PLAYER, "yard") ? "Your colony has no way left to harvest." : null
    },
    {
      id: "glass-teeth",
      title: "3. Glass Teeth",
      briefing: [
        "This time you're with the Shardbound. The Reclaimers have built a radar outpost that watches every storm route on the plain \u2014 and while it stands, they see us coming.",
        "There's no base this time: just a strike force of Prism Tanks, Skimmers and Glasswalkers. Take out the radar. Crystal will heal your units while they stand on it \u2014 use the fields."
      ],
      scene: [
        { who: "seer", side: 0, name: "The Seer", text: "The scavengers have built an eye on the plain. It watches the storm roads. It watches us." },
        { who: "glasswalker", side: 0, name: "Ione", text: "No base out here, Seer. Just us and the fields." },
        { who: "seer", side: 0, name: "The Seer", text: "The fields are enough. Stand in the crystal, and it will close your wounds. Now: put out the eye." }
      ],
      seed: 37,
      faction: "shardbound",
      enemyFaction: "reclaimers",
      difficulty: "normal",
      hazards: false,
      fog: true,
      enemyBuilds: false,
      enemyAttacks: false,
      setup(g) {
        stripPlayerBase(g);
        const s = g.map.start;
        spawnGroup(g, PLAYER, ["prismTank", "prismTank", "prismTank", "skimmer", "skimmer", "glasswalker", "glasswalker", "glasswalker", "glasswalker"], { x: s.x + 4, y: s.y + 4 });
        const spot = openSpot(g, { x: Math.round(g.map.w * 0.6), y: Math.round(g.map.h * 0.55) }, 4);
        placeBuilding(g, "radar", spot.x + 1, spot.y + 1, ENEMY);
        placeBuilding(g, "turret", spot.x, spot.y, ENEMY);
        placeBuilding(g, "turret", spot.x + 3, spot.y + 3, ENEMY);
        const guards = ["wrecker", "scrapper", "scrapper", "junker"];
        formationTiles(g.map, { x: spot.x + 1, y: spot.y + 4 }, guards.length).forEach((t, i) => {
          const u = spawnUnit(g, guards[i], t.x, t.y, ENEMY);
          u.post = t;
        });
      },
      objectives: [{ text: "Destroy the Reclaimer Radar Outpost", done: (g) => g.time > 1 && !has(g, ENEMY, "radar") }],
      fail: (g) => g.time > 1 && !g.units.some((u) => u.owner === PLAYER) ? "Your strike force has been destroyed." : null
    },
    {
      id: "salvage-rights",
      title: "4. Salvage Rights",
      briefing: [
        "Now you lead the Reclaimers. Concord thinks the colony's wreckage belongs to them. We think anything left lying on the plain belongs to whoever can carry it.",
        "Build up, and break their base. Remember: every Concord vehicle you destroy pays you salvage."
      ],
      scene: [
        { who: "rook", side: 0, name: "Boss Rook", text: "Concord says the wrecks out there are company property. The company's gone. That makes them mine." },
        { who: "mechanic", side: 0, name: "Dee", text: "Every Concord tank we pop is a week of parts, Boss." },
        { who: "rook", side: 0, name: "Boss Rook", text: "Then let's go shopping." }
      ],
      seed: 52,
      faction: "reclaimers",
      enemyFaction: "concord",
      difficulty: "easy",
      hazards: true,
      fog: true,
      enemyBuilds: true,
      enemyAttacks: true,
      objectives: [{ text: "Destroy every Concord building", done: (g) => !g.buildings.some((b) => b.owner === ENEMY) }]
    },
    {
      id: "dusk-convoy",
      title: "5. Dusk Convoy",
      briefing: [
        "Concord has found a fresh claim on the far side of the plain, and the haulers to work it are ready. Rook's Reclaimers are waiting along the road; they want the haulers more than the claim.",
        "Get them there. The convoy drives itself, but it halts whenever enemies are close: clear the road ahead and it will roll on. Two of the three haulers must reach the claim."
      ],
      scene: [
        { who: "vance", side: 0, name: "Captain Vance", text: "Three haulers, one road, and the sun going down. What could go wrong." },
        { who: "rook", side: 1, name: "Boss Rook", text: "Lovely trucks, Captain. Shame about the road. It's full of my boys." },
        { who: "infantry", side: 0, name: "Lt. Hale", text: "The drivers won't roll into gunfire, sir. We clear each stretch, they follow." }
      ],
      seed: 61,
      faction: "concord",
      enemyFaction: "reclaimers",
      difficulty: "normal",
      hazards: false,
      fog: true,
      time: "dusk",
      enemyBuilds: false,
      enemyAttacks: false,
      setup(g) {
        stripPlayerBase(g);
        const s = g.map.start;
        spawnGroup(g, PLAYER, ["tank", "tank", "quad", "quad", "quad", "infantry", "infantry", "infantry", "infantry", "rocketInfantry", "rocketInfantry", "medic"], { x: s.x + 6, y: s.y + 5 });
        const haulers = formationTiles(g.map, { x: s.x + 2, y: s.y + 3 }, 3).map((t) => spawnUnit(g, "harvester", t.x, t.y, PLAYER));
        const spot = openSpot(g, { x: Math.round(g.map.w * 0.3), y: Math.round(g.map.h * 0.85) }, 3);
        const claim = addZone(g, spot.x + 1, spot.y + 1, 3, "The new claim", false);
        convoys.set(g, { ids: haulers.map((u) => u.id), arrived: [], halted: false, via: [] });
        const mid = { x: Math.round(g.map.w * 0.42), y: Math.round(g.map.h * 0.45) };
        const road = (k) => {
          const a = { x: s.x + 3, y: s.y + 4 };
          const p = (t, u, v) => ({ x: u.x + (v.x - u.x) * t, y: u.y + (v.y - u.y) * t });
          const q = k < 0.5 ? p(k * 2, a, mid) : p((k - 0.5) * 2, mid, claim);
          return { x: Math.round(q.x), y: Math.round(q.y) };
        };
        const ambushes = [
          [0.22, ["scrapper", "scrapper", "scrapper", "junker"]],
          [0.45, ["junker", "junker", "scrapper", "scrapper", "deadeye"]],
          [0.68, ["wrecker", "scrapper", "scrapper", "scrapper", "mortarCrawler"]],
          [0.88, ["wrecker", "junker", "scrapper", "scrapper", "scrapper", "mortarCrawler"]]
        ];
        for (const [k, kinds] of ambushes) {
          formationTiles(g.map, road(k), kinds.length).forEach((t, i) => {
            const u = spawnUnit(g, kinds[i], t.x, t.y, ENEMY);
            u.post = t;
          });
        }
      },
      tick(g) {
        const c = convoys.get(g);
        const claim = g.mission?.zones[0];
        if (!c || !claim || g.tick % 30 !== 0) return;
        const trucks = c.ids.map((id) => g.units.find((u) => u.id === id)).filter((u) => !!u);
        for (const u of trucks) {
          if (!c.arrived.includes(u.id) && Math.hypot(u.x / TILE - (claim.x + 0.5), u.y / TILE - (claim.y + 0.5)) <= claim.r) {
            c.arrived.push(u.id);
            notify(g, "A hauler has reached the claim!");
          }
        }
        const rolling = trucks.filter((u) => !c.arrived.includes(u.id));
        const danger = rolling.some((u) => g.units.some((e) => hostile(g, e.owner, PLAYER) && Math.hypot(e.x - u.x, e.y - u.y) < 9 * TILE));
        if (danger) {
          for (const u of rolling) {
            if (g.time - u.hitAt < 1.5) {
              const home = g.map.start;
              const dx = home.x - u.x / TILE;
              const dy = home.y - u.y / TILE;
              const d = Math.hypot(dx, dy) || 1;
              commandMove(g, [u], { x: Math.round(u.x / TILE + dx / d * 5), y: Math.round(u.y / TILE + dy / d * 5) });
            } else u.path = [];
          }
          if (!c.halted) notify(g, "Convoy halted: enemies on the road!");
          c.halted = true;
          return;
        }
        if (c.halted) notify(g, "Road's clear. The convoy is rolling again.");
        c.halted = false;
        for (const u of rolling) {
          if (u.path.length > 0) continue;
          const mid = { x: Math.round(g.map.w * 0.42), y: Math.round(g.map.h * 0.45) };
          const pastMid = c.via.includes(u.id) || Math.hypot(u.x / TILE - mid.x, u.y / TILE - mid.y) < 4;
          if (pastMid && !c.via.includes(u.id)) {
            c.via.push(u.id);
            if (c.via.length === 1) {
              const raiders = g.ai.army.map((id) => g.units.find((x) => x.id === id)).filter((x) => !!x);
              if (raiders.length > 0) {
                commandAttackMove(g, raiders, { x: Math.floor(u.x / TILE), y: Math.floor(u.y / TILE) });
                g.ai.raiders.push(...raiders.map((x) => x.id));
                g.ai.army = [];
                notify(g, "Reclaimer raiders are coming for the convoy!");
              }
            }
          }
          commandMove(g, [u], pastMid ? { x: claim.x, y: claim.y } : mid);
        }
      },
      objectives: [
        {
          text: "Get two haulers to the new claim",
          progress: (g) => `${convoys.get(g)?.arrived.length ?? 0} of 2`,
          done: (g) => (convoys.get(g)?.arrived.length ?? 0) >= 2
        },
        { text: "Bonus: all three make it", bonus: true, done: (g) => (convoys.get(g)?.arrived.length ?? 0) >= 3 }
      ],
      fail: (g) => {
        const c = convoys.get(g);
        if (!c) return null;
        const left = c.ids.filter((id) => c.arrived.includes(id) || g.units.some((u) => u.id === id)).length;
        if (left < 2) return "Too many haulers were lost on the road.";
        return g.time > 1 && !g.units.some((u) => u.owner === PLAYER && UNIT_STATS[u.kind].weapon) && c.arrived.length < 2 ? "The escort has been destroyed." : null;
      }
    },
    {
      id: "lights-out",
      title: "6. Lights Out",
      briefing: [
        "Shardbound again. Concord has dug in around its new claim, ringed with turrets that never sleep. But turrets need power, and power plants burn.",
        "Strike at night. Destroy all three of their power plants: with the power out, their turrets fire at half speed. Your Lancers out-range the gun turrets and pick off soldiers, but only the Prism Tanks can bring buildings down. There is no base; keep your strike team alive."
      ],
      scene: [
        { who: "seer", side: 0, name: "The Seer", text: "They light their camp like a festival. Every lamp is a cable, and every cable runs to a furnace." },
        { who: "lancer", side: 0, name: "Lancer Oru", text: "Three furnaces. We see their lamps a mile off, and they see nothing in the dark." },
        { who: "vance", side: 1, name: "Captain Vance", text: "Double the watch tonight. The glass people don't sleep, and neither do we." }
      ],
      seed: 88,
      faction: "shardbound",
      enemyFaction: "concord",
      difficulty: "normal",
      hazards: false,
      fog: true,
      time: "night",
      enemyBuilds: false,
      enemyAttacks: false,
      setup(g) {
        stripPlayerBase(g);
        const s = g.map.start;
        spawnGroup(g, PLAYER, ["seer", "prismTank", "prismTank", "prismTank", "prismTank", "lancer", "lancer", "skimmer", "skimmer", "glasswalker", "glasswalker", "glasswalker", "glasswalker", "mender", "mender"], { x: s.x + 5, y: s.y + 5 });
        const e = g.map.enemyStart;
        for (const near of [{ x: e.x - 6, y: e.y - 1 }, { x: e.x - 1, y: e.y - 6 }]) {
          const p = openSpot(g, near, 2);
          placeBuilding(g, "power", p.x, p.y, ENEMY);
        }
        const r = openSpot(g, { x: e.x + 3, y: e.y + 9 }, 1);
        placeBuilding(g, "rocketTurret", r.x, r.y, ENEMY);
      },
      objectives: [
        {
          text: "Destroy all three power plants",
          progress: (g) => `${3 - Math.min(3, g.buildings.filter((b) => b.owner === ENEMY && b.kind === "power").length)} of 3`,
          done: (g) => g.time > 1 && !has(g, ENEMY, "power")
        },
        { text: "Bonus: destroy their Construction Yard", bonus: true, done: (g) => g.time > 1 && !has(g, ENEMY, "yard") }
      ],
      fail: (g) => g.time > 1 && !g.units.some((u) => u.owner === PLAYER && UNIT_STATS[u.kind].weapon) ? "Your strike team has been destroyed." : null
    },
    {
      id: "relay-hill",
      title: "7. Relay Hill",
      briefing: [
        "You're Boss Rook's again. The company left three relay towers on the plain, and whoever holds them hears every radio on Vitrea. The Shardbound want them silent.",
        "The Shardbound hold all three, each with a turret and a squad. Take them (stand on a relay with no enemies near and it's yours) and hold all three at once for a full minute. Dust storms roll through: you'll hear the enemy before you see them."
      ],
      scene: [
        { who: "rook", side: 0, name: "Boss Rook", text: "Three towers, and every secret on this rock goes through them. I want to hear Vance sneeze." },
        { who: "mechanic", side: 0, name: "Dee", text: "Wind's picking up, Boss. Dust like that, you can't see your own hand." },
        { who: "rook", side: 0, name: "Boss Rook", text: "Good. Neither can the glass-heads. Grab the towers and sit on them." }
      ],
      seed: 104,
      faction: "reclaimers",
      enemyFaction: "shardbound",
      difficulty: "easy",
      hazards: true,
      fog: true,
      weather: "dust",
      enemyBuilds: true,
      enemyAttacks: true,
      setup(g) {
        const w = g.map.w;
        const h = g.map.h;
        const names = ["Relay North", "Relay Central", "Relay South"];
        [{ x: w * 0.68, y: h * 0.3 }, { x: w / 2 - 1, y: h / 2 - 1 }, { x: w * 0.32, y: h * 0.7 }].forEach((p, i) => {
          const spot = openSpot(g, { x: Math.round(p.x), y: Math.round(p.y) }, 3);
          const z = addZone(g, spot.x + 1, spot.y + 1, 3, names[i]);
          z.owner = ENEMY;
          const t = openSpot(g, { x: z.x + 3, y: z.y - 1 }, 1);
          placeBuilding(g, "turret", t.x, t.y, ENEMY);
          const guards = i === 1 ? ["prismTank", "glasswalker", "glasswalker", "glasswalker", "lancer"] : ["skimmer", "glasswalker", "glasswalker", "glasswalker"];
          formationTiles(g.map, { x: z.x, y: z.y }, guards.length).forEach((tile, k) => {
            const u = spawnUnit(g, guards[k], tile.x, tile.y, ENEMY);
            u.post = tile;
          });
        });
        relays.set(g, { held: 0 });
      },
      tick(g, dt) {
        const zones = g.mission?.zones ?? [];
        const r = relays.get(g);
        if (!r) return;
        r.held = zones.length > 0 && zones.every((z) => z.owner === PLAYER) ? r.held + dt : 0;
        if (g.tick % 2400 !== 0 || g.time < 60) return;
        const target = zones.find((z) => z.owner === PLAYER) ?? zones.find((z) => z.owner === null);
        const army = g.ai.army.map((id) => g.units.find((u) => u.id === id)).filter((u) => !!u).slice(0, 4);
        if (target && army.length > 0) {
          commandAttackMove(g, army, { x: target.x, y: target.y });
          g.ai.army = g.ai.army.filter((id) => !army.some((u) => u.id === id));
          g.ai.raiders.push(...army.map((u) => u.id));
        }
      },
      objectives: [
        {
          text: "Hold all three relays at once for a minute",
          progress: (g) => `${clockText(relays.get(g)?.held ?? 0)} / 1:00 \xB7 ${(g.mission?.zones ?? []).filter((z) => z.owner === PLAYER).length} of 3 held`,
          done: (g) => (relays.get(g)?.held ?? 0) >= 60
        },
        { text: "Bonus: win within 15 minutes", bonus: true, done: (g) => (relays.get(g)?.held ?? 0) >= 60 && g.time <= mins(15) }
      ]
    },
    {
      id: "long-night",
      title: "8. The Long Night",
      briefing: [
        "Back with Concord. The Seer and Boss Rook have made a deal, and tonight they come for us together, from two sides at once.",
        "There's no winning this in the dark. Hold the Construction Yard until dawn: ten minutes. Build defences, keep the harvest going, and don't let the yard fall."
      ],
      scene: [
        { who: "infantry", side: 0, name: "Lt. Hale", text: "Two signals, Captain. Shardbound from the east, Reclaimer engines from the south. They're coordinating." },
        { who: "rook", side: 2, name: "Boss Rook", text: "Nothing personal, Vance. The Seer pays better than you do." },
        { who: "vance", side: 0, name: "Captain Vance", text: "Lights on, turrets up, nobody sleeps. We see the sunrise from this yard, or not at all." }
      ],
      seed: 8,
      faction: "concord",
      enemyFaction: "shardbound",
      factions: ["concord", "shardbound", "reclaimers"],
      mode: "ffa3",
      // Shardbound and Reclaimers on one team, tonight.
      teams: [0, 1, 1, 3],
      difficulty: "normal",
      hazards: false,
      fog: true,
      time: "night",
      enemyBuilds: true,
      enemyAttacks: true,
      setup(g) {
        g.credits = 4e3;
        const s = g.startOf[PLAYER];
        const b = openSpot(g, { x: s.x + 6, y: s.y + 4 }, 2);
        placeBuilding(g, "barracks", b.x, b.y, PLAYER);
        for (const near of [{ x: s.x + 9, y: s.y + 8 }, { x: s.x + 3, y: s.y + 10 }]) {
          const t = openSpot(g, near, 1);
          placeBuilding(g, "turret", t.x, t.y, PLAYER);
        }
        if (g.ais[1]) g.ais[1].nextWave = 150;
        if (g.ais[2]) g.ais[2].nextWave = 200;
      },
      tick(g) {
        if (g.time >= mins(10) && g.weather.time === "night") {
          g.weather.time = "day";
          notify(g, "Dawn is breaking. They're pulling back!");
        }
      },
      objectives: [
        {
          text: "Hold the Construction Yard until dawn",
          progress: (g) => `${clockText(Math.max(0, mins(10) - g.time))} to dawn`,
          done: (g) => g.time >= mins(10)
        },
        {
          text: "Bonus: destroy 40 enemy units",
          bonus: true,
          progress: (g) => `${Math.min(40, g.stats.enemyUnitsDestroyed)} / 40`,
          done: (g) => g.stats.enemyUnitsDestroyed >= 40
        }
      ],
      fail: (g) => g.time > 1 && !has(g, PLAYER, "yard") ? "The Construction Yard has fallen." : null
    },
    {
      id: "unlikely-allies",
      title: "9. Unlikely Allies",
      briefing: [
        "The Seer broke her deal with Rook the moment the night was over, and took his best fields. Rook has called us. On an open channel. Asking for help.",
        "Fight alongside the Reclaimers (green) against both Shardbound bases. Destroy every Shardbound building. Rook's people will fight their own war; help them, and they'll help you."
      ],
      scene: [
        { who: "rook", side: 2, name: "Boss Rook", text: "Vance. I'll say this once. The glass witch stabbed me in the back and I want her gone. You in?" },
        { who: "vance", side: 0, name: "Captain Vance", text: "You shot at my convoy and raided my claim, Rook." },
        { who: "rook", side: 2, name: "Boss Rook", text: "And I'll do it again next week. But this week, we're friends. Green flags are mine. Try not to shoot them." }
      ],
      seed: 33,
      faction: "concord",
      enemyFaction: "shardbound",
      factions: ["concord", "shardbound", "reclaimers", "shardbound"],
      mode: "2v2",
      difficulty: "normal",
      hazards: true,
      fog: true,
      enemyBuilds: true,
      enemyAttacks: true,
      setup(g) {
        const a = g.startOf[2];
        const flip = a.y > g.map.h / 2 ? -1 : 1;
        spawnGroup(g, 2, ["rook"], { x: a.x + 3, y: a.y + 5 * flip + 2 });
      },
      objectives: [
        {
          text: "Destroy both Shardbound bases",
          progress: (g) => `${[1, 3].filter((s) => g.buildings.some((b) => b.owner === s)).length} left`,
          done: (g) => g.time > 1 && !g.buildings.some((b) => hostile(g, b.owner, PLAYER))
        },
        { text: "Bonus: Boss Rook's yard still stands at the end", bonus: true, done: (g) => g.time > 1 && !g.buildings.some((b) => hostile(g, b.owner, PLAYER)) && has(g, 2, "yard") }
      ]
    },
    {
      id: "glass-crown",
      title: "10. The Glass Crown",
      briefing: [
        "Back with Concord, for the last time. The Shardbound have made the biggest crystal fields on Vitrea their home, and the storms don't touch them.",
        "End this. Destroy their base before the crystal swallows the plain."
      ],
      scene: [
        { who: "vance", side: 0, name: "Captain Vance", text: "Rook's people are hauling our wounded home. Didn't think I'd ever say that." },
        { who: "seer", side: 1, name: "The Seer", text: "You fought well, little captain. But the crown is grown, and the storms answer to it." },
        { who: "vance", side: 0, name: "Captain Vance", text: "Then we take the crown. All units: this ends today." }
      ],
      seed: 77,
      faction: "concord",
      enemyFaction: "shardbound",
      difficulty: "normal",
      hazards: true,
      fog: true,
      enemyBuilds: true,
      enemyAttacks: true,
      objectives: [
        { text: "Destroy every Shardbound building", done: (g) => !g.buildings.some((b) => b.owner === ENEMY) },
        { text: "Bonus: win within 20 minutes", bonus: true, done: (g) => !g.buildings.some((b) => b.owner === ENEMY) && g.time <= mins(20) }
      ]
    }
  ];
  function missionById(id) {
    return id === TUTORIAL.id ? TUTORIAL : MISSIONS.find((m) => m.id === id);
  }
  function createMissionGame(def) {
    const g = createGame(def.seed, def.difficulty, {
      hazards: def.hazards,
      fog: def.fog,
      playerFaction: def.faction,
      enemyFaction: def.enemyFaction,
      factions: def.factions,
      mode: def.mode,
      weather: def.weather,
      time: def.time
    });
    if (def.teams) def.teams.forEach((t, side) => g.teams[side] = t);
    for (const side of g.sides) {
      const ai = g.ais[side];
      if (!ai || !hostile(g, side, PLAYER)) continue;
      ai.builds = def.enemyBuilds;
      if (!def.enemyAttacks) ai.nextWave = Infinity;
    }
    g.mission = { def, done: def.objectives.map(() => false), zones: [] };
    def.setup?.(g);
    return g;
  }
  function updateMission(g) {
    const m = g.mission;
    if (!m || g.result) return;
    updateZones(g, m.zones, 1 / 60);
    m.def.tick?.(g, 1 / 60);
    const current2 = m.def.sequential ? m.done.indexOf(false) : -1;
    m.def.objectives.forEach((o, i) => {
      if (m.def.sequential && i !== current2) return;
      if (m.done[i] || !o.done(g)) return;
      m.done[i] = true;
      notify(g, `Objective complete: ${o.text.replace(/^Bonus: /, "")}`);
      emit(g, { kind: "structureReady" });
    });
    const reason = m.def.fail?.(g);
    if (reason) {
      g.result = "defeat";
      g.resultReason = reason;
      emit(g, { kind: "defeat" });
      return;
    }
    const required = m.def.objectives.map((o, i) => o.bonus ? true : m.done[i]);
    if (required.every(Boolean)) {
      g.result = "victory";
      g.resultReason = "Mission complete.";
      emit(g, { kind: "victory" });
    }
  }
  var PROGRESS_KEY = "vitrea.campaign";
  function parseProgress(raw) {
    try {
      const v = raw ? JSON.parse(raw) : [];
      return Array.isArray(v) ? v.filter((id) => typeof id === "string" && missionById(id)) : [];
    } catch {
      return [];
    }
  }
  function isUnlocked(completed, index) {
    return index === 0 || completed.includes(MISSIONS[index - 1].id) || completed.includes(MISSIONS[index].id);
  }
  function loadProgress() {
    try {
      return parseProgress(globalThis.localStorage?.getItem(PROGRESS_KEY));
    } catch {
      return [];
    }
  }
  function saveCompleted(id) {
    const done = new Set(loadProgress());
    done.add(id);
    try {
      globalThis.localStorage?.setItem(PROGRESS_KEY, JSON.stringify([...done]));
    } catch {
    }
  }

  // src/game.ts
  var CLOSE_ENOUGH = 2.5;
  var PARKED_COST = 6;
  var MOVING_COST = 3;
  var FLOW_COST = 2.5;
  var WAIT_MOVING = 0.35;
  var WAIT_PARKED = 0.8;
  var MAX_REPLANS = 10;
  var PLAYER = 0;
  var ENEMY = 1;
  var ALL_SIDES = [0, 1, 2, 3];
  var MAP4 = 112;
  var MODES = {
    "1v1": { label: "1 vs 1", sides: [0, 1], teams: [0, 1, 2, 3], corners: [] },
    // Teammates share the west / east halves. Corners run clockwise from top-left.
    "2v2": { label: "2 vs 2", sides: [0, 1, 2, 3], teams: [0, 1, 0, 1], corners: [0, 1, 3, 2] },
    ffa3: { label: "Free-for-all (3)", sides: [0, 1, 2], teams: [0, 1, 2, 3], corners: [0, 2, 1] },
    ffa4: { label: "Free-for-all (4)", sides: [0, 1, 2, 3], teams: [0, 1, 2, 3], corners: [0, 2, 1, 3] }
  };
  function hostile(g, a, b) {
    return g.teams[a] !== g.teams[b];
  }
  var PING_LIFE = 6;
  var PING_SPACING = 8;
  var ALERT_GAP = 15;
  function underAttack(g, x, y, building) {
    if (g.pings.some((p) => Math.hypot(p.x - x, p.y - y) < PING_SPACING * TILE)) return;
    g.pings.push({ x, y, age: 0 });
    if (g.time - g.lastAlert < ALERT_GAP) return;
    g.lastAlert = g.time;
    notify(g, building ? "Our base is under attack! (Space to look)" : "Our units are under attack! (Space to look)");
    if (building) emit(g, { kind: "alarm" });
    announce(g, building ? "base_under_attack" : "units_under_attack");
  }
  function createGame(seed = 1, difficulty = "normal", options = {}) {
    const mode = options.mode ?? "1v1";
    const layout = MODES[mode];
    const map = mode === "1v1" ? generateMap(seed) : generateMap(seed, MAP4, MAP4, 4);
    const fog = () => createFog(map.w, map.h, options.fog !== false);
    const fogs = { 0: fog(), 1: fog(), 2: fog(), 3: fog() };
    const ai = createAiState(difficulty);
    const factions = { 0: options.playerFaction ?? "concord", 1: options.enemyFaction ?? "shardbound", 2: "concord", 3: "concord" };
    options.factions?.forEach((f, side) => factions[side] = f);
    const starts = map.starts ?? [map.start, map.enemyStart];
    const startOf = mode === "1v1" ? [map.start, map.enemyStart, map.start, map.enemyStart] : ALL_SIDES.map((s) => starts[layout.corners[s] ?? 0]);
    const g = {
      map,
      units: [],
      buildings: [],
      credits: START_CREDITS,
      cores: 0,
      selection: /* @__PURE__ */ new Set(),
      selectedBuilding: null,
      markers: [],
      structure: null,
      lines: {
        barracks: { current: null, queue: [] },
        lightFactory: { current: null, queue: [] },
        heavyFactory: { current: null, queue: [] },
        airfield: { current: null, queue: [] }
      },
      notices: [],
      projectiles: [],
      charges: [],
      pings: [],
      lastAlert: -Infinity,
      announced: {},
      lowPower: false,
      research: createResearch(),
      effects: [],
      result: null,
      ai,
      ais: { 1: ai },
      mode,
      sides: [...layout.sides],
      teams: [...layout.teams],
      startOf,
      eliminated: [],
      weather: createWeather(seed, options.weather, options.time),
      salvage: [],
      strikes: [],
      storms: [],
      stormTimer: options.hazards === false ? Infinity : STORMS.firstSpawn,
      hazardRng: mulberry32(seed * 7919 + 17),
      crystalTimer: 0,
      crystalRng: mulberry32(seed * 104729 + 3),
      crystalTotal: totalCrystal(map),
      crystalCap: totalCrystal(map) * CRYSTALS.capFactor,
      fog: fogs[0],
      fogs,
      local: 0,
      humans: options.pvp ? [0, 1] : [0],
      groups: {},
      occupant: new Int32Array(map.w * map.h),
      events: [],
      factions,
      stats: { creditsHarvested: 0, harvestersLost: 0, enemyUnitsDestroyed: 0 },
      mission: null,
      resultReason: "",
      stormGap: null,
      nextId: 1,
      time: 0,
      tick: 0
    };
    if (mode !== "1v1") {
      for (const side of g.sides) {
        if (side !== PLAYER && !g.ais[side]) g.ais[side] = createAiState(difficulty);
        spawnCornerBase(g, side);
      }
      refreshFog(g);
      return g;
    }
    spawnStartingBase(g, PLAYER);
    if (options.pvp) {
      g.ai.credits = START_CREDITS;
      spawnStartingBase(g, ENEMY);
    } else {
      spawnEnemyOutpost(g);
    }
    refreshFog(g);
    return g;
  }
  function spawnStartingBase(g, owner) {
    const s = g.map.start;
    const at = (kind, x, y) => {
      const { w, h } = BUILDING_STATS[kind];
      return owner === PLAYER ? placeBuilding(g, kind, x, y, owner) : placeBuilding(g, kind, g.map.w - x - w, g.map.h - y - h, owner);
    };
    at("yard", s.x, s.y);
    at("power", s.x, s.y + 4);
    spawnFreeHarvester(g, at("refinery", s.x + 4, s.y + 1));
    const near = owner === PLAYER ? { x: s.x + 3, y: s.y + 5 } : { x: g.map.w - 1 - (s.x + 3), y: g.map.h - 1 - (s.y + 5) };
    for (const t of formationTiles(g.map, near, 3)) spawnUnit(g, factionUnit(g.factions[owner], "quad"), t.x, t.y, owner);
  }
  function spawnCornerBase(g, owner) {
    const s0 = g.startOf[PLAYER];
    const s = g.startOf[owner];
    const flipX = s.x > g.map.w / 2;
    const flipY = s.y > g.map.h / 2;
    const fx = (x, w) => flipX ? g.map.w - x - w : x;
    const fy = (y, h) => flipY ? g.map.h - y - h : y;
    const at = (kind, x, y) => {
      const { w, h } = BUILDING_STATS[kind];
      return placeBuilding(g, kind, fx(x, w), fy(y, h), owner);
    };
    at("yard", s0.x, s0.y);
    at("power", s0.x, s0.y + 4);
    const refinery = at("refinery", s0.x + 4, s0.y + 1);
    spawnFreeHarvester(g, refinery);
    const near = { x: fx(s0.x + 3, 1), y: fy(s0.y + 5, 1) };
    for (const t of formationTiles(g.map, near, 3)) spawnUnit(g, factionUnit(g.factions[owner], "quad"), t.x, t.y, owner);
  }
  var personal = (g, owner) => owner === PLAYER && !g.ais[PLAYER];
  function walletOf(g, owner) {
    return personal(g, owner) ? g : g.ais[owner];
  }
  function linesOf(g, owner) {
    return personal(g, owner) ? g.lines : g.ais[owner].lines;
  }
  function structureOf(g, owner) {
    return personal(g, owner) ? g.structure : g.ais[owner]?.structure ?? null;
  }
  function setStructureOf(g, owner, job) {
    if (personal(g, owner)) g.structure = job;
    else g.ais[owner].structure = job;
  }
  var ENEMY_LAYOUT = [
    { kind: "yard", dx: 0, dy: 0 },
    { kind: "power", dx: 4, dy: 0 },
    { kind: "barracks", dx: 0, dy: 4 },
    { kind: "turret", dx: -1, dy: 2 },
    { kind: "turret", dx: 3, dy: -2 },
    { kind: "turret", dx: 4, dy: 4 }
  ];
  function spawnEnemyOutpost(g) {
    const e = g.map.enemyStart;
    for (const { kind, dx, dy } of ENEMY_LAYOUT) placeBuilding(g, kind, e.x + dx, e.y + dy, ENEMY);
    const garrison = ["tank", "tank", "quad", "quad", "infantry", "infantry", "infantry", "infantry"].map(
      (k) => factionUnit(g.factions[ENEMY], k)
    );
    const tiles = formationTiles(g.map, { x: e.x + 2, y: e.y + 7 }, garrison.length);
    garrison.forEach((kind, i) => {
      const t = tiles[i];
      if (!t) return;
      const u = spawnUnit(g, kind, t.x, t.y, ENEMY);
      u.post = t;
      u.angle = -Math.PI * 0.75;
    });
  }
  function spawnFreeHarvester(g, refinery) {
    const dock = dockTile(refinery);
    const h = spawnUnit(g, "harvester", dock.x, dock.y, refinery.owner);
    h.refineryId = refinery.id;
    autoHarvest(g, h, dock);
    return h;
  }
  function exitTile(g, b) {
    return nearestPassable(g.map, { x: b.tx + Math.floor(b.w / 2), y: b.ty + b.h }) ?? { x: b.tx, y: b.ty + b.h };
  }
  function notify(g, text) {
    g.notices.push({ text, age: 0 });
    if (g.notices.length > 3) g.notices.shift();
  }
  function placeBuilding(g, kind, tx, ty, owner = PLAYER) {
    const { w, h, maxHp } = BUILDING_STATS[kind];
    const b = { id: g.nextId++, kind, owner, tx, ty, w, h, hp: maxHp, rally: null, repairing: false, angle: Math.PI / 2, cooldown: 0, targetId: null };
    const mark = kind === "gate" ? 3 : DRIVABLE_BUILDINGS.includes(kind) ? 2 : 1;
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        if (inBounds(g.map, x, y)) g.map.blocked[idx(g.map, x, y)] = mark;
      }
    }
    g.buildings.push(b);
    if (isSuper(kind)) superweaponBuilt(g, b);
    return b;
  }
  function spawnUnit(g, kind, tx, ty, owner = PLAYER) {
    const u = {
      id: g.nextId++,
      kind,
      owner,
      x: (tx + 0.5) * TILE,
      y: (ty + 0.5) * TILE,
      angle: Math.PI / 2,
      hp: UNIT_STATS[kind].maxHp,
      path: [],
      goal: null,
      order: "idle",
      targetId: null,
      explicitTarget: false,
      attackGoal: null,
      cooldown: 0,
      repath: 0,
      post: null,
      blocked: 0,
      replans: 0,
      xp: 0,
      rank: Math.min(MAX_RANK, bonus(g, owner, "startRank")),
      hitAt: -Infinity,
      abilityCd: 0,
      shieldUntil: -Infinity,
      waypoints: [],
      load: "crystal",
      cargoKind: "crystal",
      cargo: 0,
      salvageId: null,
      harvest: "idle",
      harvestTile: null,
      lastField: null,
      refineryId: null,
      retries: 0
    };
    const ammo = AMMO[kind];
    if (ammo) u.ammo = ammo.shots;
    g.units.push(u);
    return u;
  }
  function dockTile(b) {
    return { x: b.tx + 1, y: b.ty + b.h };
  }
  function unitTile(u) {
    return { x: Math.floor(u.x / TILE), y: Math.floor(u.y / TILE) };
  }
  function getUnit(g, id) {
    return g.units.find((u) => u.id === id);
  }
  function buildingAtTile(g, tx, ty) {
    return g.buildings.find((b) => tx >= b.tx && ty >= b.ty && tx < b.tx + b.w && ty < b.ty + b.h);
  }
  function unitAtPoint(g, wx, wy) {
    let best;
    let bestD = Infinity;
    for (const u of g.units) {
      const d = Math.hypot(u.x - wx, u.y - (isAir(u.kind) ? AIR_LIFT_PX : 0) - wy);
      if (d <= UNIT_STATS[u.kind].radius + 4 && d < bestD) {
        best = u;
        bestD = d;
      }
    }
    return best;
  }
  function selectKindInRect(g, kind, x0, y0, x1, y1, additive) {
    if (!additive) g.selection.clear();
    g.selectedBuilding = null;
    let n = 0;
    for (const u of g.units) {
      if (u.owner === g.local && u.kind === kind && u.x >= x0 && u.x <= x1 && u.y >= y0 && u.y <= y1) {
        g.selection.add(u.id);
        n++;
      }
    }
    return n;
  }
  function selectInRect(g, x0, y0, x1, y1, additive) {
    if (!additive) g.selection.clear();
    const [ax, bx] = x0 < x1 ? [x0, x1] : [x1, x0];
    const [ay, by] = y0 < y1 ? [y0, y1] : [y1, y0];
    for (const u of g.units) {
      if (u.owner === g.local && u.x >= ax && u.x <= bx && u.y >= ay && u.y <= by) g.selection.add(u.id);
    }
  }
  function setPath(g, u, goal, opts = {}) {
    u.goal = goal;
    u.blocked = 0;
    if (isAir(u.kind)) {
      u.path = inBounds(g.map, goal.x, goal.y) ? [goal] : [];
      return;
    }
    const me = u.id + 1;
    const cost = (i) => {
      if (i === opts.avoid) return 1e3;
      if (g.map.blocked[i] === 3 && gateBars(g, i, u.owner)) return 1e3;
      let c = opts.flow ? opts.flow[i] * FLOW_COST : 0;
      const who = g.occupant[i];
      if (who === 0 || who === me) return c;
      const other = g.units.find((o) => o.id === who - 1);
      if (!other || passesThrough(u, other)) return c;
      if (other.path.length === 0) c += PARKED_COST;
      else if (opts.crowd) c += MOVING_COST;
      return c;
    };
    u.path = findPath(g.map, unitTile(u), goal, 2e4, cost);
  }
  function gateBars(g, i, owner) {
    const x = i % g.map.w;
    const y = (i - x) / g.map.w;
    const gate = g.buildings.find((b) => b.kind === "gate" && b.tx === x && b.ty === y);
    return !!gate && hostile(g, gate.owner, owner);
  }
  function passesThrough(mover, other) {
    return mover.kind === "infantry" && other.kind === "infantry";
  }
  function rebuildOccupancy(g) {
    g.occupant.fill(0);
    for (const u of g.units) {
      if (isAir(u.kind)) continue;
      const next = u.path[0];
      if (next && inBounds(g.map, next.x, next.y) && u.kind !== "infantry") g.occupant[idx(g.map, next.x, next.y)] = u.id + 1;
    }
    for (const u of g.units) {
      if (isAir(u.kind)) continue;
      const t = unitTile(u);
      if (inBounds(g.map, t.x, t.y)) g.occupant[idx(g.map, t.x, t.y)] = u.id + 1;
    }
  }
  function blockerAt(g, u, t) {
    if (!inBounds(g.map, t.x, t.y)) return void 0;
    const who = g.occupant[idx(g.map, t.x, t.y)];
    if (who === 0 || who === u.id + 1) return void 0;
    const other = g.units.find((o) => o.id === who - 1);
    return other && !passesThrough(u, other) ? other : void 0;
  }
  function askToStepAside(g, blocker, mover) {
    if (blocker.path.length > 0 || blocker.order !== "idle" || blocker.targetId !== null) return;
    if (blocker.kind === "harvester" && blocker.harvest !== "idle") return;
    const here = unitTile(blocker);
    const onPath = new Set(mover.path.map((p) => `${p.x},${p.y}`));
    let best = null;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]) {
      const t = { x: here.x + dx, y: here.y + dy };
      if (!isPassable(g.map, t.x, t.y) || onPath.has(`${t.x},${t.y}`) || blockerAt(g, blocker, t)) continue;
      best = t;
      break;
    }
    if (best) blocker.path = [best];
  }
  function holdForTraffic(g, u, dt) {
    const next = u.path[0];
    const here = unitTile(u);
    if (next.x === here.x && next.y === here.y) return false;
    const blocker = blockerAt(g, u, next);
    if (!blocker) return false;
    if (u.order === "move" && u.goal && Math.hypot(here.x - u.goal.x, here.y - u.goal.y) <= CLOSE_ENOUGH) {
      u.path = [];
      u.replans = 0;
      return true;
    }
    const bTile = unitTile(blocker);
    const bNext = blocker.path[0];
    if (bNext && bNext.x === here.x && bNext.y === here.y && bTile.x === next.x && bTile.y === next.y) {
      if (u.id > blocker.id && u.goal) setPath(g, u, u.goal, { avoid: idx(g.map, next.x, next.y), crowd: true });
      return true;
    }
    const moving = blocker.path.length > 0;
    if (!moving && blocker.owner === u.owner) askToStepAside(g, blocker, u);
    u.blocked += dt;
    if (u.blocked > (moving ? WAIT_MOVING : WAIT_PARKED) && u.goal) {
      if (!moving && ++u.replans > MAX_REPLANS) {
        u.path = [];
        u.replans = 0;
        return true;
      }
      setPath(g, u, u.goal, { avoid: idx(g.map, next.x, next.y), crowd: true });
    }
    return true;
  }
  function claimedTiles(g, except) {
    const s = /* @__PURE__ */ new Set();
    for (const u of g.units) {
      if (u !== except && u.kind === "harvester" && u.harvestTile && u.harvest !== "idle") {
        s.add(idx(g.map, u.harvestTile.x, u.harvestTile.y));
      }
    }
    return s;
  }
  function nearestRefinery(g, u) {
    let best;
    let bestD = Infinity;
    for (const b of g.buildings) {
      if (!isDock(b.kind) || b.owner !== u.owner) continue;
      const d = b.id === u.refineryId ? -1 : Math.hypot(b.tx * TILE - u.x, b.ty * TILE - u.y);
      if (d < bestD) {
        best = b;
        bestD = d;
      }
    }
    return best;
  }
  function sendToField(g, u, tile) {
    u.harvestTile = tile;
    u.lastField = tile;
    u.harvest = "toField";
    setPath(g, u, tile);
  }
  function autoHarvest(g, u, near, radius = HARVESTER.searchRadius) {
    u.salvageId = null;
    if (u.load === "crystal" && g.factions[u.owner] === "reclaimers") {
      const pile = nearestSalvage(g, near, 14, u.id) ?? nearestSalvage(g, unitTile(u), 14, u.id);
      if (pile) {
        u.salvageId = pile.id;
        sendToField(g, u, { x: pile.x, y: pile.y });
        return;
      }
    }
    const tile = findNearestSpice(g.map, near, radius, claimedTiles(g, u), u.load === "cores");
    if (tile) sendToField(g, u, tile);
    else if (u.cargo > 0) sendToRefinery(g, u);
    else goIdle(u);
  }
  function sendToRefinery(g, u, refinery) {
    const ref = refinery ?? nearestRefinery(g, u);
    if (!ref) {
      goIdle(u);
      return;
    }
    u.refineryId = ref.id;
    u.harvest = "toRefinery";
    setPath(g, u, dockTile(ref));
  }
  function dockBusy(g, ref, except) {
    return g.units.some((o) => o !== except && o.harvest === "unloading" && o.refineryId === ref.id);
  }
  function goIdle(u) {
    u.harvest = "idle";
    u.harvestTile = null;
  }
  var STORM_SHELTER_MARGIN = 3;
  function updateHarvester(g, u, dt) {
    const m = g.map;
    const arrived = u.path.length === 0;
    const here = unitTile(u);
    if ((u.harvest === "harvesting" || u.harvest === "toField") && stormNear(g, u.x, u.y, STORM_SHELTER_MARGIN)) {
      sendToRefinery(g, u);
      if (u.owner === g.local) notify(g, "Harvester returning: storm nearby");
      return;
    }
    switch (u.harvest) {
      case "idle":
        return;
      case "toField": {
        if (!arrived) return;
        const t = u.harvestTile;
        if (t && here.x === t.x && here.y === t.y) {
          u.harvest = "harvesting";
          u.retries = 0;
        } else if (u.salvageId !== null && t && Math.hypot(here.x - t.x, here.y - t.y) <= 1.5) {
          u.harvest = "harvesting";
          u.retries = 0;
        } else if (m.spice[idx(m, here.x, here.y)] > 0 && isCoreTile(m, idx(m, here.x, here.y)) === (u.load === "cores")) {
          u.harvestTile = here;
          u.harvest = "harvesting";
        } else if (u.retries++ < 2) {
          autoHarvest(g, u, here);
        } else {
          goIdle(u);
        }
        return;
      }
      case "harvesting": {
        const t = u.harvestTile;
        if (u.salvageId !== null) {
          const pile = g.salvage.find((p) => p.id === u.salvageId);
          if (!pile || u.cargo > 0 && u.cargoKind !== "crystal") {
            if (u.cargo > 0) sendToRefinery(g, u);
            else autoHarvest(g, u, t);
            return;
          }
          u.cargoKind = "crystal";
          const take = Math.min(ECONOMY.salvageRate * dt, pile.amount, HARVESTER.capacity - u.cargo);
          pile.amount -= take;
          u.cargo += take;
          if (u.cargo >= HARVESTER.capacity - 0.01) sendToRefinery(g, u);
          else if (pile.amount <= 0.5) autoHarvest(g, u, t);
          return;
        }
        const i = idx(m, t.x, t.y);
        const cores = isCoreTile(m, i);
        const kind = cores ? "cores" : "crystal";
        if (u.cargo > 0 && u.cargoKind !== kind) {
          sendToRefinery(g, u);
          return;
        }
        u.cargoKind = kind;
        const capacity = cores ? CORES.capacity : HARVESTER.capacity;
        const value = VEINS.value[m.vein[i]];
        const amount = Math.min((cores ? CORES.harvestRate : HARVESTER.harvestRate) * dt, m.spice[i], (capacity - u.cargo) / value);
        m.spice[i] -= amount;
        u.cargo += amount * value;
        if (m.spice[i] < 0.01) {
          m.spice[i] = 0;
          if (!cores) m.vein[i] = Vein.Crystal;
        }
        if (u.cargo >= capacity - 0.01) {
          u.cargo = capacity;
          sendToRefinery(g, u);
        } else if (m.spice[i] === 0) {
          const next = findNearestSpice(m, t, HARVESTER.fieldRadius, claimedTiles(g, u), cores);
          if (next) sendToField(g, u, next);
          else if (u.cargo > 0) sendToRefinery(g, u);
          else goIdle(u);
        }
        return;
      }
      case "waitDock": {
        const ref = g.buildings.find((b) => b.id === u.refineryId);
        if (!ref) sendToRefinery(g, u);
        else if (!dockBusy(g, ref, u)) sendToRefinery(g, u, ref);
        return;
      }
      case "toRefinery": {
        const ref = g.buildings.find((b) => b.id === u.refineryId);
        const dock = ref && dockTile(ref);
        if (ref && dock && dockBusy(g, ref, u) && Math.hypot(here.x - dock.x, here.y - dock.y) <= 2.5) {
          u.path = [];
          u.harvest = "waitDock";
          return;
        }
        if (!arrived) return;
        if (dock && here.x === dock.x && here.y === dock.y) {
          u.harvest = "unloading";
          if (u.owner === g.local) emit(g, { kind: "unload", x: u.x, y: u.y });
          u.retries = 0;
          u.x = (dock.x + 0.5) * TILE;
          u.y = (dock.y + 0.5) * TILE;
          u.angle = -Math.PI / 2;
        } else if (u.retries++ < 2) {
          sendToRefinery(g, u);
        } else {
          goIdle(u);
        }
        return;
      }
      case "unloading": {
        if (!g.buildings.some((b) => b.id === u.refineryId)) {
          sendToRefinery(g, u);
          return;
        }
        const room = u.cargoKind === "cores" ? 1 : intake(g, u.owner);
        if (room === 0 && u.owner === g.local && g.time - (g.announced.silos_needed ?? -Infinity) >= 20) {
          notify(g, "Silos needed: storage is full. Spend credits or build Silos.");
          announce(g, "silos_needed", 20);
        }
        const amount = Math.min((u.cargoKind === "cores" ? CORES.unloadRate : HARVESTER.unloadRate) * room * dt, u.cargo);
        u.cargo -= amount;
        if (u.cargoKind === "cores") walletOf(g, u.owner).cores += amount;
        else {
          walletOf(g, u.owner).credits += amount;
          if (u.owner === PLAYER) g.stats.creditsHarvested += amount;
        }
        if (u.cargo < 0.01) {
          u.cargo = 0;
          const field = u.lastField ?? here;
          if (stormNear(g, (field.x + 0.5) * TILE, (field.y + 0.5) * TILE, STORM_SHELTER_MARGIN)) return;
          autoHarvest(g, u, field);
        }
        return;
      }
    }
  }
  function fly(g, u, dt) {
    const n = u.path[0];
    const tx = (n.x + 0.5) * TILE;
    const ty = (n.y + 0.5) * TILE;
    const dx = tx - u.x;
    const dy = ty - u.y;
    const d = Math.hypot(dx, dy);
    const step = UNIT_STATS[u.kind].speed * bonus(g, u.owner, "speed") * TILE * dt;
    if (d > 1e-3) u.angle = Math.atan2(dy, dx);
    if (d <= step) {
      u.x = tx;
      u.y = ty;
      u.path.shift();
    } else {
      u.x += dx / d * step;
      u.y += dy / d * step;
    }
  }
  function moveAlongPath(g, u, dt) {
    if (u.path.length === 0) return;
    if (isAir(u.kind)) return fly(g, u, dt);
    const next = u.path[0];
    if (inBounds(g.map, next.x, next.y) && g.map.blocked[idx(g.map, next.x, next.y)] === 3 && gateBars(g, idx(g.map, next.x, next.y), u.owner)) {
      const gate = g.buildings.find((b) => b.kind === "gate" && b.tx === next.x && b.ty === next.y);
      if (gate && UNIT_STATS[u.kind].weapon && u.targetId === null) {
        u.targetId = gate.id;
        u.repath = 0;
        if (u.order !== "attackMove") {
          u.order = "attack";
          u.explicitTarget = true;
          u.path = [];
        }
      }
      return;
    }
    if (!isPassable(g.map, next.x, next.y) && u.goal) {
      setPath(g, u, u.goal);
      if (u.path.length === 0) return;
    }
    if (holdForTraffic(g, u, dt)) return;
    if (u.path.length === 0) return;
    let remaining = UNIT_STATS[u.kind].speed * bonus(g, u.owner, "speed") * TILE * dt;
    const first = u.path[0];
    const fx = (first.x + 0.5) * TILE - u.x;
    const fy = (first.y + 0.5) * TILE - u.y;
    const fd = Math.hypot(fx, fy);
    if (fd > 1e-3) {
      const step = Math.min(remaining, fd);
      const nx = Math.floor((u.x + fx / fd * step) / TILE);
      const ny = Math.floor((u.y + fy / fd * step) / TILE);
      const here = unitTile(u);
      if (nx !== here.x || ny !== here.y) {
        const standing = standingIn(g, u, nx, ny);
        if (standing) {
          if (u.order === "move" && u.goal && Math.hypot(here.x - u.goal.x, here.y - u.goal.y) <= CLOSE_ENOUGH) {
            u.path = [];
            return;
          }
          const ddx = first.x - here.x;
          const ddy = first.y - here.y;
          if (ddx !== 0 && ddy !== 0 && (nx !== first.x || ny !== first.y)) {
            const alt = nx === here.x + ddx && ny === here.y ? { x: here.x, y: here.y + ddy } : { x: here.x + ddx, y: here.y };
            if (isPassable(g.map, alt.x, alt.y) && !standingIn(g, u, alt.x, alt.y)) {
              u.path.unshift(alt);
              return;
            }
          }
          u.blocked += dt;
          if (u.blocked > WAIT_PARKED && u.goal) setPath(g, u, u.goal, { avoid: idx(g.map, nx, ny), crowd: true });
          return;
        }
      }
    }
    u.blocked = 0;
    while (remaining > 0 && u.path.length > 0) {
      const n = u.path[0];
      const tx = (n.x + 0.5) * TILE;
      const ty = (n.y + 0.5) * TILE;
      const dx = tx - u.x;
      const dy = ty - u.y;
      const d = Math.hypot(dx, dy);
      if (d > 1e-3) u.angle = Math.atan2(dy, dx);
      if (d <= remaining) {
        u.x = tx;
        u.y = ty;
        remaining -= d;
        u.path.shift();
        u.replans = 0;
      } else {
        u.x += dx / d * remaining;
        u.y += dy / d * remaining;
        remaining = 0;
      }
    }
  }
  function standingIn(g, u, tx, ty) {
    for (const o of g.units) {
      if (o === u || passesThrough(u, o) || isAir(o.kind)) continue;
      if (Math.floor(o.x / TILE) === tx && Math.floor(o.y / TILE) === ty) return o;
    }
    return void 0;
  }
  function isPushable(u) {
    if (u.path.length > 0) return false;
    return !(u.kind === "harvester" && (u.harvest === "harvesting" || u.harvest === "unloading"));
  }
  function separate(g) {
    const us = g.units;
    for (let i = 0; i < us.length; i++) {
      for (let j = i + 1; j < us.length; j++) {
        const a = us[i];
        const b = us[j];
        if (isAir(a.kind) !== isAir(b.kind)) continue;
        const pa = isPushable(a);
        const pb = isPushable(b);
        if (!pa && !pb) continue;
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d = Math.hypot(dx, dy);
        const min = UNIT_STATS[a.kind].radius + UNIT_STATS[b.kind].radius;
        if (d >= min) continue;
        if (d < 1e-3) {
          dx = 1;
          dy = 0;
          d = 1;
        }
        const push = (min - d) * 0.5;
        const share = pa && pb ? 0.5 : 1;
        if (pa) nudge(g, a, -dx / d * push * share, -dy / d * push * share);
        if (pb) nudge(g, b, dx / d * push * share, dy / d * push * share);
      }
    }
  }
  function nudge(g, u, dx, dy) {
    const nx = u.x + dx;
    const ny = u.y + dy;
    if (isAir(u.kind)) {
      u.x = Math.max(0, Math.min(g.map.w * TILE - 1, nx));
      u.y = Math.max(0, Math.min(g.map.h * TILE - 1, ny));
      return;
    }
    if (isPassable(g.map, Math.floor(nx / TILE), Math.floor(ny / TILE))) {
      u.x = nx;
      u.y = ny;
    }
  }
  function update(g, dt) {
    g.time += dt;
    g.tick++;
    tickWeather(g);
    updateBoarding(g);
    rebuildOccupancy(g);
    for (const u of g.units) {
      moveAlongPath(g, u, dt);
      if (u.order === "move" && u.path.length === 0) u.order = "idle";
      if (u.order === "idle" && u.path.length === 0 && u.waypoints.length > 0) {
        u.order = "move";
        u.replans = 0;
        setPath(g, u, u.waypoints.shift());
      }
      if (u.kind === "harvester") updateHarvester(g, u, dt);
    }
    separate(g);
    updateFog(g, dt);
    updateCombat(g, dt);
    updateProduction(g, dt);
    updateRepairs(g, dt);
    updateBuildingRepairs(g, dt);
    updateCrystalRegen(g, dt);
    updateVeterancy(g, dt);
    updateHeroes(g, dt);
    updateResearch(g, dt);
    updateAi(g, dt);
    updateStorms(g, dt);
    updateCrystals(g, dt);
    updateEconomy(g, dt);
    updateSuperweapons(g, dt);
    updateMission(g);
    for (const p of g.pings) p.age += dt;
    g.pings = g.pings.filter((p) => p.age < PING_LIFE);
    for (const mk of g.markers) mk.age += dt;
    g.markers = g.markers.filter((mk) => mk.age < 0.6);
    for (const n of g.notices) n.age += dt;
    g.notices = g.notices.filter((n) => n.age < 3);
  }
  var AIR_LIFT_PX = 30;
  function updateBoarding(g) {
    for (const u of [...g.units]) {
      if (u.boarding == null) continue;
      const ship = g.units.find((s) => s.id === u.boarding && s.kind === "dropship" && s.owner === u.owner);
      if (!ship || (ship.passengers?.length ?? 0) >= DROPSHIP_SEATS) {
        u.boarding = null;
        continue;
      }
      if (Math.hypot(ship.x - u.x, ship.y - u.y) > TILE * 1.6) {
        if (u.path.length === 0) setPath(g, u, unitTile(ship));
        continue;
      }
      g.units = g.units.filter((o) => o !== u);
      g.selection.delete(u.id);
      u.boarding = null;
      u.path = [];
      u.order = "idle";
      u.targetId = null;
      (ship.passengers ??= []).push(u);
    }
  }
  function commandBoard(g, units, ship) {
    if (ship.kind !== "dropship") return null;
    const room = DROPSHIP_SEATS - (ship.passengers?.length ?? 0);
    const soldiers = units.filter((u) => UNIT_STATS[u.kind].armor === "infantry" && u.owner === ship.owner).slice(0, room);
    if (soldiers.length === 0) return room <= 0 ? "The dropship is full." : "Only infantry can board a dropship.";
    for (const u of soldiers) {
      clearCombat(u);
      u.order = "move";
      u.boarding = ship.id;
      setPath(g, u, unitTile(ship));
    }
    return null;
  }
  function unloadShip(g, ship) {
    const aboard = ship.passengers ?? [];
    if (aboard.length === 0) return "The dropship is empty.";
    const here = unitTile(ship);
    if (!isPassable(g.map, here.x, here.y)) return "Can't land here: find open ground.";
    const spots = formationTiles(g.map, here, aboard.length);
    aboard.splice(0, spots.length).forEach((u, k) => {
      u.x = (spots[k].x + 0.5) * TILE;
      u.y = (spots[k].y + 0.5) * TILE;
      u.path = [];
      u.order = "idle";
      g.units.push(u);
    });
    return null;
  }
  function tickWeather(g) {
    const w = g.weather;
    const dust = w.dust;
    const light = w.light;
    updateWeather(w, g.time);
    if (dust === 0 && w.dust > 0) notify(g, "Dust storm rolling in: everyone sees less, long-range guns fall short.");
    if (dust > 0 && w.dust === 0) notify(g, "The dust is settling.");
    if (light > 0.7 && w.light <= 0.7) notify(g, "Night is falling.");
    if (light < 0.7 && w.light >= 0.7 && w.time === "cycle") notify(g, "Dawn is breaking.");
  }
  function updateCrystalRegen(g, dt) {
    for (const u of g.units) {
      const regen = FACTIONS[g.factions[u.owner]].crystalRegen;
      if (regen <= 0) continue;
      const t = unitTile(u);
      if (!inBounds(g.map, t.x, t.y) || g.map.spice[idx(g.map, t.x, t.y)] <= 0 || isCoreTile(g.map, idx(g.map, t.x, t.y))) continue;
      u.hp = Math.min(UNIT_STATS[u.kind].maxHp, u.hp + regen * bonus(g, u.owner, "regen") * dt);
    }
  }
  function formationTiles(m, target, n) {
    const start2 = nearestPassable(m, target);
    if (!start2) return [];
    const out = [];
    const seen = /* @__PURE__ */ new Set([idx(m, start2.x, start2.y)]);
    const queue = [start2];
    for (let head = 0; head < queue.length && out.length < n; head++) {
      const p = queue[head];
      out.push(p);
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
        const x = p.x + dx;
        const y = p.y + dy;
        if (!isPassable(m, x, y)) continue;
        const i = idx(m, x, y);
        if (seen.has(i)) continue;
        seen.add(i);
        queue.push({ x, y });
      }
    }
    return out;
  }
  function commandMove(g, units, target) {
    if (units.length === 0) return;
    const goals = groupGoals(g, units, target);
    const flow = units.length > 1 ? new Float32Array(g.map.w * g.map.h) : void 0;
    const order = units.map((_, k) => k).sort((a, b) => Math.hypot(units[a].x / TILE - target.x, units[a].y / TILE - target.y) - Math.hypot(units[b].x / TILE - target.x, units[b].y / TILE - target.y));
    for (const k of order) {
      const u = units[k];
      if (u.kind === "harvester") goIdle(u);
      clearCombat(u);
      u.order = "move";
      u.replans = 0;
      setPath(g, u, goals[k], { flow });
      if (flow && !(u.kind === "infantry")) for (const p of u.path) flow[idx(g.map, p.x, p.y)] += 1;
    }
  }
  function groupGoals(g, units, target) {
    const tiles = units.map(unitTile);
    const cx = tiles.reduce((s, t) => s + t.x, 0) / tiles.length;
    const cy = tiles.reduce((s, t) => s + t.y, 0) / tiles.length;
    const spread = Math.max(...tiles.map((t) => Math.hypot(t.x - cx, t.y - cy)));
    const taken = /* @__PURE__ */ new Set();
    const claim = (p) => {
      const options = formationTiles(g.map, p, units.length + taken.size + 1);
      const pick2 = options.find((o) => !taken.has(idx(g.map, o.x, o.y))) ?? p;
      taken.add(idx(g.map, pick2.x, pick2.y));
      return pick2;
    };
    if (units.length > 1 && spread <= 4) {
      const order2 = units.map((_, k) => k).sort((a, b) => Math.hypot(tiles[a].x - target.x, tiles[a].y - target.y) - Math.hypot(tiles[b].x - target.x, tiles[b].y - target.y));
      const goals2 = new Array(units.length);
      for (const k of order2) {
        goals2[k] = claim({ x: Math.round(target.x + tiles[k].x - cx), y: Math.round(target.y + tiles[k].y - cy) });
      }
      return goals2;
    }
    const spots = formationTiles(g.map, target, units.length);
    const order = units.map((_, k) => k).sort((a, b) => Math.hypot(tiles[a].x - target.x, tiles[a].y - target.y) - Math.hypot(tiles[b].x - target.x, tiles[b].y - target.y));
    const goals = new Array(units.length);
    order.forEach((k, n) => goals[k] = spots[n] ?? target);
    return goals;
  }
  function clearCombat(u) {
    u.targetId = null;
    u.explicitTarget = false;
    u.attackGoal = null;
    u.waypoints = [];
  }
  function commandQueueMove(g, units, target) {
    const idle = units.filter((u) => u.order === "idle" && u.path.length === 0 && u.waypoints.length === 0 && u.kind !== "harvester");
    const busy = units.filter((u) => !idle.includes(u));
    commandMove(g, idle, target);
    const goals = groupGoals(g, busy, target);
    busy.forEach((u, k) => {
      if (u.kind === "harvester") goIdle(u);
      u.waypoints.push(goals[k]);
    });
  }
  function setRally(g, b, target) {
    b.rally = target;
  }
  function armyUnits(g) {
    return g.units.filter((u) => u.owner === g.local && u.kind !== "harvester");
  }
  function commandAttack(g, units, targetId) {
    const target = g.units.find((t) => t.id === targetId);
    for (const u of units) {
      if (!UNIT_STATS[u.kind].weapon) continue;
      if (target && !canHit(UNIT_STATS[u.kind].weapon, target.kind)) continue;
      clearCombat(u);
      u.order = "attack";
      u.targetId = targetId;
      u.explicitTarget = true;
      u.repath = 0;
    }
  }
  function commandAttackMove(g, units, target) {
    const armed = units.filter((u) => UNIT_STATS[u.kind].weapon);
    commandMove(g, armed, target);
    for (const u of armed) {
      u.order = "attackMove";
      u.attackGoal = u.goal;
    }
  }
  function commandHarvest(g, harvesters, target) {
    const cores = inBounds(g.map, target.x, target.y) && isCoreTile(g.map, idx(g.map, target.x, target.y));
    for (const u of harvesters) {
      u.load = cores ? "cores" : "crystal";
      const tile = findNearestSpice(g.map, target, HARVESTER.fieldRadius, claimedTiles(g, u), cores);
      if (tile) sendToField(g, u, tile);
      else commandMove(g, [u], target);
    }
  }
  function assignGroup(g, n) {
    g.groups[n] = selectedUnits(g).map((u) => u.id);
  }
  function selectGroup(g, n) {
    const units = (g.groups[n] ?? []).map((id) => getUnit(g, id)).filter((u) => !!u);
    g.groups[n] = units.map((u) => u.id);
    if (units.length === 0) return units;
    g.selection = new Set(units.map((u) => u.id));
    g.selectedBuilding = null;
    return units;
  }
  function commandStop(g, units) {
    for (const u of units) {
      u.path = [];
      u.order = "idle";
      clearCombat(u);
      if (u.kind === "harvester") goIdle(u);
    }
  }
  function selectedUnits(g) {
    return [...g.selection].map((id) => getUnit(g, id)).filter((u) => !!u && u.owner === g.local);
  }
  function describeOrderAt(g, units, tx, ty, attackMove = false) {
    if (units.length === 0 || !inBounds(g.map, tx, ty)) return null;
    const owner = units[0].owner;
    const b = buildingAtTile(g, tx, ty);
    const hasHarvesters = units.some((u) => u.kind === "harvester");
    if (b?.kind === "repairPad" && b.owner === owner && units.some((u) => UNIT_STATS[u.kind].armor !== "infantry")) return { marker: "move", sound: false };
    if (b && hostile(g, b.owner, owner) || attackMove) return { marker: "attack", sound: true };
    if (hasHarvesters && (b && isDock(b.kind) && b.owner === owner || g.map.spice[idx(g.map, tx, ty)] > 0)) return { marker: "harvest", sound: true };
    return { marker: "move", sound: true };
  }
  function orderAt(g, units, tx, ty, attackMove = false) {
    if (units.length === 0 || !inBounds(g.map, tx, ty)) return;
    const owner = units[0].owner;
    const harvesters = units.filter((u) => u.kind === "harvester");
    let movers = units.filter((u) => u.kind !== "harvester");
    const b = buildingAtTile(g, tx, ty);
    if (b?.kind === "repairPad" && b.owner === owner) {
      const vehicles = units.filter((u) => UNIT_STATS[u.kind].armor !== "infantry");
      if (vehicles.length > 0) {
        commandMove(g, vehicles, { x: b.tx, y: b.ty });
        return;
      }
    }
    if (b && hostile(g, b.owner, owner)) {
      commandAttack(g, units, b.id);
      return;
    }
    if (attackMove) {
      commandAttackMove(g, units, { x: tx, y: ty });
      return;
    }
    const pile = g.salvage.find((p) => Math.abs(p.x - tx) <= 1 && Math.abs(p.y - ty) <= 1);
    const scrappers = harvesters.filter((u) => g.factions[u.owner] === "reclaimers");
    if (pile && scrappers.length > 0) {
      for (const u of scrappers) {
        u.load = "crystal";
        u.salvageId = pile.id;
        sendToField(g, u, { x: pile.x, y: pile.y });
      }
      movers = units.filter((u) => !scrappers.includes(u));
    } else if (b && isDock(b.kind) && b.owner === owner && harvesters.length > 0) {
      for (const u of harvesters) sendToRefinery(g, u, b);
    } else if (g.map.spice[idx(g.map, tx, ty)] > 0 && harvesters.length > 0) {
      commandHarvest(g, harvesters, { x: tx, y: ty });
    } else {
      movers = units;
    }
    if (movers.length > 0) commandMove(g, movers, { x: tx, y: ty });
  }

  // src/economy.ts
  var UNIT_STATS_HP = (kind) => UNIT_STATS[kind].maxHp;
  var ECONOMY = {
    /** Outposts and drills: crystal (or core) tiles needed this close (tiles) to the spot. */
    outpostReach: 6,
    outpostMinTiles: 6,
    drillReach: 3,
    drillMinTiles: 5,
    /** No remote building this close (tiles) to an enemy building. */
    enemyClearance: 9,
    /** A drill takes this much crystal a second (worth more from storm glass), and cores this fast. */
    drillRate: 9,
    drillCoreRate: 0.08,
    /** A spire grows crystal this often (s), this far out (tiles), this much at a time. */
    spireInterval: 1.5,
    spireRadius: 5,
    spireGrow: 45,
    /** Salvage: share of a wreck's cost left in the pile, how long piles last (s), pick-up rate. */
    salvageShare: 0.3,
    salvageLife: 240,
    salvageRate: 90
  };
  var DEPLOYS = { outpostTruck: "outpost", drillRig: "deepDrill" };
  var PACKS = { outpost: "outpostTruck", deepDrill: "drillRig" };
  function deploySpot(g, u) {
    const kind = DEPLOYS[u.kind];
    if (!kind) return null;
    const { w, h } = BUILDING_STATS[kind];
    const t = unitTile(u);
    const occupied = new Set(g.units.filter((o) => o !== u).map((o) => `${Math.floor(o.x / 32)},${Math.floor(o.y / 32)}`));
    let first = null;
    for (let dy = 0; dy < h; dy++) {
      for (let dx = 0; dx < w; dx++) {
        const x = t.x - dx;
        const y = t.y - dy;
        const tiles = remoteTiles(g, kind, x, y, u.owner, occupied);
        const spot = { x, y, tiles, ok: tiles.every((k) => k.ok) };
        if (spot.ok) return spot;
        first ??= spot;
      }
    }
    return first;
  }
  function deployUnit(g, u) {
    const kind = DEPLOYS[u.kind];
    if (!kind) return null;
    const spot = deploySpot(g, u);
    if (!spot?.ok) {
      return kind === "outpost" ? "Can't deploy here: an outpost needs clear ground beside crystal you've explored, away from enemy bases." : "Can't deploy here: a drill needs to stand on a crystal field you've explored, away from enemy bases.";
    }
    g.units = g.units.filter((o) => o !== u);
    g.selection.delete(u.id);
    const b = placeBuilding(g, kind, spot.x, spot.y, u.owner);
    b.hp = BUILDING_STATS[kind].maxHp * (u.hp / UNIT_STATS_HP(u.kind));
    clearUnder(g, b);
    if (kind === "outpost" && !u.giftUsed) spawnFreeHarvester(g, b);
    b.giftUsed = true;
    if (u.owner === g.local) g.selectedBuilding = b.id;
    return null;
  }
  function packUp(g, b) {
    const kind = PACKS[b.kind];
    if (!kind) return "That can't be packed up.";
    for (let y = b.ty; y < b.ty + b.h; y++) for (let x = b.tx; x < b.tx + b.w; x++) if (inBounds(g.map, x, y)) g.map.blocked[idx(g.map, x, y)] = 0;
    g.buildings = g.buildings.filter((o) => o !== b);
    if (g.selectedBuilding === b.id) g.selectedBuilding = null;
    const t = nearestPassable(g.map, { x: b.tx + Math.floor(b.w / 2), y: b.ty + Math.floor(b.h / 2) }) ?? { x: b.tx, y: b.ty };
    const u = spawnUnit(g, kind, t.x, t.y, b.owner);
    u.hp = UNIT_STATS_HP(kind) * (b.hp / BUILDING_STATS[b.kind].maxHp);
    u.giftUsed = true;
    if (b.owner === g.local) g.selection = /* @__PURE__ */ new Set([u.id]);
    return null;
  }
  var REMOTE = ["outpost", "deepDrill"];
  var isRemote = (kind) => REMOTE.includes(kind);
  var isDock = (kind) => kind === "refinery" || kind === "outpost";
  function storageOf(g, owner) {
    let n = 0;
    for (const b of g.buildings) if (b.owner === owner) n += STORAGE.holds[b.kind] ?? 0;
    return n;
  }
  function intake(g, owner) {
    const cap = storageOf(g, owner);
    if (cap <= 0) return 0;
    const credits = walletOf(g, owner).credits;
    const from = cap * STORAGE.slowFrom;
    if (credits <= from) return 1;
    return Math.max(0, (cap - credits) / (cap - from));
  }
  function resourceNear(g, cx, cy, r) {
    let n = 0;
    for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
      for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
        if (!inBounds(g.map, x, y) || Math.hypot(x + 0.5 - cx, y + 0.5 - cy) > r) continue;
        if (g.map.spice[idx(g.map, x, y)] > 0) n++;
      }
    }
    return n;
  }
  function remoteTiles(g, kind, tx, ty, owner, occupied) {
    const { w, h } = BUILDING_STATS[kind];
    const m = g.map;
    const cx = tx + w / 2;
    const cy = ty + h / 2;
    const drill3 = kind === "deepDrill";
    const fog = g.humans.includes(owner) && g.fogs[owner].enabled ? g.fogs[owner] : null;
    const enough = resourceNear(g, cx, cy, drill3 ? ECONOMY.drillReach : ECONOMY.outpostReach) >= (drill3 ? ECONOMY.drillMinTiles : ECONOMY.outpostMinTiles);
    const clear = !g.buildings.some((b) => hostile(g, b.owner, owner) && Math.hypot(b.tx + b.w / 2 - cx, b.ty + b.h / 2 - cy) < ECONOMY.enemyClearance);
    const out = [];
    for (let y = ty; y < ty + h; y++) {
      for (let x = tx; x < tx + w; x++) {
        let ok = enough && clear && inBounds(m, x, y);
        if (ok) {
          const i = idx(m, x, y);
          ok = m.terrain[i] !== Terrain.Cliff && m.blocked[i] === 0 && !occupied.has(`${x},${y}`) && (!fog || fog.explored[i] === 1);
          if (ok && !drill3) ok = m.spice[i] <= 0;
          if (ok && m.vein[i] === Vein.Core && m.spice[i] > 0 && !drill3) ok = false;
        }
        out.push({ x, y, ok });
      }
    }
    return out;
  }
  function clearUnder(g, b) {
    for (let y = b.ty; y < b.ty + b.h; y++) {
      for (let x = b.tx; x < b.tx + b.w; x++) {
        if (!inBounds(g.map, x, y)) continue;
        const i = idx(g.map, x, y);
        if (g.map.vein[i] === Vein.Core) continue;
        g.map.spice[i] = 0;
        g.map.vein[i] = Vein.Crystal;
      }
    }
  }
  function anyFaction(g, faction) {
    return g.sides.some((s) => g.factions[s] === faction);
  }
  function leaveSalvage(g, x, y, worth) {
    if (worth <= 0 || !anyFaction(g, "reclaimers")) return;
    const tx = Math.floor(x);
    const ty = Math.floor(y);
    const here = g.salvage.find((p) => p.x === tx && p.y === ty);
    if (here) {
      here.amount += worth * ECONOMY.salvageShare;
      here.age = 0;
      return;
    }
    g.salvage.push({ id: g.nextId++, x: tx, y: ty, amount: worth * ECONOMY.salvageShare, age: 0 });
  }
  function updateEconomy(g, dt) {
    for (const b of g.buildings) {
      if (b.kind === "deepDrill") drill2(g, b, dt);
      else if (b.kind === "seedSpire") grow(g, b, dt);
    }
    if (g.salvage.length) {
      for (const p of g.salvage) p.age += dt;
      g.salvage = g.salvage.filter((p) => p.age < ECONOMY.salvageLife && p.amount > 0.5);
    }
  }
  function drill2(g, b, dt) {
    const m = g.map;
    const cx = b.tx + b.w / 2;
    const cy = b.ty + b.h / 2;
    const r = ECONOMY.drillReach;
    const power2 = powerInfo(g, b.owner).low ? 0.5 : 1;
    let best = -1;
    let core = -1;
    for (let y = Math.floor(cy - r); y <= Math.ceil(cy + r); y++) {
      for (let x = Math.floor(cx - r); x <= Math.ceil(cx + r); x++) {
        if (!inBounds(m, x, y) || Math.hypot(x + 0.5 - cx, y + 0.5 - cy) > r) continue;
        const i = idx(m, x, y);
        if (m.spice[i] <= 0) continue;
        if (m.vein[i] === Vein.Core) {
          if (core < 0 || m.spice[i] > m.spice[core]) core = i;
        } else if (best < 0 || m.spice[i] > m.spice[best]) best = i;
      }
    }
    const wallet = walletOf(g, b.owner);
    if (best >= 0) {
      const take = Math.min(m.spice[best], ECONOMY.drillRate * power2 * intake(g, b.owner) * dt);
      m.spice[best] -= take;
      const credits = take * VEINS.value[m.vein[best]];
      wallet.credits += credits;
      if (b.owner === PLAYER) g.stats.creditsHarvested += credits;
      if (m.spice[best] < 0.01) {
        m.spice[best] = 0;
        m.vein[best] = Vein.Crystal;
      }
    }
    if (core >= 0) {
      const take = Math.min(m.spice[core], ECONOMY.drillCoreRate * power2 * dt);
      m.spice[core] -= take;
      wallet.cores += take;
    }
  }
  function grow(g, b, dt) {
    b.cooldown -= dt * (powerInfo(g, b.owner).low ? 0.5 : 1);
    if (b.cooldown > 0) return;
    b.cooldown += ECONOMY.spireInterval;
    const m = g.map;
    const cx = b.tx + b.w / 2;
    const cy = b.ty + b.h / 2;
    for (let attempt = 0; attempt < 3; attempt++) {
      const a = g.crystalRng() * Math.PI * 2;
      const d = 1.2 + Math.sqrt(g.crystalRng()) * (ECONOMY.spireRadius - 1.2);
      const x = Math.floor(cx + Math.cos(a) * d);
      const y = Math.floor(cy + Math.sin(a) * d);
      if (!inBounds(m, x, y)) continue;
      const i = idx(m, x, y);
      if (m.terrain[i] !== Terrain.Sand || m.blocked[i] !== 0 || m.vein[i] === Vein.Core) continue;
      if (m.spice[i] <= 0) m.vein[i] = Vein.Crystal;
      m.spice[i] = Math.min(VEINS.max[m.vein[i]], m.spice[i] + ECONOMY.spireGrow);
      return;
    }
  }
  function nearestSalvage(g, from, r, except) {
    let best = null;
    let bestD = r;
    for (const p of g.salvage) {
      const d = Math.hypot(p.x - from.x, p.y - from.y);
      if (d >= bestD) continue;
      if (g.units.some((u) => u.id !== except && u.salvageId === p.id)) continue;
      best = p;
      bestD = d;
    }
    return best;
  }

  // src/idcard.ts
  var UNIT_DOSSIER = {
    infantry: { role: "Rifle infantry", bio: "Company security on a contract nobody came back to cancel. They still wear the badge." },
    rocketInfantry: { role: "Anti-armour infantry", bio: "One tube, three rockets, and the patience to wait for the engine noise." },
    quad: { role: "Light scout", bio: "Four fat tyres and a machine gun. First out of the gate, first back with the news." },
    raider: { role: "Fast raider", bio: "Stripped to the frame for speed. Hits the harvesters, gone before the turrets turn." },
    tank: { role: "Main battle tank", bio: "Pre-storm company stock, kept running on spare parts and stubbornness." },
    artillery: { role: "Long-range artillery", bio: "Needs radar to see what it's hitting. Doesn't need to see it twice." },
    gunship: { role: "Attack helicopter", bio: "Fast, rocket-armed and nobody's friend. Flies over walls and cliffs to hunt harvesters; keep it away from flak." },
    dropship: { role: "Troop transport", bio: "Right-click it with soldiers selected and they climb aboard (five seats). Fly them anywhere and press Q to set them down." },
    bomber: { role: "Heavy bomber", bio: "Slow and armoured, with a bomb bay that flattens buildings. It has to fly right over the target: escort it." },
    outpostTruck: { role: "Mobile outpost", bio: "A forward refinery folded onto six wheels. Drive it to a field you've scouted and deploy it (Q): it brings a harvester and a place to build." },
    drillRig: { role: "Mobile drill", bio: "Concord's answer to harvesting: park it on a field, deploy (Q), and the crystal flows straight into the account. Pack it up when the field runs thin." },
    harvester: { role: `${RESOURCE_NAME[0].toUpperCase()}${RESOURCE_NAME.slice(1)} harvester`, bio: "The whole war runs on what this slow, ugly machine scoops out of the sand." },
    glasswalker: { role: "Crystal infantry", bio: "Born after the first storm. They hear the crystal hum and fire with it." },
    skimmer: { role: "Hover raider", bio: "Rides a cushion of resonance a hand's width above the dunes. Leaves no tracks." },
    prismTank: { role: "Beam tank", bio: "A grown crystal lens on a salvaged hull, focused into a lance of light." },
    resonator: { role: "Resonance artillery", bio: "Sings a note the glass in your bones agrees with. Infantry don't get up." },
    scrapper: { role: "Scrap infantry", bio: "Grew up in the ash wastes stripping wrecks. Now they make them." },
    junker: { role: "Flame buggy", bio: "A fuel tank, a nozzle and a driver who laughs too much. Mind the smoke." },
    wrecker: { role: "Scrap tank", bio: "Three dead tanks welded into one live one. The autocannon came off a fourth." },
    mortarCrawler: { role: "Mobile mortar", bio: "Crawls up behind the line and lobs scrap-packed shells over it." },
    medic: { role: "Field medic", bio: "Patched up half the colony after the company left. Still carries their kit." },
    mender: { role: "Crystal mender", bio: "Coaxes the glass to close a soldier's wounds. Machines are someone else's problem." },
    mechanic: { role: "Field mechanic", bio: "Can fix anything with a wrench, a hammer and a lot of shouting." },
    marksman: { role: "Sniper", bio: "Company marksman, top of her class. The class was long ago and far away." },
    lancer: { role: "Beam sniper", bio: "Threads a single shard of light through a gap no wider than a finger." },
    deadeye: { role: "Sniper", bio: "Shoots a long gun built from a dozen short ones. Never misses twice." },
    bastion: { role: "Super-heavy tank", bio: "The Concord's last word in armour: twin cannons and a hull like a bunker." },
    monolith: { role: "Crystal colossus", bio: "Less a vehicle than a moving shard of the storm, humming as it comes." },
    titan: { role: "Scrap colossus", bio: "Built from the biggest wreck on the plain. It still flies three old flags." },
    vance: { role: "Hero \xB7 Commando", bio: "Captain Vance stayed when the company ran. He's been settling the bill since." },
    seer: { role: "Hero \xB7 Storm prophet", bio: "She walked into the first storm and came out knowing where the next would land." },
    rook: { role: "Hero \xB7 Clan boss", bio: "Boss Rook rules the biggest scrap clan by being the loudest thing in it." }
  };
  var BUILDING_ROLE = {
    yard: "Builds every other structure. Lose it and the base stops growing.",
    power: "Keeps the lights on. Run short and everything builds at half speed.",
    refinery: `Harvesters unload ${RESOURCE_NAME} here; it pays out as credits.`,
    barracks: "Trains infantry, snipers, healers and heroes.",
    turret: "Fixed gun covering the approach. Good against vehicles.",
    lightFactory: "Builds fast, light vehicles.",
    radar: "Lights up the minimap and unlocks long-range weapons.",
    heavyFactory: "Builds tanks, artillery and harvesters.",
    repairPad: "Park damaged vehicles on it to patch them up, for a price.",
    rocketTurret: "Long-range rocket battery. Outranges most attackers.",
    techCenter: "Research upgrades; unlocks heroes and super-heavies.",
    uplink: "Concord superweapon. Charges for five minutes, then calls an orbital strike down on any point (Q, then click).",
    stormHeart: "Shardbound superweapon. Charges for five minutes, then calls a full-strength crystal storm anywhere (Q, then click).",
    scrapHive: "Reclaimer superweapon. Charges for five minutes, then sends a drone swarm to strip enemy machines and pay you for the scrap (Q, then click).",
    airfield: "Builds aircraft, and patches up the ones parked on it.",
    flakTurret: "Anti-aircraft gun: shreds anything in the air, and can't touch anything on the ground.",
    wall: "A concrete barrier. Cheap, tough, and it stops anything on foot or wheels until it's knocked down.",
    gate: "Opens for your side and your allies; enemies have to break it down to get through.",
    silo: "Stores 2,000 credits. When storage fills up, harvesters slow down and then wait.",
    outpost: "A deployed Outpost Truck: a forward refinery with room to build around it. Pack it up (Q) to move on.",
    deepDrill: "A deployed Drill Rig. Mines the field it stands on straight into the account, no harvester. Pack it up (Q) to move on.",
    seedSpire: "Shardbound only. Planted in the sand, it grows new crystal on the sand around it."
  };
  var WEAPON_LABELS = {
    rifle: "Service rifle",
    mg: "Machine gun",
    raiderGun: "Twin SMGs",
    gunRockets: "Rocket pods",
    bombs: "Bomb bay",
    flak: "Quad flak cannon",
    cannon: "105mm cannon",
    rocket: "Rocket launcher",
    artilleryShell: "Howitzer",
    turretGun: "Turret cannon",
    turretRocket: "Rocket battery",
    shardRifle: "Shard rifle",
    shardRepeater: "Shard repeater",
    prismBeam: "Prism lance",
    resonance: "Resonance wave",
    scattergun: "Scattergun",
    flamer: "Flamethrower",
    autocannon: "Autocannon",
    mortar: "Scrap mortar",
    marksmanRifle: "Marksman rifle",
    lancerBeam: "Lancer beam",
    deadeyeRifle: "Long gun",
    twinCannon: "Twin cannons",
    monolithBeam: "Storm beam",
    vancePistols: "Twin pistols",
    seerBeam: "Seer's beam",
    rookCannon: "Hand cannon",
    scrapCannon: "Scrap cannon"
  };
  var ARMOR_LABELS = { infantry: "Infantry", light: "Light armour", heavy: "Heavy armour", building: "Structure" };
  var SERIAL_PREFIX = { concord: "CON", shardbound: "SHB", reclaimers: "RCL" };
  var HARVEST_STATUS = {
    idle: "Idle",
    toField: "Heading to the field",
    harvesting: "Harvesting",
    toRefinery: "Returning to refinery",
    waitDock: "Waiting to unload",
    unloading: "Unloading"
  };
  var serialOf = (faction, id) => `${SERIAL_PREFIX[faction]}-${String(id).padStart(4, "0")}`;
  var portraitOf = (kind, team) => `assets/portraits/${kind}_${team}.png`;
  var logoOf = (faction) => `assets/logos/${faction}.svg`;
  var fmt = (n) => (Math.round(n * 10) / 10).toString();
  function unitStatus(g, u) {
    if (u.kind === "harvester") return `${HARVEST_STATUS[u.harvest]} \xB7 ${Math.floor(u.cargo)}/${HARVESTER.capacity} ${RESOURCE_NAME}`;
    const hero = HEROES[u.kind];
    const busy = u.order === "attack" || u.order === "attackMove" || u.targetId !== null ? "Engaging" : u.order === "move" ? "Moving" : "Holding position";
    if (hero && u.owner === g.local) return `${busy} \xB7 ${hero.ability} ${u.abilityCd > 0 ? `in ${Math.ceil(u.abilityCd)}s` : "ready (Q)"}`;
    return busy;
  }
  function unitCard(g, u) {
    const s = UNIT_STATS[u.kind];
    const faction = g.factions[u.owner];
    const stats = [];
    if (s.weapon) {
      const w = weapon(s.weapon);
      stats.push({ label: "Weapon", value: WEAPON_LABELS[s.weapon] });
      stats.push({ label: "Damage", value: `${w.damage}${w.splash ? " area" : ""} / ${fmt(w.cooldown)}s` });
      stats.push({ label: "Range", value: `${fmt(w.range)} tiles` });
    } else {
      const healer = HEALERS[u.kind];
      if (healer) {
        stats.push({ label: "Heals", value: healer.treats === "all" ? "Everyone" : healer.treats === "vehicles" ? "Vehicles" : "Infantry" });
        stats.push({ label: "Rate", value: `${fmt(healer.amount / healer.interval)} hp/s` });
      } else if (u.kind === "harvester") {
        stats.push({ label: "Carries", value: `${HARVESTER.capacity} ${RESOURCE_NAME}` });
      }
    }
    stats.push({ label: "Speed", value: `${fmt(s.speed)} tiles/s` });
    stats.push({ label: "Armour", value: ARMOR_LABELS[s.armor] });
    return {
      kind: u.kind,
      name: s.label,
      faction: FACTIONS[faction].label,
      factionId: faction,
      serial: serialOf(faction, u.id),
      role: UNIT_DOSSIER[u.kind].role,
      bio: UNIT_DOSSIER[u.kind].bio,
      enemy: u.owner !== g.local,
      team: u.owner,
      portrait: portraitOf(u.kind, u.owner),
      hp: Math.ceil(u.hp),
      maxHp: s.maxHp,
      rank: u.rank,
      rankName: u.rank > 0 ? RANK_NAMES[u.rank] : "Recruit",
      xp: u.rank >= MAX_RANK ? 1 : Math.min(1, u.xp / xpPerRank(u)),
      stats,
      status: u.owner === g.local ? unitStatus(g, u) : "Hostile"
    };
  }
  function buildingCard(g, b) {
    const s = BUILDING_STATS[b.kind];
    const faction = g.factions[b.owner];
    const turret = s.weapon !== null;
    const stats = [];
    if (s.weapon) {
      const w = weapon(s.weapon);
      stats.push({ label: "Weapon", value: WEAPON_LABELS[s.weapon] });
      stats.push({ label: "Damage", value: `${w.damage} / ${fmt(w.cooldown)}s` });
      stats.push({ label: "Range", value: `${fmt(w.range)} tiles` });
    }
    if (s.power !== 0) stats.push({ label: "Power", value: s.power > 0 ? `+${s.power}` : `${s.power}` });
    stats.push({ label: "Size", value: `${s.w} \xD7 ${s.h}` });
    const enemy = b.owner !== g.local;
    return {
      kind: b.kind,
      name: s.label,
      faction: FACTIONS[faction].label,
      factionId: faction,
      serial: serialOf(faction, b.id),
      role: BUILDING_ROLE[b.kind],
      enemy,
      team: b.owner,
      picture: turret ? portraitOf(b.kind, b.owner) : `assets/buildings/${faction}/${b.kind}_${b.owner}.png`,
      turret,
      hp: Math.ceil(b.hp),
      maxHp: s.maxHp,
      stats,
      status: enemy ? "Hostile" : b.repairing ? "Repairing" : b.hp < s.maxHp * 0.25 ? "On fire" : b.hp < s.maxHp * 0.5 ? "Damaged" : "Operational"
    };
  }
  function groupSelection(g, units) {
    const groups = /* @__PURE__ */ new Map();
    for (const u of units) {
      const e = groups.get(u.kind) ?? { count: 0, health: 0, team: u.owner };
      e.count++;
      e.health += u.hp / UNIT_STATS[u.kind].maxHp;
      groups.set(u.kind, e);
    }
    return [...groups].map(([kind, e]) => ({ kind, name: UNIT_STATS[kind].label, count: e.count, health: e.health / e.count, portrait: portraitOf(kind, e.team), team: e.team })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }

  // src/infocard.ts
  var InfoCard = class {
    el;
    key = "";
    /** Live bits of the current card, refreshed every frame. */
    live = null;
    constructor(el2) {
      this.el = el2;
      const sync = () => document.body.style.setProperty("--card-h", `${this.el.offsetHeight}px`);
      if (typeof ResizeObserver === "function") new ResizeObserver(sync).observe(el2);
      sync();
    }
    update(g) {
      const b = g.buildings.find((x) => x.id === g.selectedBuilding);
      const units = b ? [] : [...g.selection].map((id) => g.units.find((u) => u.id === id)).filter((u) => !!u);
      const key = b ? `b${b.id}` : units.length === 1 ? `u${units[0].id}` : units.length > 1 ? `g${groupSelection(g, units).map((e) => `${e.kind}${e.count}`).join()}` : "";
      if (key !== this.key) {
        this.key = key;
        this.el.replaceChildren();
        this.live = null;
        this.el.className = "";
        if (b) this.buildBuilding(g, b.id);
        else if (units.length === 1) this.buildUnit(g, units[0].id);
        else if (units.length > 1) this.buildGroup(g, units);
        this.el.style.display = key ? "block" : "none";
      }
      this.live?.();
    }
    head(faction, serial, enemy, factionId) {
      const head = div("card-head");
      const name = span("card-faction", enemy ? `Hostile \xB7 ${faction}` : faction);
      if (factionId) name.prepend(emblem(factionId));
      head.append(name, span("card-serial", serial));
      return head;
    }
    picture(src, cls, fallback) {
      const box2 = div(`card-pic ${cls}`);
      const img = document.createElement("img");
      img.alt = "";
      img.decoding = "async";
      img.src = src;
      img.onerror = () => {
        img.remove();
        box2.classList.add("nopic");
        box2.textContent = fallback;
      };
      box2.append(img);
      return box2;
    }
    buildUnit(g, id) {
      const u = g.units.find((x) => x.id === id);
      const c = unitCard(g, u);
      this.el.className = `card${c.enemy ? " enemy" : ""}${c.kind in HERO_KINDS ? " hero" : ""}`;
      const pic = this.picture(c.portrait, "", c.name.slice(0, 2));
      const chevrons = span("card-chevrons", "");
      pic.append(chevrons);
      const name = div("card-name", c.name);
      const role = div("card-role", c.role);
      const hp = bar("hp");
      const rank = div("card-rankline");
      const rankName = span("card-rank", "");
      const xp = bar("xp");
      rank.append(rankName, xp.el);
      const main = div("card-main");
      main.append(name, role, hp.el, rank, statList(c.stats));
      const body = div("card-body");
      body.append(pic, main);
      const bio = div("card-bio", c.bio);
      const status = div("card-status", "");
      this.el.append(this.head(c.faction, c.serial, c.enemy, c.factionId), body, bio, status);
      let lastRank = -1;
      this.live = () => {
        const now = g.units.find((x) => x.id === id);
        if (!now) return;
        const card = unitCard(g, now);
        hp.set(card.hp / card.maxHp, `${card.hp} / ${card.maxHp}`);
        if (card.rank !== lastRank) {
          lastRank = card.rank;
          rankName.textContent = card.rankName;
          chevrons.textContent = "\u25B2".repeat(card.rank);
          rankName.classList.toggle("ranked", card.rank > 0);
        }
        xp.set(card.xp, card.rank >= MAX_RANK ? "Max" : `${Math.floor(card.xp * 100)}%`);
        setText(status, card.status);
      };
    }
    buildBuilding(g, id) {
      const b = g.buildings.find((x) => x.id === id);
      const c = buildingCard(g, b);
      this.el.className = `card${c.enemy ? " enemy" : ""}`;
      const pic = this.picture(c.picture, c.turret ? "" : "building", c.name.slice(0, 2));
      const hp = bar("hp");
      const main = div("card-main");
      main.append(div("card-name", c.name), div("card-role", c.role), hp.el, statList(c.stats));
      const body = div("card-body");
      body.append(pic, main);
      const status = div("card-status", "");
      this.el.append(this.head(c.faction, c.serial, c.enemy, c.factionId), body, status);
      this.live = () => {
        const now = g.buildings.find((x) => x.id === id);
        if (!now) return;
        const card = buildingCard(g, now);
        hp.set(card.hp / card.maxHp, `${card.hp} / ${card.maxHp}`);
        setText(status, card.status);
      };
    }
    buildGroup(g, units) {
      const groups = groupSelection(g, units);
      const enemy = units.every((u) => u.owner !== g.local);
      this.el.className = `card roster${enemy ? " enemy" : ""}`;
      const head = div("card-head");
      head.append(span("card-faction", `${units.length} selected`), span("card-serial", "Click: only these \xB7 Shift: drop"));
      const grid = div("roster-grid");
      const bars = [];
      for (const e of groups) {
        const tile = document.createElement("button");
        tile.type = "button";
        tile.className = "roster-tile";
        tile.title = `${e.count} \xD7 ${e.name}`;
        tile.append(this.picture(e.portrait, "", e.name.slice(0, 2)), span("roster-count", `${e.count}`));
        const hb = bar("hp");
        tile.append(hb.el);
        bars.push({ kind: e.kind, set: hb.set });
        tile.addEventListener("click", (ev) => {
          const keep = (u) => ev.shiftKey ? u.kind !== e.kind : u.kind === e.kind;
          g.selection = new Set([...g.selection].filter((uid) => {
            const u = g.units.find((x) => x.id === uid);
            return !!u && keep(u);
          }));
        });
        grid.append(tile);
      }
      this.el.append(head, grid);
      this.live = () => {
        const now = [...g.selection].map((uid) => g.units.find((u) => u.id === uid)).filter((u) => !!u);
        const fresh = groupSelection(g, now);
        for (const b of bars) {
          const e = fresh.find((x) => x.kind === b.kind);
          if (e) b.set(e.health, "");
        }
      };
    }
  };
  var HERO_KINDS = { vance: 1, seer: 1, rook: 1 };
  function div(cls, text) {
    const d = document.createElement("div");
    d.className = cls;
    if (text !== void 0) d.textContent = text;
    return d;
  }
  function span(cls, text) {
    const s = document.createElement("span");
    s.className = cls;
    s.textContent = text;
    return s;
  }
  function setText(el2, text) {
    if (el2.textContent !== text) el2.textContent = text;
  }
  function bar(kind) {
    const el2 = div(`card-bar ${kind}`);
    const fill = document.createElement("i");
    const label = span("card-bar-label", "");
    el2.append(fill, label);
    let last = "";
    const set = (frac, text) => {
      const f = Math.max(0, Math.min(1, frac));
      const key = `${f.toFixed(3)}|${text}`;
      if (key === last) return;
      last = key;
      fill.style.width = `${f * 100}%`;
      if (kind === "hp") el2.dataset.level = f > 0.5 ? "ok" : f > 0.25 ? "warn" : "bad";
      label.textContent = text;
    };
    return { el: el2, set };
  }
  function statList(stats) {
    const dl = document.createElement("dl");
    dl.className = "card-stats";
    for (const s of stats) {
      const dt = document.createElement("dt");
      dt.textContent = s.label;
      const dd = document.createElement("dd");
      dd.textContent = s.value;
      dl.append(dt, dd);
    }
    return dl;
  }
  function emblem(faction) {
    const img = document.createElement("img");
    img.className = "emblem";
    img.src = logoOf(faction);
    img.alt = "";
    img.draggable = false;
    return img;
  }

  // src/maps.ts
  var MAP_POOL = [
    { seed: 5, name: "Landfall Plateau", blurb: "Where the colony began. Even ground, fair fields \u2014 a good first fight." },
    { seed: 468, name: "The Glass Sea", blurb: "The richest crystal on Vitrea. Economy wins here; so does greed." },
    { seed: 592, name: "Dry Wells", blurb: "Barely any crystal. Every field is worth fighting for." },
    { seed: 491, name: "The Shatterline", blurb: "A maze of cliffs and narrow passes. Hold the chokepoints." },
    { seed: 8, name: "Ashfall Flats", blurb: "Wide open sand, nowhere to hide. Fast raids and big armies." },
    { seed: 265, name: "Iron Mesa", blurb: "Mostly bare rock: room to build, little to mine." },
    { seed: 230, name: "Thousand Veins", blurb: "Small fields everywhere. Spread out and keep your harvesters busy." },
    { seed: 95, name: "Broken Teeth", blurb: "Scarce crystal behind jagged cliffs. A slow, hard war." }
  ];
  var mapName = (seed) => MAP_POOL.find((m) => m.seed === seed)?.name ?? `Map #${seed}`;
  function mapTraits(m) {
    let crystal = 0;
    let rock = 0;
    let cliff = 0;
    let coreTiles = 0;
    const n = m.w * m.h;
    for (let i = 0; i < n; i++) {
      if (m.vein[i] === Vein.Core) coreTiles++;
      else crystal += m.spice[i];
      if (m.terrain[i] === Terrain.Rock) rock++;
      else if (m.terrain[i] === Terrain.Cliff) cliff++;
    }
    return { crystal: Math.round(crystal / 1e3), deposits: Math.round(coreTiles / 13), rock: Math.round(rock / n * 100), cliff: Math.round(cliff / n * 100), fields: m.fields.length };
  }
  function describeTraits(t) {
    const crystal = t.crystal >= 110 ? "Rich crystal" : t.crystal <= 55 ? "Scarce crystal" : "Fair crystal";
    const cliffs = t.cliff >= 11 ? "Many cliffs" : t.cliff <= 1 ? "No cliffs" : "Some cliffs";
    const ground = t.rock >= 38 ? "Rocky" : t.rock <= 17 ? "Open sand" : "Mixed ground";
    return [crystal, `${t.fields} fields`, `${t.deposits} core deposits`, cliffs, ground];
  }
  var SIDE_COLOURS = [
    [47, 111, 176],
    [192, 57, 43],
    [46, 154, 110],
    [142, 82, 184]
  ];
  function previewPixels(m, bases) {
    const out = new Uint8ClampedArray(m.w * m.h * 4);
    const COLOURS = {
      [Terrain.Sand]: [158, 145, 124],
      [Terrain.Rock]: [96, 90, 82],
      [Terrain.Cliff]: [46, 43, 40]
    };
    for (let i = 0; i < m.w * m.h; i++) {
      let [r, g, b] = COLOURS[m.terrain[i]] ?? COLOURS[Terrain.Sand];
      const s = m.spice[i];
      if (s > 0) {
        const v = m.vein[i];
        const [tr, tg, tb] = v === Vein.Core ? [255, 196, 80] : v === Vein.Dense ? [120, 128, 245] : v === Vein.StormGlass ? [250, 100, 70] : [111, 227, 240];
        const k = v === Vein.Core ? 1 : Math.min(1, 0.45 + s / 900);
        r += (tr - r) * k;
        g += (tg - g) * k;
        b += (tb - b) * k;
      }
      out.set([r, g, b, 255], i * 4);
    }
    const mark = (p, colour) => {
      for (let y = p.y - 1; y <= p.y + 3; y++) {
        for (let x = p.x - 1; x <= p.x + 3; x++) {
          if (x < 0 || y < 0 || x >= m.w || y >= m.h) continue;
          const edge = x === p.x - 1 || y === p.y - 1 || x === p.x + 3 || y === p.y + 3;
          out.set(edge ? [20, 18, 16, 255] : [...colour, 255], (y * m.w + x) * 4);
        }
      }
    };
    for (const b of bases ?? [
      { at: m.start, colour: SIDE_COLOURS[0] },
      { at: m.enemyStart, colour: SIDE_COLOURS[1] }
    ])
      mark(b.at, b.colour);
    return out;
  }

  // src/music.ts
  var BPM = 96;
  var EIGHTH = 60 / BPM / 2;
  var CHORD_EIGHTHS = 16;
  var PROGRESSION = [
    { name: "Am", notes: [57, 60, 64] },
    { name: "F", notes: [53, 57, 60] },
    { name: "C", notes: [48, 52, 55] },
    { name: "G", notes: [55, 59, 62] },
    { name: "Am", notes: [57, 60, 64] },
    { name: "F", notes: [53, 57, 60] },
    { name: "Dm", notes: [50, 53, 57] },
    { name: "E", notes: [52, 56, 59] }
  ];
  var CHIME_NOTES = [81, 84, 86, 88, 91, 93, 96];
  var midiToHz = (n) => 440 * 2 ** ((n - 69) / 12);
  function rand2(beat, salt) {
    let h = beat * 374761393 + salt * 668265263 | 0;
    h = Math.imul(h ^ h >>> 13, 1274126177);
    return ((h ^ h >>> 16) >>> 0) / 4294967296;
  }
  var chimes = (beat) => rand2(beat, 1) < (beat % 2 === 0 ? 0.22 : 0.08);
  var chordAt = (beat) => PROGRESSION[Math.floor(beat / CHORD_EIGHTHS) % PROGRESSION.length];
  function composeBeat(beat) {
    const chord = chordAt(beat);
    const step = beat % CHORD_EIGHTHS;
    const inBar = beat % 8;
    const calm = [];
    const battle = [];
    if (step === 0) calm.push({ kind: "pad", notes: chord.notes, dur: CHORD_EIGHTHS * EIGHTH + 1.2 });
    if (chimes(beat) && !chimes(beat - 1)) {
      calm.push({ kind: "chime", note: CHIME_NOTES[Math.floor(rand2(beat, 2) * CHIME_NOTES.length)] });
    }
    const root = chord.notes[0] - 24;
    battle.push({ kind: "bass", note: inBar === 6 ? root + 7 : root, accent: inBar === 0 || inBar === 3 });
    if (inBar === 0 || inBar === 3 || inBar === 5) battle.push({ kind: "kick" });
    if (inBar === 2 || inBar === 6) battle.push({ kind: "snare" });
    battle.push({ kind: "hat", open: inBar === 7 });
    return { calm, battle };
  }
  function heatStep(heat, hits, dt) {
    return Math.min(1, Math.max(0, heat + hits * 0.035 - dt * 0.07));
  }
  var Player = class {
    ctx;
    out;
    calm;
    battle;
    echo;
    noise;
    beat = 0;
    nextAt = 0;
    heat = 0;
    level = 0;
    stopped = false;
    constructor(ctx, dest) {
      this.ctx = ctx;
      this.out = ctx.createGain();
      this.out.gain.value = 0;
      this.out.gain.setTargetAtTime(1, ctx.currentTime, 2);
      this.out.connect(dest);
      this.calm = ctx.createGain();
      this.battle = ctx.createGain();
      this.battle.gain.value = 0;
      this.calm.connect(this.out);
      this.battle.connect(this.out);
      this.echo = ctx.createDelay(1);
      this.echo.delayTime.value = EIGHTH * 3;
      const feedback = ctx.createGain();
      feedback.gain.value = 0.38;
      const tone = ctx.createBiquadFilter();
      tone.type = "lowpass";
      tone.frequency.value = 3200;
      this.echo.connect(tone).connect(feedback).connect(this.echo);
      tone.connect(this.calm);
      const len = ctx.sampleRate;
      this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = this.noise.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      this.nextAt = ctx.currentTime + 0.1;
    }
    /** Call every frame with how many shots and blasts the player saw this frame. */
    update(dt, hits) {
      if (this.stopped) return;
      this.heat = heatStep(this.heat, hits, dt);
      const target = this.heat > 0.12 ? Math.min(1, (this.heat - 0.12) * 1.6) : 0;
      this.level += (target - this.level) * Math.min(1, dt * (target > this.level ? 1.5 : 0.35));
      const t = this.ctx.currentTime;
      this.battle.gain.setTargetAtTime(this.level * 0.9, t, 0.1);
      this.calm.gain.setTargetAtTime(1 - this.level * 0.45, t, 0.2);
      if (this.nextAt < t - 0.25) this.nextAt = t + 0.05;
      while (this.nextAt < t + 0.25) {
        const { calm, battle } = composeBeat(this.beat);
        for (const e of calm) this.play(e, this.nextAt, this.calm);
        if (this.level > 0.02) for (const e of battle) this.play(e, this.nextAt, this.battle);
        this.beat++;
        this.nextAt += EIGHTH;
      }
    }
    /** Victory or defeat: let the loop go and play a short closing phrase. */
    finish(won) {
      if (this.stopped) return;
      this.stopped = true;
      const t = this.ctx.currentTime + 0.1;
      this.calm.gain.setTargetAtTime(0, t, 0.6);
      this.battle.gain.setTargetAtTime(0, t, 0.3);
      const stinger = this.ctx.createGain();
      stinger.connect(this.out);
      const phrase = won ? [[57, 60, 64], [53, 57, 60], [55, 59, 62], [57, 61, 64, 69]] : [[57, 60, 64], [56, 59, 64], [53, 57, 60], [52, 57, 60, 64]];
      phrase.forEach((notes, i) => this.pad(notes, t + i * 0.55, i === phrase.length - 1 ? 3.5 : 0.7, stinger, 0.09));
      this.out.gain.setTargetAtTime(0, t + 4, 1.2);
    }
    play(e, at, bus) {
      switch (e.kind) {
        case "pad":
          return this.pad(e.notes, at, e.dur, bus, 0.035);
        case "chime":
          return this.chime(e.note, at, bus);
        case "bass":
          return this.bass(e.note, at, e.accent, bus);
        case "kick":
          return this.kick(at, bus);
        case "snare":
          return this.snare(at, bus);
        case "hat":
          return this.hat(at, e.open, bus);
      }
    }
    /** Warm pad: two slightly detuned saws per note, softened, swelling in and out. */
    pad(notes, at, dur, bus, vol) {
      const ctx = this.ctx;
      const g = ctx.createGain();
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.setValueAtTime(700, at);
      f.frequency.linearRampToValueAtTime(1100, at + dur * 0.5);
      f.frequency.linearRampToValueAtTime(600, at + dur);
      g.gain.setValueAtTime(1e-4, at);
      g.gain.linearRampToValueAtTime(vol, at + Math.min(1.4, dur * 0.3));
      g.gain.setValueAtTime(vol, at + dur - Math.min(1.2, dur * 0.3));
      g.gain.linearRampToValueAtTime(1e-4, at + dur);
      f.connect(g).connect(bus);
      for (const n of notes) {
        for (const detune of [-7, 7]) {
          const o = ctx.createOscillator();
          o.type = "sawtooth";
          o.frequency.value = midiToHz(n - 12);
          o.detune.value = detune;
          o.connect(f);
          o.start(at);
          o.stop(at + dur + 0.05);
        }
      }
    }
    /** A glass chime: a sine with a faint metallic overtone, ringing into the echo. */
    chime(note, at, bus) {
      const ctx = this.ctx;
      const g = ctx.createGain();
      g.gain.setValueAtTime(1e-4, at);
      g.gain.exponentialRampToValueAtTime(0.05, at + 0.01);
      g.gain.exponentialRampToValueAtTime(1e-4, at + 1.6);
      g.connect(bus);
      g.connect(this.echo);
      for (const [mult, v] of [[1, 1], [2.76, 0.25]]) {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = midiToHz(note) * mult;
        const og = ctx.createGain();
        og.gain.value = v;
        o.connect(og).connect(g);
        o.start(at);
        o.stop(at + 1.7);
      }
    }
    bass(note, at, accent, bus) {
      const ctx = this.ctx;
      const o = ctx.createOscillator();
      o.type = "square";
      o.frequency.value = midiToHz(note);
      const f = ctx.createBiquadFilter();
      f.type = "lowpass";
      f.frequency.setValueAtTime(accent ? 600 : 380, at);
      f.frequency.exponentialRampToValueAtTime(140, at + EIGHTH * 0.9);
      const g = ctx.createGain();
      const v = accent ? 0.11 : 0.07;
      g.gain.setValueAtTime(v, at);
      g.gain.exponentialRampToValueAtTime(1e-4, at + EIGHTH * 0.95);
      o.connect(f).connect(g).connect(bus);
      o.start(at);
      o.stop(at + EIGHTH);
    }
    kick(at, bus) {
      const ctx = this.ctx;
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(130, at);
      o.frequency.exponentialRampToValueAtTime(42, at + 0.14);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.45, at);
      g.gain.exponentialRampToValueAtTime(1e-4, at + 0.3);
      o.connect(g).connect(bus);
      o.start(at);
      o.stop(at + 0.32);
    }
    snare(at, bus) {
      const ctx = this.ctx;
      const n = ctx.createBufferSource();
      n.buffer = this.noise;
      const f = ctx.createBiquadFilter();
      f.type = "bandpass";
      f.frequency.value = 1900;
      f.Q.value = 0.7;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.2, at);
      g.gain.exponentialRampToValueAtTime(1e-4, at + 0.17);
      n.connect(f).connect(g).connect(bus);
      n.start(at, Math.random() * 0.5);
      n.stop(at + 0.2);
      const o = ctx.createOscillator();
      o.type = "triangle";
      o.frequency.setValueAtTime(220, at);
      o.frequency.exponentialRampToValueAtTime(140, at + 0.08);
      const og = ctx.createGain();
      og.gain.setValueAtTime(0.12, at);
      og.gain.exponentialRampToValueAtTime(1e-4, at + 0.1);
      o.connect(og).connect(bus);
      o.start(at);
      o.stop(at + 0.12);
    }
    hat(at, open, bus) {
      const ctx = this.ctx;
      const n = ctx.createBufferSource();
      n.buffer = this.noise;
      const f = ctx.createBiquadFilter();
      f.type = "highpass";
      f.frequency.value = 7500;
      const g = ctx.createGain();
      const len = open ? 0.18 : 0.045;
      g.gain.setValueAtTime(open ? 0.05 : 0.035, at);
      g.gain.exponentialRampToValueAtTime(1e-4, at + len);
      n.connect(f).connect(g).connect(bus);
      n.start(at, Math.random() * 0.5);
      n.stop(at + len + 0.02);
    }
  };

  // src/prefs.ts
  var ACTIONS = {
    stop: { label: "Stop", key: "KeyX" },
    ability: { label: "Hero ability", key: "KeyQ" },
    army: { label: "Select whole army", key: "KeyE" },
    home: { label: "Jump to base", key: "KeyH" },
    ping: { label: "Jump to last attack", key: "Space" },
    health: { label: "Toggle health bars", key: "Backquote" },
    sell: { label: "Sell mode", key: "KeyZ" },
    repair: { label: "Repair mode", key: "KeyC" },
    pause: { label: "Pause", key: "KeyP" },
    mute: { label: "Mute", key: "KeyM" },
    perf: { label: "Performance overlay", key: "F9" },
    controls: { label: "Controls card", key: "Slash" }
  };
  var ACTION_IDS = Object.keys(ACTIONS);
  var RESERVED_KEYS = /* @__PURE__ */ new Set([
    "KeyW",
    "KeyA",
    "KeyS",
    "KeyD",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `Digit${n}`),
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F11",
    "F12",
    ...["R", "T", "Y", "U", "I", "O", "F", "G", "J", "K", "L", "N", "B", "V"].map((k) => `Key${k}`),
    "Equal",
    "Minus",
    "NumpadAdd",
    "NumpadSubtract",
    "Escape",
    "Enter",
    "NumpadEnter",
    "Tab",
    "CapsLock",
    "ShiftLeft",
    "ShiftRight",
    "ControlLeft",
    "ControlRight",
    "AltLeft",
    "AltRight",
    "MetaLeft",
    "MetaRight",
    "ContextMenu"
  ]);
  var DEFAULT_PREFS = {
    master: 0.8,
    music: 0.5,
    effects: 0.8,
    voices: 0.9,
    graphics: "high",
    keys: Object.fromEntries(ACTION_IDS.map((a) => [a, ACTIONS[a].key]))
  };
  var STORE_KEY = "vitrea.prefs";
  var volume = (v, fallback) => typeof v === "number" && Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : fallback;
  function parsePrefs(raw) {
    const p = raw && typeof raw === "object" ? raw : {};
    const keys = { ...DEFAULT_PREFS.keys };
    const stored = p.keys && typeof p.keys === "object" ? p.keys : {};
    for (const a of ACTION_IDS) {
      const k = stored[a];
      if (typeof k === "string" && bindable(k)) keys[a] = k;
    }
    const used = /* @__PURE__ */ new Map();
    for (const a of ACTION_IDS) {
      if (used.has(keys[a])) keys[a] = [ACTIONS[a].key].find((d) => !used.has(d)) ?? "";
      if (keys[a]) used.set(keys[a], a);
    }
    return {
      master: volume(p.master, DEFAULT_PREFS.master),
      music: volume(p.music, DEFAULT_PREFS.music),
      effects: volume(p.effects, DEFAULT_PREFS.effects),
      voices: volume(p.voices, DEFAULT_PREFS.voices),
      graphics: p.graphics === "low" ? "low" : "high",
      keys
    };
  }
  var bindable = (code) => code.length > 0 && !RESERVED_KEYS.has(code);
  function rebind(p, action, code) {
    if (!bindable(code)) return null;
    const keys = { ...p.keys };
    const other = ACTION_IDS.find((a) => a !== action && keys[a] === code);
    if (other) keys[other] = keys[action];
    keys[action] = code;
    return { ...p, keys };
  }
  function keyLabel(code) {
    if (!code) return "\u2014";
    const named = {
      Space: "Space",
      Backquote: "`",
      Slash: "/",
      Backslash: "\\",
      Semicolon: ";",
      Quote: "'",
      Comma: ",",
      Period: ".",
      BracketLeft: "[",
      BracketRight: "]",
      Delete: "Del",
      Insert: "Ins",
      PageUp: "PgUp",
      PageDown: "PgDn",
      Home: "Home",
      End: "End"
    };
    if (named[code]) return named[code];
    const m = /^(?:Key|Digit)(.)$/.exec(code);
    if (m) return m[1];
    if (code.startsWith("Numpad")) return `Num ${code.slice(6)}`;
    return code;
  }
  var current = load();
  var listeners = /* @__PURE__ */ new Set();
  function load() {
    try {
      const s = globalThis.localStorage?.getItem(STORE_KEY);
      return parsePrefs(s ? JSON.parse(s) : null);
    } catch {
      return parsePrefs(null);
    }
  }
  var prefs = () => current;
  var keyFor = (a) => current.keys[a];
  function setPrefs(p) {
    current = parsePrefs(p);
    try {
      globalThis.localStorage?.setItem(STORE_KEY, JSON.stringify(current));
    } catch {
    }
    for (const l of listeners) l(current);
  }
  function onPrefs(l) {
    listeners.add(l);
    return () => listeners.delete(l);
  }

  // src/settingsui.ts
  var box = null;
  var onClosed = null;
  var capturing = null;
  function settingsOpen() {
    return !!box && !box.hidden;
  }
  function openSettings(closed) {
    box = document.getElementById("settings");
    if (!box) return;
    onClosed = closed ?? null;
    render();
    box.hidden = false;
  }
  function closeSettings() {
    if (!box || box.hidden) return;
    capturing = null;
    box.hidden = true;
    onClosed?.();
    onClosed = null;
  }
  var VOLUMES = [
    { key: "master", label: "Master" },
    { key: "music", label: "Music" },
    { key: "effects", label: "Effects" },
    { key: "voices", label: "Voices" }
  ];
  function render() {
    if (!box) return;
    const p = prefs();
    const body = box.querySelector(".settings-body");
    body.replaceChildren();
    const audio = section("Sound");
    for (const v of VOLUMES) {
      const row = document.createElement("label");
      row.className = "settings-row";
      const name = document.createElement("span");
      name.textContent = v.label;
      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = "0";
      slider.max = "100";
      slider.value = String(Math.round(p[v.key] * 100));
      const value = document.createElement("output");
      value.textContent = `${slider.value}%`;
      slider.addEventListener("input", () => {
        value.textContent = `${slider.value}%`;
        setPrefs({ ...prefs(), [v.key]: Number(slider.value) / 100 });
      });
      row.append(name, slider, value);
      audio.append(row);
    }
    const gfx = section("Graphics");
    const choice = document.createElement("div");
    choice.className = "settings-choice";
    for (const [q, label, hint2] of [
      ["high", "High", "Everything on"],
      ["low", "Low", "No smoke, dust, tracks, crystal light, storm clouds or screen shake \u2014 for slower computers"]
    ]) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = `btn ${p.graphics === q ? "" : "ghost"}`;
      b.textContent = label;
      b.title = hint2;
      b.addEventListener("click", () => {
        setPrefs({ ...prefs(), graphics: q });
        render();
      });
      choice.append(b);
    }
    const note = document.createElement("p");
    note.className = "settings-note";
    note.textContent = p.graphics === "low" ? "Low: decorative effects are off." : "High: all effects on.";
    gfx.append(choice, note);
    const keys = section("Keys");
    const grid = document.createElement("div");
    grid.className = "settings-keys";
    for (const a of ACTION_IDS) {
      const name = document.createElement("span");
      name.textContent = ACTIONS[a].label;
      const b = document.createElement("button");
      b.type = "button";
      b.className = `keycap${capturing === a ? " waiting" : ""}`;
      b.textContent = capturing === a ? "Press a key\u2026" : keyLabel(p.keys[a]);
      b.addEventListener("click", () => {
        capturing = capturing === a ? null : a;
        render();
      });
      grid.append(name, b);
    }
    const hint = document.createElement("p");
    hint.className = "settings-note";
    hint.textContent = "Click a key, then press the new one. Keys already used for scrolling, groups, camera spots and building can't be picked; taking another action's key swaps them.";
    keys.append(grid, hint);
    const reset = document.createElement("button");
    reset.type = "button";
    reset.className = "btn ghost";
    reset.textContent = "Reset to defaults";
    reset.addEventListener("click", () => {
      capturing = null;
      setPrefs({ ...DEFAULT_PREFS, keys: { ...DEFAULT_PREFS.keys } });
      render();
    });
    const foot = box.querySelector(".settings-foot");
    foot.querySelector(".settings-reset")?.replaceWith(reset);
    reset.classList.add("settings-reset");
    body.append(audio, gfx, keys);
  }
  function section(title) {
    const s = document.createElement("section");
    const h = document.createElement("h3");
    h.textContent = title;
    s.append(h);
    return s;
  }
  function initSettings() {
    const el2 = document.getElementById("settings");
    if (!el2) return;
    el2.querySelector(".settings-done")?.addEventListener("click", closeSettings);
    window.addEventListener(
      "keydown",
      (e) => {
        if (!settingsOpen()) return;
        if (capturing) {
          e.preventDefault();
          e.stopImmediatePropagation();
          if (e.code === "Escape") {
            capturing = null;
            render();
            return;
          }
          const next = rebind(prefs(), capturing, e.code);
          if (!next) {
            const b = box?.querySelector(".keycap.waiting");
            if (b) b.textContent = `${keyLabel(e.code)} is reserved \u2014 try another`;
            return;
          }
          capturing = null;
          setPrefs(next);
          render();
          return;
        }
        if (e.code === "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          closeSettings();
        }
      },
      true
    );
  }

  // src/perf.ts
  function summarize(samples) {
    const n = samples.length;
    if (n === 0) return { frames: 0, fps: 0, low1: 0, avgFrame: 0, worstFrame: 0, sim: 0, draw: 0, ui: 0 };
    let total = 0;
    let sim = 0;
    let draw = 0;
    let ui = 0;
    let worst = 0;
    for (const s of samples) {
      total += s.interval;
      sim += s.sim;
      draw += s.draw;
      ui += s.ui;
      worst = Math.max(worst, s.interval);
    }
    const sorted = samples.map((s) => s.interval).sort((a, b) => a - b);
    const p99 = sorted[Math.min(n - 1, Math.floor(n * 0.99))];
    return {
      frames: n,
      fps: total > 0 ? n * 1e3 / total : 0,
      low1: p99 > 0 ? 1e3 / p99 : 0,
      avgFrame: total / n,
      worstFrame: worst,
      sim: sim / n,
      draw: draw / n,
      ui: ui / n
    };
  }
  var PerfMeter = class {
    /** The rolling window shown on the overlay. */
    recent = [];
    /** Every frame since record() started, or null when not recording. */
    recording = null;
    window;
    marks = [];
    lastStart = 0;
    constructor(window2 = 120) {
      this.window = window2;
    }
    /** Call at the top of the frame. */
    start(now = performance.now()) {
      this.marks = [now];
    }
    /** Call after each section, in order: simulation, drawing, panels. */
    mark(now = performance.now()) {
      this.marks.push(now);
    }
    /** Call at the end of the frame. */
    end() {
      const [t0, t1 = t0, t2 = t1, t3 = t2] = this.marks;
      const interval = this.lastStart ? t0 - this.lastStart : t3 - t0;
      this.lastStart = t0;
      const s = { interval, sim: t1 - t0, draw: t2 - t1, ui: t3 - t2 };
      this.recent.push(s);
      if (this.recent.length > this.window) this.recent.shift();
      this.recording?.push(s);
    }
    record() {
      this.recording = [];
    }
    stop() {
      const s = summarize(this.recording ?? []);
      this.recording = null;
      return s;
    }
  };
  function graphicsInfo() {
    try {
      const gl = document.createElement("canvas").getContext("webgl");
      const ext = gl?.getExtension("WEBGL_debug_renderer_info");
      const name = gl ? String(ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER)) : "none (WebGL unavailable)";
      return { name, software: !gl || isSoftwareRenderer(name) };
    } catch {
      return { name: "unknown", software: false };
    }
  }
  var isSoftwareRenderer = (name) => /swiftshader|llvmpipe|software|basic render|microsoft basic/i.test(name);

  // src/net/commands.ts
  function own(g, owner, ids) {
    const set = new Set(ids);
    return g.units.filter((u) => set.has(u.id) && u.owner === owner);
  }
  function applyCommand(g, owner, c) {
    const building = (id) => g.buildings.find((b) => b.id === id && b.owner === owner);
    switch (c.t) {
      case "order": {
        const units = own(g, owner, c.units);
        if (c.queue) commandQueueMove(g, units.filter((u) => u.kind !== "harvester"), { x: c.x, y: c.y });
        else orderAt(g, units, c.x, c.y, c.attackMove);
        return null;
      }
      case "attack":
        commandAttack(g, own(g, owner, c.units), c.target);
        return null;
      case "stop":
        commandStop(g, own(g, owner, c.units));
        return null;
      case "build":
        return startStructure(g, c.kind, owner) ? null : "Can't start that building now.";
      case "cancelBuild":
        cancelStructure(g, owner);
        return null;
      case "place": {
        const kind = structureOf(g, owner)?.kind;
        if (placeStructure(g, c.x, c.y, owner)) return null;
        if (kind === "outpost") return "Can't build there: outposts go on clear ground beside crystal you've explored, away from enemy bases";
        if (kind === "deepDrill") return "Can't build there: drills go on a crystal field you've explored, away from enemy bases";
        return "Can't build there: needs clear rock near your base";
      }
      case "train":
        if (!(c.kind in UNIT_STATS)) return null;
        if (queueUnits(g, c.kind, Math.max(1, Math.min(5, c.n)), owner) > 0) return null;
        return walletOf(g, owner).cores < coreCost(c.kind) ? `Needs ${coreCost(c.kind)} glass cores: send a harvester to a core deposit.` : "Can't train that now.";
      case "untrain":
        for (let k = 0; k < Math.max(1, Math.min(5, c.n)); k++) dequeueUnit(g, c.kind, owner);
        return null;
      case "repeat":
        return toggleRepeat(g, c.kind, owner) ? null : "Can't build that now.";
      case "research":
        if (!(c.id in RESEARCH)) return null;
        return startResearch(g, owner, c.id) ? null : researchBlocked(g, owner, c.id) ?? "Can't research that now.";
      case "cancelResearch":
        cancelResearch(g, owner);
        return null;
      case "sell": {
        const b = building(c.building);
        return b ? sellBuilding(g, b, owner) : null;
      }
      case "repair": {
        const b = building(c.building);
        return b ? toggleBuildingRepair(g, b, owner) : null;
      }
      case "rally": {
        const b = building(c.building);
        if (b) setRally(g, b, { x: c.x, y: c.y });
        return null;
      }
      case "ability": {
        const u = own(g, owner, [c.unit])[0];
        return u && HEROES[u.kind] ? useAbility(g, u) : null;
      }
      case "super": {
        const b = building(c.building);
        return b ? fireSuperweapon(g, b, Math.floor(c.x), Math.floor(c.y)) : null;
      }
      case "board": {
        const ship = own(g, owner, [c.ship])[0];
        return ship ? commandBoard(g, own(g, owner, c.units), ship) : null;
      }
      case "unload": {
        let problem = null;
        for (const ship of own(g, owner, c.units)) if (ship.kind === "dropship") problem = unloadShip(g, ship) ?? problem;
        return problem;
      }
      case "wall": {
        const tiles = Array.isArray(c.tiles) ? c.tiles.filter((t) => Number.isInteger(t?.x) && Number.isInteger(t?.y)) : [];
        if (layWall(g, tiles, owner) > 0) return null;
        if (missingFor(g, "wall", owner)) return "Walls need a Barracks.";
        return walletOf(g, owner).credits < 25 ? "Not enough credits for a wall." : "Can't build a wall there: open ground inside your base area.";
      }
      case "deploy": {
        let problem = null;
        for (const u of own(g, owner, c.units)) problem = deployUnit(g, u) ?? problem;
        return problem;
      }
      case "pack": {
        const b = building(c.building);
        return b ? packUp(g, b) : null;
      }
      case "surrender":
        g.result = owner === 0 ? "defeat" : "victory";
        g.resultReason = owner === g.local ? "You surrendered." : "Your opponent surrendered.";
        emit(g, { kind: g.result });
        return null;
    }
  }

  // src/bench.ts
  var BENCH = {
    seed: 7,
    /** Seconds of battle measured. */
    seconds: 40,
    waves: 4,
    /** Seconds between waves. */
    waveGap: 9,
    /** When the storm arrives. */
    stormAt: 4
  };
  var ARMIES = {
    0: ["tank", "tank", "tank", "infantry", "infantry", "infantry", "infantry", "rocketInfantry", "rocketInfantry", "quad", "quad", "artillery"],
    1: ["prismTank", "prismTank", "prismTank", "glasswalker", "glasswalker", "glasswalker", "glasswalker", "rocketInfantry", "rocketInfantry", "skimmer", "skimmer", "resonator"]
  };
  var Benchmark = class {
    /** Battle centre, in world pixels. */
    x;
    y;
    centre;
    wave = 0;
    stormed = false;
    startedAt;
    constructor(g) {
      this.centre = nearestPassable(g.map, { x: Math.floor(g.map.w / 2), y: Math.floor(g.map.h / 2) }) ?? g.map.start;
      this.x = (this.centre.x + 0.5) * TILE;
      this.y = (this.centre.y + 0.5) * TILE;
      this.startedAt = g.time;
    }
    /** Seconds of battle so far. */
    elapsed = 0;
    done = false;
    /** Run the script: send waves, bring the storm, and say when time is up. */
    update(g) {
      this.elapsed = g.time - this.startedAt;
      while (this.wave < BENCH.waves && this.elapsed >= this.wave * BENCH.waveGap) this.sendWave(g, this.wave++);
      if (!this.stormed && this.elapsed >= BENCH.stormAt) {
        this.stormed = true;
        const c = this.centre;
        spawnStorm(g, { x: c.x, y: c.y }).age = STORMS.buildUp;
      }
      if (this.elapsed >= BENCH.seconds) this.done = true;
    }
    sendWave(g, n) {
      for (const owner of [PLAYER, ENEMY]) {
        const side = owner === PLAYER ? -1 : 1;
        const ids = [];
        ARMIES[owner].forEach((kind, i) => {
          const want = { x: this.centre.x + side * (10 + i % 3), y: this.centre.y - 5 + Math.floor(i / 3) * 3 + n % 2 };
          const at = nearestPassable(g.map, want);
          if (at) ids.push(spawnUnit(g, kind, at.x, at.y, owner).id);
        });
        applyCommand(g, owner, { t: "order", units: ids, x: this.centre.x - side * 10, y: this.centre.y, attackMove: true });
      }
    }
  };

  // src/net/chat.ts
  var CHAT_MAX = 200;
  var CHAT_BURST = 5;
  var CHAT_WINDOW = 8;
  function cleanChat(text) {
    if (typeof text !== "string") return null;
    const tidy = text.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, CHAT_MAX);
    return tidy || null;
  }
  var ChatLimiter = class {
    times = [];
    allow(now) {
      this.times = this.times.filter((t) => now - t < CHAT_WINDOW);
      if (this.times.length >= CHAT_BURST) return false;
      this.times.push(now);
      return true;
    }
  };
  function typingIn(target) {
    const el2 = target;
    return !!el2 && (el2.tagName === "INPUT" || el2.tagName === "TEXTAREA" || !!el2.isContentEditable);
  }

  // src/input.ts
  var EDGE = 14;
  var FACTORIES = ["barracks", "lightFactory", "heavyFactory", "airfield"];
  var SCROLL_SPEED = 900;
  var DRAG_THRESHOLD = 5;
  var SIDEBAR_WIDTH = 240;
  var Input = class {
    game;
    cam;
    view;
    minimap;
    mouseX = 0;
    mouseY = 0;
    inside = false;
    dragStart = null;
    dragging = false;
    keys = /* @__PURE__ */ new Set();
    /** Last single click on a unit, for double-click detection. */
    lastClick = { kind: null, time: 0 };
    /** Structure being placed, if the player is in placement mode. */
    placing = null;
    /** Sell / repair mode: the next left-clicks on your buildings sell or repair them. */
    mode = null;
    /** Targeting mode: which superweapon is being aimed. */
    aiming = null;
    /** Wall mode: where the drag started (tile). */
    wallFrom = null;
    /** Scroll when the mouse touches the screen edge (a start-menu option). */
    edgeScroll = true;
    /** Health bars on everything: toggled with ` and shown while Alt is held. */
    alwaysHealth = false;
    /** Camera bookmarks: Shift+F1-F4 to set, F1-F4 to jump. */
    bookmarks = [null, null, null, null];
    /** Sends a command for the local player (set by main: applied at once offline, sent over the network online). */
    issue = () => {
    };
    lastArmyKey = 0;
    constructor(game, cam, view, minimap) {
      this.game = game;
      this.cam = cam;
      this.view = view;
      this.minimap = minimap;
      view.addEventListener("contextmenu", (e) => e.preventDefault());
      minimap.addEventListener("contextmenu", (e) => e.preventDefault());
      view.addEventListener("mousedown", (e) => this.onDown(e));
      window.addEventListener("mousemove", (e) => this.onMove(e));
      window.addEventListener("mouseup", (e) => this.onUp(e));
      view.addEventListener("mouseenter", () => this.inside = true);
      view.addEventListener("mouseleave", () => this.inside = false);
      window.addEventListener("blur", () => {
        this.keys.clear();
        this.inside = false;
      });
      window.addEventListener("keydown", (e) => {
        if (typingIn(e.target)) return;
        this.keys.add(e.key.toLowerCase());
        this.onHotkey(e);
        if (e.key === "Escape") {
          if (this.placing) this.placing = null;
          else if (this.mode) this.mode = null;
          else {
            this.game.selection.clear();
            this.game.selectedBuilding = null;
          }
        }
        if (e.key.startsWith("Arrow")) e.preventDefault();
      });
      window.addEventListener("keyup", (e) => this.keys.delete(e.key.toLowerCase()));
      const miniNav = (e) => {
        const p = this.minimapToWorld(e);
        if (e.buttons & 1) this.centreOn(p.x, p.y);
      };
      minimap.addEventListener("mousedown", (e) => {
        const p = this.minimapToWorld(e);
        if (e.button === 2) this.orderAt(Math.floor(p.x / TILE), Math.floor(p.y / TILE), e.ctrlKey);
        else miniNav(e);
      });
      minimap.addEventListener("mousemove", miniNav);
    }
    get drag() {
      if (!this.dragging || !this.dragStart) return null;
      return { x0: this.dragStart.x, y0: this.dragStart.y, x1: this.mouseX, y1: this.mouseY };
    }
    /** Top-left tile for the structure being placed, centred on the mouse. */
    placementOrigin(kind) {
      const { w, h } = BUILDING_STATS[kind];
      return {
        tx: Math.floor((this.mouseX + this.cam.x) / TILE) - Math.floor((w - 1) / 2),
        ty: Math.floor((this.mouseY + this.cam.y) / TILE) - Math.floor((h - 1) / 2)
      };
    }
    /** The mouse in world pixels. */
    get mouseWorld() {
      return { x: this.mouseX + this.cam.x, y: this.mouseY + this.cam.y };
    }
    mouseTile() {
      return { x: Math.floor((this.mouseX + this.cam.x) / TILE), y: Math.floor((this.mouseY + this.cam.y) / TILE) };
    }
    /** Footprint preview for the renderer while placing. */
    get ghost() {
      if (this.mode === "wall") {
        const tiles = this.wallFrom ? wallLine(this.wallFrom, this.mouseTile()) : [this.mouseTile()];
        return tiles.map((t) => ({ x: t.x, y: t.y, ok: canPlace(this.game, "wall", t.x, t.y, this.game.local) }));
      }
      if (!this.placing) {
        const rig = selectedUnits(this.game).find((u) => DEPLOYS[u.kind]);
        return rig ? deploySpot(this.game, rig)?.tiles ?? null : null;
      }
      if (!this.inside) return null;
      const { tx, ty } = this.placementOrigin(this.placing);
      return placementTiles(this.game, this.placing, tx, ty, this.game.local);
    }
    screenPos(e) {
      const r = this.view.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    minimapToWorld(e) {
      const r = this.minimap.getBoundingClientRect();
      const mm = this.minimap;
      const m = this.game.map;
      const w = mm.clientWidth || r.width;
      const h = mm.clientHeight || r.height;
      return {
        x: Math.min(1, Math.max(0, (e.clientX - r.left - mm.clientLeft) / w)) * m.w * TILE,
        y: Math.min(1, Math.max(0, (e.clientY - r.top - mm.clientTop) / h)) * m.h * TILE
      };
    }
    onDown(e) {
      const p = this.screenPos(e);
      if (this.mode === "target") {
        if (e.button === 0 && this.aiming !== null) {
          this.issue({ t: "super", building: this.aiming, x: Math.floor((p.x + this.cam.x) / TILE), y: Math.floor((p.y + this.cam.y) / TILE) });
        }
        this.mode = null;
        this.aiming = null;
        return;
      }
      if (this.mode === "wall") {
        if (e.button === 2) {
          this.mode = null;
          this.wallFrom = null;
          return;
        }
        if (e.button === 0) this.wallFrom = { x: Math.floor((p.x + this.cam.x) / TILE), y: Math.floor((p.y + this.cam.y) / TILE) };
        return;
      }
      if (this.mode) {
        if (e.button === 2) {
          this.mode = null;
          return;
        }
        if (e.button !== 0) return;
        const g = this.game;
        const b = buildingAtTile(g, Math.floor((p.x + this.cam.x) / TILE), Math.floor((p.y + this.cam.y) / TILE));
        if (!b || b.owner !== g.local) {
          notify(g, "Click one of your buildings.");
          emit(g, { kind: "error" });
        } else if (this.mode === "sell" && b.kind === "yard") {
          notify(g, "The Construction Yard can't be sold.");
          emit(g, { kind: "error" });
        } else {
          this.issue({ t: this.mode, building: b.id });
        }
        return;
      }
      if (this.placing) {
        if (e.button === 0) {
          const { tx, ty } = this.placementOrigin(this.placing);
          if (canPlace(this.game, this.placing, tx, ty, this.game.local)) {
            this.issue({ t: "place", x: tx, y: ty });
            this.placing = null;
          } else {
            notify(this.game, "Can't build there: needs clear rock near your base");
            announce(this.game, "cannot_deploy", 2);
            emit(this.game, { kind: "error" });
          }
        } else if (e.button === 2) {
          this.placing = null;
        }
        return;
      }
      if (e.button === 0) {
        this.dragStart = p;
        this.dragging = false;
      } else if (e.button === 2) {
        const wx = p.x + this.cam.x;
        const wy = p.y + this.cam.y;
        const enemy = unitAtPoint(this.game, wx, wy);
        const me = this.game.local;
        const factory = this.game.buildings.find((b) => b.id === this.game.selectedBuilding && b.owner === me && FACTORIES.includes(b.kind));
        const selected = selectedUnits(this.game);
        if (factory && selected.length === 0) {
          this.issue({ t: "rally", building: factory.id, x: Math.floor(wx / TILE), y: Math.floor(wy / TILE) });
          this.game.markers.push({ x: wx, y: wy, age: 0, kind: "move" });
          emit(this.game, { kind: "command" });
          return;
        }
        if (e.shiftKey && !(enemy && hostile(this.game, enemy.owner, me)) && selected.length > 0) {
          this.issue({ t: "order", units: selected.map((u) => u.id), x: Math.floor(wx / TILE), y: Math.floor(wy / TILE), queue: true });
          this.game.markers.push({ x: wx, y: wy, age: 0, kind: "move" });
          emit(this.game, { kind: "command" });
          return;
        }
        if (enemy && enemy.owner === me && enemy.kind === "dropship" && selected.some((u) => u.id !== enemy.id)) {
          this.issue({ t: "board", units: selected.map((u) => u.id), ship: enemy.id });
          this.game.markers.push({ x: enemy.x, y: enemy.y, age: 0, kind: "move" });
          emit(this.game, { kind: "command" });
          return;
        }
        if (enemy && hostile(this.game, enemy.owner, me) && visibleAt(this.game, enemy.x, enemy.y)) {
          if (selected.length > 0) emit(this.game, { kind: "command", attack: true });
          this.issue({ t: "attack", units: selected.map((u) => u.id), target: enemy.id });
          this.game.markers.push({ x: enemy.x, y: enemy.y, age: 0, kind: "attack" });
        } else {
          this.orderAt(Math.floor(wx / TILE), Math.floor(wy / TILE), e.ctrlKey);
        }
      }
    }
    onMove(e) {
      const p = this.screenPos(e);
      this.mouseX = p.x;
      this.mouseY = p.y;
      if (this.dragStart && Math.hypot(p.x - this.dragStart.x, p.y - this.dragStart.y) > DRAG_THRESHOLD) {
        this.dragging = true;
      }
      this.updateCursor();
    }
    onUp(e) {
      if (this.mode === "wall" && this.wallFrom && e.button === 0) {
        this.issue({ t: "wall", tiles: wallLine(this.wallFrom, this.mouseTile()) });
        this.wallFrom = null;
        return;
      }
      if (e.button !== 0 || !this.dragStart) return;
      const g = this.game;
      const additive = e.shiftKey;
      const wx = this.mouseX + this.cam.x;
      const wy = this.mouseY + this.cam.y;
      if (this.dragging) {
        const s = this.dragStart;
        selectInRect(g, s.x + this.cam.x, s.y + this.cam.y, wx, wy, additive);
        g.selectedBuilding = null;
        if (g.selection.size > 0) emit(g, { kind: "select" });
      } else {
        const hit = unitAtPoint(g, wx, wy);
        const u = hit?.owner === g.local ? hit : void 0;
        const now = performance.now();
        const double = !!u && this.lastClick.kind === u.kind && now - this.lastClick.time < 350;
        this.lastClick = { kind: u?.kind ?? null, time: now };
        if (u && double) {
          selectKindInRect(g, u.kind, this.cam.x, this.cam.y, this.cam.x + this.cam.w, this.cam.y + this.cam.h, additive);
          emit(g, { kind: "select" });
          this.dragStart = null;
          this.dragging = false;
          return;
        }
        if (!additive) g.selection.clear();
        g.selectedBuilding = null;
        if (u) {
          emit(g, { kind: "select" });
          if (additive && g.selection.has(u.id)) g.selection.delete(u.id);
          else g.selection.add(u.id);
        } else if (!additive) {
          const b = buildingAtTile(g, Math.floor(wx / TILE), Math.floor(wy / TILE));
          if (b && (b.owner === g.local || exploredRect(g, b.tx, b.ty, b.w, b.h))) g.selectedBuilding = b.id;
        }
      }
      this.dragStart = null;
      this.dragging = false;
    }
    updateCursor() {
      const g = this.game;
      const wx = this.mouseX + this.cam.x;
      const wy = this.mouseY + this.cam.y;
      const tx = Math.floor(wx / TILE);
      const ty = Math.floor(wy / TILE);
      let cursor = "default";
      const hit = unitAtPoint(g, wx, wy);
      const b = inBounds(g.map, tx, ty) ? buildingAtTile(g, tx, ty) : void 0;
      const foe = hit && hostile(g, hit.owner, g.local) && visibleAt(g, hit.x, hit.y) || b && hostile(g, b.owner, g.local) && exploredRect(g, b.tx, b.ty, b.w, b.h);
      if (this.mode === "sell") {
        cursor = "alias";
      } else if (this.mode === "repair") {
        cursor = "context-menu";
      } else if (this.placing) {
        cursor = "copy";
      } else if (foe && g.selection.size > 0) {
        cursor = "crosshair";
      } else if (hit?.owner === g.local) {
        cursor = "pointer";
      } else if (g.selection.size > 0) {
        const hasHarvester = [...g.selection].some((id) => getUnit(g, id)?.kind === "harvester");
        const onSpice = inBounds(g.map, tx, ty) && g.map.spice[idx(g.map, tx, ty)] > 0;
        cursor = hasHarvester && onSpice ? "cell" : "default";
      }
      this.view.style.cursor = cursor;
    }
    lastGroupKey = { n: 0, time: 0 };
    /** Control groups (Ctrl/Shift + 1-9 to assign, 1-9 to select, twice to jump) and X to stop. */
    onHotkey(e) {
      const g = this.game;
      const digit = /^Digit([1-9])$/.exec(e.code);
      if (digit) {
        const n = Number(digit[1]);
        e.preventDefault();
        if (e.ctrlKey || e.shiftKey) {
          assignGroup(g, n);
          notify(g, `Group ${n} set`);
          return;
        }
        const units = selectGroup(g, n);
        const now = performance.now();
        if (units.length > 0 && this.lastGroupKey.n === n && now - this.lastGroupKey.time < 400) {
          const cx = units.reduce((s, u) => s + u.x, 0) / units.length;
          const cy = units.reduce((s, u) => s + u.y, 0) / units.length;
          this.centreOn(cx, cy);
        }
        this.lastGroupKey = { n, time: now };
      } else if (e.code === keyFor("stop")) {
        const units = selectedUnits(g);
        if (units.length > 0) this.issue({ t: "stop", units: units.map((u) => u.id) });
      } else if (e.code === keyFor("ability")) {
        this.heroAbility();
      } else if (e.code === keyFor("home")) {
        this.goHome();
      } else if (e.code === keyFor("army") && !e.shiftKey && !e.ctrlKey) {
        this.selectArmy();
      } else if (e.code === keyFor("ping")) {
        e.preventDefault();
        const ping = [...g.pings].sort((a, b) => a.age - b.age)[0];
        if (ping && ping.age < PING_LIFE) this.centreOn(ping.x, ping.y);
      } else if (e.code === keyFor("health")) {
        this.alwaysHealth = !this.alwaysHealth;
        notify(g, this.alwaysHealth ? "Health bars: always" : "Health bars: when damaged");
      } else if (e.code === keyFor("sell") && !e.ctrlKey) {
        this.toggleMode("sell");
      } else if (e.code === keyFor("repair") && !e.ctrlKey) {
        this.toggleMode("repair");
      } else if (e.key === "Alt") {
        e.preventDefault();
      } else {
        const f = /^F([1-4])$/.exec(e.code);
        if (f) {
          e.preventDefault();
          const n = Number(f[1]) - 1;
          if (e.shiftKey) {
            this.bookmarks[n] = { x: this.cam.x + this.cam.w / 2, y: this.cam.y + this.cam.h / 2 };
            notify(g, `Camera bookmark F${n + 1} set`);
          } else if (this.bookmarks[n]) {
            this.centreOn(this.bookmarks[n].x, this.bookmarks[n].y);
          }
        }
      }
    }
    /** Health bars on everything? (toggle, or hold Alt) */
    get showAllHealth() {
      return this.alwaysHealth || this.keys.has("alt");
    }
    toggleMode(mode) {
      this.wallFrom = null;
      this.mode = this.mode === mode ? null : mode;
      this.placing = null;
    }
    /** H: back to the Construction Yard (or wherever the base began). */
    goHome() {
      const g = this.game;
      const yard = g.buildings.find((b) => b.owner === g.local && b.kind === "yard");
      const anything = g.buildings.find((b) => b.owner === g.local);
      const home = yard ?? anything;
      if (home) this.centreOn((home.tx + home.w / 2) * TILE, (home.ty + home.h / 2) * TILE);
      else this.centreOn((g.map.start.x + 1.5) * TILE, (g.map.start.y + 1.5) * TILE);
    }
    /** E: select every combat unit; press twice quickly to look at them. */
    selectArmy() {
      const g = this.game;
      const army = armyUnits(g);
      g.selection = new Set(army.map((u) => u.id));
      g.selectedBuilding = null;
      if (army.length === 0) return;
      emit(g, { kind: "select" });
      const now = performance.now();
      if (now - this.lastArmyKey < 400) {
        this.centreOn(army.reduce((s, u) => s + u.x, 0) / army.length, army.reduce((s, u) => s + u.y, 0) / army.length);
      }
      this.lastArmyKey = now;
    }
    /** Q (or the ability button): the selected hero uses its ability. */
    heroAbility() {
      const g = this.game;
      const rigs = selectedUnits(g).filter((u) => DEPLOYS[u.kind]);
      if (rigs.length > 0) {
        this.issue({ t: "deploy", units: rigs.map((u) => u.id) });
        return;
      }
      const ships = selectedUnits(g).filter((u) => u.kind === "dropship" && (u.passengers?.length ?? 0) > 0);
      if (ships.length > 0) {
        this.issue({ t: "unload", units: ships.map((u) => u.id) });
        return;
      }
      const sw = g.buildings.find((x) => x.id === g.selectedBuilding && x.owner === g.local && SUPERWEAPONS[x.kind]);
      if (sw) {
        if (sw.cooldown > 0) {
          notify(g, `${SUPERWEAPONS[sw.kind].name} charging: ${Math.ceil(sw.cooldown)}s`);
          emit(g, { kind: "error" });
          return;
        }
        this.mode = "target";
        this.aiming = sw.id;
        return;
      }
      const b = g.buildings.find((x) => x.id === g.selectedBuilding && x.owner === g.local && PACKS[x.kind]);
      if (b) {
        this.issue({ t: "pack", building: b.id });
        return;
      }
      const hero = selectedUnits(g).find((u) => isHero(u.kind));
      if (!hero) return;
      if (hero.abilityCd > 0) {
        notify(g, `${HEROES[hero.kind].ability} recharging (${Math.ceil(hero.abilityCd)}s)`);
        emit(g, { kind: "error" });
        return;
      }
      this.issue({ t: "ability", unit: hero.id });
    }
    /** Right-click on the ground or a building: show the order now, send it to be carried out. */
    orderAt(tx, ty, attackMove) {
      const g = this.game;
      const selected = selectedUnits(g);
      const feedback = describeOrderAt(g, selected, tx, ty, attackMove);
      if (!feedback) return;
      if (feedback.sound) emit(g, { kind: "command", attack: feedback.marker === "attack" });
      g.markers.push({ x: (tx + 0.5) * TILE, y: (ty + 0.5) * TILE, age: 0, kind: feedback.marker });
      this.issue({ t: "order", units: selected.map((u) => u.id), x: tx, y: ty, attackMove });
    }
    centreOn(wx, wy) {
      this.cam.x = wx - this.cam.w / 2;
      this.cam.y = wy - this.cam.h / 2;
      this.clampCamera();
    }
    clampCamera() {
      const m = this.game.map;
      this.cam.x = Math.max(0, Math.min(this.cam.x, m.w * TILE - this.cam.w + SIDEBAR_WIDTH));
      this.cam.y = Math.max(0, Math.min(this.cam.y, m.h * TILE - this.cam.h));
    }
    update(dt) {
      let dx = 0;
      let dy = 0;
      const k = this.keys;
      if (k.has("arrowleft") || k.has("a")) dx -= 1;
      if (k.has("arrowright") || k.has("d")) dx += 1;
      if (k.has("arrowup") || k.has("w")) dy -= 1;
      if (k.has("arrowdown") || k.has("s")) dy += 1;
      if (this.edgeScroll && this.inside && !this.dragStart) {
        if (this.mouseX < EDGE) dx -= 1;
        if (this.mouseX > this.cam.w - EDGE) dx += 1;
        if (this.mouseY < EDGE) dy -= 1;
        if (this.mouseY > this.cam.h - EDGE) dy += 1;
      }
      if (dx || dy) {
        this.cam.x += Math.sign(dx) * SCROLL_SPEED * dt;
        this.cam.y += Math.sign(dy) * SCROLL_SPEED * dt;
        this.clampCamera();
      }
    }
  };

  // src/props.ts
  var PROP_NAMES = ["boulders_a", "boulders_b", "boulders_c", "rubble_a", "rubble_b", "barrels", "crates", "pipe", "ribs", "scrap", "deadcrystal", "wreck"];
  var PROP_SIZE = {
    boulders_a: 128,
    boulders_b: 128,
    boulders_c: 128,
    rubble_a: 96,
    rubble_b: 96,
    barrels: 96,
    crates: 96,
    pipe: 128,
    ribs: 160,
    scrap: 96,
    deadcrystal: 96,
    wreck: 160
  };
  var BASE_CLEARANCE = 9;
  function hash(x, y, salt) {
    let h = x * 374761393 + y * 668265263 + salt * 1442695041 | 0;
    h = Math.imul(h ^ h >>> 13, 1274126177);
    return ((h ^ h >>> 16) >>> 0) / 4294967296;
  }
  function pick(roll, options) {
    let acc = 0;
    for (const [value, chance] of options) {
      acc += chance;
      if (roll < acc) return value;
    }
    return null;
  }
  function scatterProps(m, seed = 0) {
    const props = [];
    const terrainAt = (x, y) => inBounds(m, x, y) ? m.terrain[idx(m, x, y)] : Terrain.Cliff;
    const nearBase2 = (x, y) => [m.start, m.enemyStart].some((s) => Math.hypot(x - (s.x + 1.5), y - (s.y + 1.5)) < BASE_CLEARANCE);
    const open = (x, y, t) => {
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (terrainAt(x + dx, y + dy) !== t || m.spice[idx(m, Math.min(m.w - 1, Math.max(0, x + dx)), Math.min(m.h - 1, Math.max(0, y + dy)))] > 0) return false;
      return true;
    };
    for (let y = 0; y < m.h; y++) {
      for (let x = 0; x < m.w; x++) {
        if (nearBase2(x, y)) continue;
        const i = idx(m, x, y);
        if (m.spice[i] > 0) continue;
        const t = m.terrain[i];
        const roll = hash(x, y, seed + 1);
        let name = null;
        if (t === Terrain.Cliff) {
          const edge = [terrainAt(x + 1, y), terrainAt(x - 1, y), terrainAt(x, y + 1), terrainAt(x, y - 1)].some((n) => n !== Terrain.Cliff);
          name = pick(roll, [
            ["boulders_a", edge ? 0.05 : 0.012],
            ["boulders_b", edge ? 0.05 : 0.012],
            ["boulders_c", edge ? 0.05 : 0.012],
            ["rubble_a", edge ? 0.03 : 0]
          ]);
        } else if (t === Terrain.Rock) {
          name = pick(roll, [
            ["rubble_a", 0.018],
            ["rubble_b", 0.018],
            ["scrap", 4e-3],
            ["barrels", 3e-3],
            ["crates", 3e-3],
            ["deadcrystal", 4e-3],
            ["pipe", open(x, y, t) ? 2e-3 : 0]
          ]);
        } else {
          name = pick(roll, [
            ["rubble_b", 6e-3],
            ["scrap", 4e-3],
            ["barrels", 3e-3],
            ["deadcrystal", 3e-3],
            ["ribs", open(x, y, t) ? 25e-4 : 0],
            ["wreck", open(x, y, t) ? 25e-4 : 0],
            ["pipe", open(x, y, t) ? 2e-3 : 0]
          ]);
        }
        if (!name) continue;
        props.push({
          name,
          x: (x + 0.25 + hash(x, y, seed + 2) * 0.5) * TILE,
          y: (y + 0.25 + hash(x, y, seed + 3) * 0.5) * TILE,
          flip: hash(x, y, seed + 4) < 0.5
        });
      }
    }
    return props.sort((a, b) => a.y - b.y);
  }

  // src/terrain.ts
  var HEIGHT = { [Terrain.Sand]: 0, [Terrain.Rock]: 1, [Terrain.Cliff]: 2 };
  var TERRAIN_SCALE = 2;
  var WOBBLE = 0.38;
  function hash2(x, y, seed) {
    let h = x * 374761393 + y * 668265263 + seed * 2147483647 | 0;
    h = Math.imul(h ^ h >>> 13, 1274126177);
    return ((h ^ h >>> 16) >>> 0) / 4294967296;
  }
  var smooth = (t) => t * t * (3 - 2 * t);
  var PERIOD = 480;
  var mod = (a, n) => (a % n + n) % n;
  function vnoise(x, y, cell, seed) {
    const n = PERIOD / cell;
    const gx = x / cell;
    const gy = y / cell;
    const x0 = Math.floor(gx);
    const y0 = Math.floor(gy);
    const tx = smooth(gx - x0);
    const ty = smooth(gy - y0);
    const a = hash2(mod(x0, n), mod(y0, n), seed);
    const b = hash2(mod(x0 + 1, n), mod(y0, n), seed);
    const c = hash2(mod(x0, n), mod(y0 + 1, n), seed);
    const d = hash2(mod(x0 + 1, n), mod(y0 + 1, n), seed);
    return (a + (b - a) * tx) * (1 - ty) + (c + (d - c) * tx) * ty;
  }
  function fbmRaw(x, y, seed) {
    return 0.55 * vnoise(x, y, 40, seed) + 0.3 * vnoise(x, y, 16, seed + 1) + 0.15 * vnoise(x, y, 6, seed + 2);
  }
  var tables = /* @__PURE__ */ new Map();
  function table(key, fill) {
    let t = tables.get(key);
    if (!t) {
      t = new Float32Array(PERIOD * PERIOD);
      for (let y = 0; y < PERIOD; y++) for (let x = 0; x < PERIOD; x++) t[y * PERIOD + x] = fill(x, y);
      tables.set(key, t);
    }
    return t;
  }
  var look = (t, x, y) => t[mod(Math.floor(y), PERIOD) * PERIOD + mod(Math.floor(x), PERIOD)];
  function fbm(x, y, seed) {
    const t = tables.get(seed * 1e3) ?? table(seed * 1e3, (tx, ty) => fbmRaw(tx, ty, seed));
    return look(t, x, y);
  }
  function noise(x, y, cell, seed) {
    const key = seed * 1e3 + cell;
    const t = tables.get(key) ?? table(key, (tx, ty) => vnoise(tx, ty, cell, seed));
    return look(t, x, y);
  }
  function tileHeight(m, tx, ty) {
    const x = Math.min(m.w - 1, Math.max(0, tx));
    const y = Math.min(m.h - 1, Math.max(0, ty));
    return HEIGHT[m.terrain[idx(m, x, y)]];
  }
  function heightAt(m, px, py, seed = 0) {
    const fx = px / TILE - 0.5;
    const fy = py / TILE - 0.5;
    const x0 = Math.floor(fx);
    const y0 = Math.floor(fy);
    const tx = smooth(fx - x0);
    const ty = smooth(fy - y0);
    const a = tileHeight(m, x0, y0);
    const b = tileHeight(m, x0 + 1, y0);
    const c = tileHeight(m, x0, y0 + 1);
    const d = tileHeight(m, x0 + 1, y0 + 1);
    const base = (a + (b - a) * tx) * (1 - ty) + (c + (d - c) * tx) * ty;
    const centre = Math.min(1, 2 * Math.hypot(fx - Math.round(fx), fy - Math.round(fy)));
    return base + (fbm(px, py, seed) - 0.5) * 2 * WOBBLE * centre;
  }
  function lerp3(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }
  function sandColour(px, py, seed) {
    const tone = noise(px, py, 96, seed + 10);
    const c = lerp3([158, 145, 124], [136, 124, 106], tone);
    const warp = fbm(px, py, seed + 20) * 9;
    const r = Math.sin(px * 0.09 + py * 0.035 + warp);
    const crest = r > 0.82 ? (r - 0.82) / 0.18 : 0;
    const trough = r < -0.85 ? (-0.85 - r) / 0.15 : 0;
    const grain = (hash2(px, py, seed + 30) - 0.5) * 8;
    const k = 1 + crest * 0.07 - trough * 0.05;
    if (hash2(px, py, seed + 35) > 0.9985) return [215, 245, 255];
    return [c[0] * k + grain, c[1] * k + grain, c[2] * k + grain + 3];
  }
  function rockColour(px, py, seed) {
    const mottle = fbm(px, py, seed + 40);
    const c = lerp3([100, 94, 86], [80, 75, 68], mottle);
    const crack = Math.abs(noise(px, py, 24, seed + 50) - 0.5) < 0.018 ? 0.75 : 1;
    const grain = (hash2(px, py, seed + 60) - 0.5) * 10;
    return [c[0] * crack + grain, c[1] * crack + grain, c[2] * crack + grain];
  }
  function cliffColour(px, py, seed) {
    const mottle = fbm(px, py, seed + 70);
    const c = lerp3([54, 50, 46], [40, 37, 34], mottle);
    const strata = Math.sin(py * 0.32 + noise(px, py, 30, seed + 80) * 5) * 5;
    const grain = (hash2(px, py, seed + 90) - 0.5) * 8;
    return [c[0] + strata + grain, c[1] + strata + grain, c[2] + strata + grain];
  }
  function paintTerrain(m, seed = 0, scale = TERRAIN_SCALE) {
    const W = m.w * TILE / scale;
    const H = m.h * TILE / scale;
    const heights = new Float32Array(W * H);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) heights[y * W + x] = heightAt(m, (x + 0.5) * scale, (y + 0.5) * scale, seed);
    }
    const hAt = (x, y) => heights[Math.min(H - 1, Math.max(0, y)) * W + Math.min(W - 1, Math.max(0, x))];
    const reach = Math.max(1, Math.round(2 / scale));
    const out = new Uint8ClampedArray(W * H * 4);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const h = heights[y * W + x];
        const px = x * scale;
        const py = y * scale;
        let c;
        if (h < 1) {
          const t = smooth(Math.min(1, Math.max(0, (h - 0.42) / 0.16)));
          c = t <= 0 ? sandColour(px, py, seed) : t >= 1 ? rockColour(px, py, seed) : lerp3(sandColour(px, py, seed), rockColour(px, py, seed), t);
        } else {
          const t = smooth(Math.min(1, Math.max(0, (h - 1.42) / 0.16)));
          c = t <= 0 ? rockColour(px, py, seed) : t >= 1 ? cliffColour(px, py, seed) : lerp3(rockColour(px, py, seed), cliffColour(px, py, seed), t);
        }
        const slope = hAt(x + reach, y + reach) - hAt(x - reach, y - reach);
        const light = 1 + Math.max(-0.42, Math.min(0.3, slope * 0.9));
        const o = (y * W + x) * 4;
        out[o] = c[0] * light;
        out[o + 1] = c[1] * light;
        out[o + 2] = c[2] * light;
        out[o + 3] = 255;
      }
    }
    return out;
  }

  // src/render.ts
  var LOW = prefs().graphics === "low";
  onPrefs((p) => LOW = p.graphics === "low");
  var COLORS = {
    sandA: [154, 141, 120],
    sandB: [136, 124, 106],
    rockA: [100, 94, 86],
    rockB: [80, 75, 68],
    cliff: [46, 43, 40],
    player: "#2f6fb0",
    playerDark: "#1d4a78",
    select: "#f2b33d",
    spice: "#5fd8f0",
    concrete: "#c9c2b4"
  };
  var TEAM = {
    0: { main: "#2f6fb0", dark: "#1d4a78", mini: "#8fc3ff" },
    1: { main: "#c0392b", dark: "#7d2219", mini: "#ff8a7a" },
    // Green and violet: the extra sides in 2v2 and free-for-all.
    2: { main: "#2e9a6e", dark: "#1c6045", mini: "#7ee8b8" },
    3: { main: "#8e52b8", dark: "#5a3276", mini: "#d0a2f2" }
  };
  function hash3(i, k) {
    let h = i * 374761393 + k * 668265263 | 0;
    h = Math.imul(h ^ h >>> 13, 1274126177);
    return ((h ^ h >>> 16) >>> 0) / 4294967296;
  }
  var Renderer = class {
    ctx;
    mini;
    terrain;
    spice;
    miniTiles;
    miniAge = Infinity;
    constructor(view, minimap, map, factions, sides = [0, 1]) {
      this.factions = factions;
      this.sprites = new SpriteBank(factions, sides);
      this.ctx = view.getContext("2d");
      this.mini = minimap.getContext("2d");
      this.terrain = buildTerrain(map);
      this.spice = new SpiceLayer(map);
      this.miniTiles = document.createElement("canvas");
      this.miniTiles.width = map.w;
      this.miniTiles.height = map.h;
      this.props = scatterProps(map);
      for (const name of PROP_NAMES) {
        const img = new Image();
        img.src = `assets/props/${name}.png`;
        img.onload = () => this.propImages.set(name, propPair(img));
      }
    }
    sprites;
    factions;
    /** Scenery scattered over the map, back to front. */
    props;
    /** Each prop's image and its mirror image, once loaded. */
    propImages = /* @__PURE__ */ new Map();
    /** Crystal light: one pixel per tile, how strongly the glass lights the ground there. */
    crystalLight = null;
    /** Night: a darkness layer (half the view's resolution) with the lights cut out of it. */
    nightLayer = null;
    /** Dust storms: a tile of soft drifting dust, scrolled with the wind. */
    dustTile = null;
    crystalLightAt = -Infinity;
    /** How each turreted vehicle is shown: hull along its travel, turret on its target. */
    poses = /* @__PURE__ */ new Map();
    /** Dust kicked up behind vehicles on the sand (purely visual). */
    dust = [];
    /** Tread marks left in the sand (purely visual, kept per screen). */
    tracks = [];
    lastTrack = /* @__PURE__ */ new Map();
    trackClock = 0;
    /** Tread marks on the ground right now (for the performance overlay). */
    get trackCount() {
      return this.tracks.length;
    }
    /** Health bars on every unit and building, not just damaged ones. */
    showAllHealth = false;
    /** Aiming a superweapon: the ring under the mouse (world px). */
    aimRing = null;
    /** Replays show the minimap whether or not the watched side has a radar. */
    radarAlways = false;
    /** One pixel per tile; drawn stretched with smoothing so the fog has soft edges. */
    fogPixels = null;
    /**
     * Fog of war: black where never explored, dimmed where explored but not
     * watched. Painted into a tiny one-pixel-per-tile image and scaled up with
     * smoothing, so edges fade over about a tile instead of stepping.
     */
    drawShroud(ctx, g, cam) {
      const m = g.map;
      if (!this.fogPixels) {
        this.fogPixels = document.createElement("canvas");
        this.fogPixels.width = m.w;
        this.fogPixels.height = m.h;
        this.fogImage = this.fogPixels.getContext("2d").createImageData(m.w, m.h);
        for (let i = 0; i < m.w * m.h; i++) {
          this.fogImage.data[i * 4] = 12;
          this.fogImage.data[i * 4 + 1] = 10;
          this.fogImage.data[i * 4 + 2] = 9;
        }
      }
      const data = this.fogImage.data;
      let changed = false;
      for (let i = 0; i < m.w * m.h; i++) {
        const alpha = g.fog.visible[i] ? 0 : g.fog.explored[i] ? 128 : 255;
        if (data[i * 4 + 3] !== alpha) {
          data[i * 4 + 3] = alpha;
          changed = true;
        }
      }
      if (changed) this.fogPixels.getContext("2d").putImageData(this.fogImage, 0, 0);
      const sx = Math.max(0, Math.floor(cam.x / TILE) - 1);
      const sy = Math.max(0, Math.floor(cam.y / TILE) - 1);
      const sw = Math.min(m.w - sx, Math.ceil(cam.w / TILE) + 3);
      const sh = Math.min(m.h - sy, Math.ceil(cam.h / TILE) + 3);
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(this.fogPixels, sx, sy, sw, sh, sx * TILE, sy * TILE, sw * TILE, sh * TILE);
      ctx.imageSmoothingEnabled = false;
    }
    fogImage = null;
    /**
     * Turreted vehicles: the hull swings round to wherever the vehicle is actually
     * going, the turret to whatever it's shooting at (or back to the front), each
     * at its own pace. Purely visual; the simulation keeps its single facing.
     */
    updatePoses(g, dt) {
      const alive2 = /* @__PURE__ */ new Set();
      for (const u of g.units) {
        if (!UNIT_TURRETS[u.kind]) continue;
        alive2.add(u.id);
        let p = this.poses.get(u.id);
        if (!p) {
          p = { hull: u.angle, turret: u.angle, x: u.x, y: u.y };
          this.poses.set(u.id, p);
        }
        const dx = u.x - p.x;
        const dy = u.y - p.y;
        p.x = u.x;
        p.y = u.y;
        const hullAim = dx * dx + dy * dy > 0.04 ? Math.atan2(dy, dx) : p.hull;
        p.hull = turnTowards(p.hull, hullAim, HULL_TURN * dt);
        const t = u.targetId !== null ? targetInfo(g, u.targetId) : null;
        const turretAim = t ? Math.atan2(t.y - u.y, t.x - u.x) : p.hull;
        p.turret = turnTowards(p.turret, turretAim, TURRET_TURN * dt);
      }
      for (const id of this.poses.keys()) if (!alive2.has(id)) this.poses.delete(id);
    }
    /**
     * Rebuild the crystal light map every couple of seconds (fields grow and get
     * mined slowly): each tile glows with the crystal around it, spread over a
     * few tiles, so fields cast a soft cyan light on the ground and on anything
     * standing near them.
     */
    updateCrystalLight(g) {
      const m = g.map;
      if (this.crystalLight && g.time - this.crystalLightAt < 2 && g.time >= this.crystalLightAt) return;
      this.crystalLightAt = g.time;
      if (!this.crystalLight) {
        this.crystalLight = document.createElement("canvas");
        this.crystalLight.width = m.w;
        this.crystalLight.height = m.h;
      }
      const lctx = this.crystalLight.getContext("2d");
      const img = lctx.createImageData(m.w, m.h);
      const R = 2;
      for (let y = 0; y < m.h; y++) {
        for (let x = 0; x < m.w; x++) {
          let sum = 0;
          for (let dy = -R; dy <= R; dy++) {
            const yy = y + dy;
            if (yy < 0 || yy >= m.h) continue;
            for (let dx = -R; dx <= R; dx++) {
              const xx = x + dx;
              if (xx < 0 || xx >= m.w) continue;
              const s = m.spice[yy * m.w + xx];
              if (s > 0) sum += Math.min(1, s / 400) / (1 + dx * dx + dy * dy);
            }
          }
          const o = (y * m.w + x) * 4;
          img.data[o] = 110;
          img.data[o + 1] = 225;
          img.data[o + 2] = 245;
          img.data[o + 3] = Math.min(255, sum * 70);
        }
      }
      lctx.putImageData(img, 0, 0);
    }
    /**
     * Night: fill a half-resolution layer with darkness, cut light out of it
     * (crystal fields, buildings, vehicles' lamps, fire, gunfire and shots),
     * then lay it over the view. One fill, a few dozen small images and one
     * stretch a frame: cheap enough for the Low setting too.
     */
    drawNight(ctx, g, cam, shown, seen) {
      const dark = (1 - g.weather.light) / (1 - 0.3) * 0.64;
      if (dark <= 0.01) return;
      const scale = 0.5;
      const pad = 24;
      const w = Math.ceil((cam.w + pad * 2) * scale);
      const h = Math.ceil((cam.h + pad * 2) * scale);
      if (!this.nightLayer) this.nightLayer = document.createElement("canvas");
      const layer = this.nightLayer;
      if (layer.width !== w || layer.height !== h) {
        layer.width = w;
        layer.height = h;
      }
      const lc = layer.getContext("2d");
      lc.setTransform(1, 0, 0, 1, 0, 0);
      lc.globalCompositeOperation = "source-over";
      lc.globalAlpha = 1;
      lc.clearRect(0, 0, w, h);
      lc.fillStyle = `rgba(6,10,28,${Math.min(0.9, dark)})`;
      lc.fillRect(0, 0, w, h);
      lc.globalCompositeOperation = "destination-out";
      lc.setTransform(scale, 0, 0, scale, (-cam.x + pad) * scale, (-cam.y + pad) * scale);
      const m = g.map;
      this.updateCrystalLight(g);
      if (this.crystalLight) {
        const sx = Math.max(0, Math.floor(cam.x / TILE) - 2);
        const sy = Math.max(0, Math.floor(cam.y / TILE) - 2);
        const sw = Math.min(m.w - sx, Math.ceil(cam.w / TILE) + 5);
        const sh = Math.min(m.h - sy, Math.ceil(cam.h / TILE) + 5);
        lc.globalAlpha = 0.85;
        lc.imageSmoothingEnabled = true;
        lc.drawImage(this.crystalLight, sx, sy, sw, sh, sx * TILE, sy * TILE, sw * TILE, sh * TILE);
      }
      const light = lightGlow();
      const inView = (x, y, r) => x + r > cam.x && x - r < cam.x + cam.w && y + r > cam.y && y - r < cam.y + cam.h;
      for (const b of shown) {
        const cx = (b.tx + b.w / 2) * TILE;
        const cy = (b.ty + b.h / 2) * TILE;
        const r = (Math.max(b.w, b.h) / 2 + 2.2) * TILE;
        if (!inView(cx, cy, r)) continue;
        drawGlow(lc, light, cx, cy, r, r * 0.9, powerInfo(g, b.owner).low ? 0.45 : 0.9);
      }
      for (const u of g.units) {
        if (!seen(u)) continue;
        const vehicle = UNIT_STATS[u.kind].armor !== "infantry";
        const r = (vehicle ? 2.6 : 1.3) * TILE;
        if (!inView(u.x, u.y, r * 1.6)) continue;
        drawGlow(lc, light, u.x, u.y, r, r, vehicle ? 0.55 : 0.35);
        if (vehicle) drawGlow(lc, light, u.x + Math.cos(u.angle) * r * 0.9, u.y + Math.sin(u.angle) * r * 0.9, r * 0.75, r * 0.75, 0.5);
      }
      for (const e of g.effects) {
        const k = e.kind;
        const life = 1 - e.age / e.life;
        let r = 0;
        let a = 0;
        if (k === "fire" || k === "boom" || k === "bigBoom" || k === "flame") {
          r = (k === "bigBoom" ? 4 : 2.4) * TILE * e.size;
          a = 0.95 * life;
        } else if (k === "muzzle") {
          r = 1.6 * TILE;
          a = 0.9 * life;
        } else if (k === "beam" || k === "tracer") {
          r = 1.1 * TILE;
          a = 0.6 * life;
        }
        if (a > 0 && inView(e.x, e.y, r)) drawGlow(lc, light, e.x, e.y, r, r, a);
      }
      for (const p of g.projectiles) if (inView(p.x, p.y, TILE)) drawGlow(lc, light, p.x, p.y, TILE * 0.9, TILE * 0.9, 0.7);
      for (const b of shown) {
        const hurt = 1 - b.hp / BUILDING_STATS[b.kind].maxHp;
        if (hurt < 0.5) continue;
        const cx = (b.tx + b.w / 2) * TILE;
        const cy = (b.ty + b.h / 2) * TILE;
        drawGlow(lc, light, cx, cy, Math.max(b.w, b.h) * TILE, Math.max(b.w, b.h) * TILE, 0.6 * hurt);
      }
      lc.setTransform(1, 0, 0, 1, 0, 0);
      lc.globalCompositeOperation = "source-over";
      lc.globalAlpha = 1;
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(layer, 0, 0, w, h, cam.x - pad, cam.y - pad, cam.w + pad * 2, cam.h + pad * 2);
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      const warm = fireGlow();
      for (const e of g.effects) {
        if (e.kind !== "fire" && e.kind !== "boom" && e.kind !== "bigBoom" && e.kind !== "muzzle") continue;
        const r = (e.kind === "bigBoom" ? 3 : e.kind === "muzzle" ? 1 : 1.8) * TILE;
        if (inView(e.x, e.y, r)) drawGlow(ctx, warm, e.x, e.y, r, r, 0.18 * dark * (1 - e.age / e.life));
      }
      ctx.restore();
    }
    /**
     * Dust storm: a tan haze over everything, with soft dust blowing through it.
     * The haze thickens with the storm; the drifting layer scrolls with the wind.
     */
    drawDust(ctx, g, cam) {
      const d = g.weather.dust;
      const k = 0.3 + 0.7 * g.weather.light;
      ctx.save();
      ctx.fillStyle = `rgba(${Math.round(168 * k)},${Math.round(136 * k)},${Math.round(96 * k)},${0.3 * d})`;
      ctx.fillRect(cam.x - 32, cam.y - 32, cam.w + 64, cam.h + 64);
      if (!this.dustTile) this.dustTile = makeDustTile();
      const pattern = ctx.createPattern(this.dustTile, "repeat");
      if (pattern) {
        for (const [speed, alpha, zoom] of [
          [60, 0.55, 1.5],
          [140, 0.4, 2.6]
        ]) {
          pattern.setTransform(new DOMMatrix().translate(g.time * speed, g.time * speed * 0.3).scale(zoom));
          ctx.fillStyle = pattern;
          ctx.globalAlpha = alpha * d * k;
          ctx.fillRect(cam.x - 32, cam.y - 32, cam.w + 64, cam.h + 64);
        }
      }
      ctx.restore();
    }
    /** Drop a tread mark behind every vehicle that has rolled far enough since its last one. */
    layTracks(g, seen) {
      if (g.time < this.trackClock) {
        this.tracks = [];
        this.lastTrack.clear();
      }
      this.trackClock = g.time;
      const alive2 = /* @__PURE__ */ new Set();
      for (const u of g.units) {
        if (!leavesTracks(u.kind)) continue;
        alive2.add(u.id);
        const last = this.lastTrack.get(u.id);
        if (!last) {
          this.lastTrack.set(u.id, { x: u.x, y: u.y });
          continue;
        }
        const d = Math.hypot(u.x - last.x, u.y - last.y);
        if (d < TRACK_STEP) continue;
        if (d < TRACK_STEP * 4 && seen(u)) {
          const tile = g.map.terrain[idx(g.map, Math.floor(u.x / TILE), Math.floor(u.y / TILE))];
          if (tile === Terrain.Sand && this.dust.length < MAX_DUST) {
            const back = Math.atan2(last.y - u.y, last.x - u.x);
            const r = UNIT_STATS[u.kind].radius;
            this.dust.push({ x: u.x + Math.cos(back) * r + (Math.random() - 0.5) * 6, y: u.y + Math.sin(back) * r + (Math.random() - 0.5) * 6, t: g.time, s: r / 11 });
          }
          this.tracks.push({ x: (u.x + last.x) / 2, y: (u.y + last.y) / 2, angle: Math.atan2(u.y - last.y, u.x - last.x), gauge: UNIT_STATS[u.kind].radius * 0.62, len: d, t: g.time });
        }
        last.x = u.x;
        last.y = u.y;
      }
      for (const id of this.lastTrack.keys()) if (!alive2.has(id)) this.lastTrack.delete(id);
      let drop = 0;
      while (drop < this.tracks.length && (g.time - this.tracks[drop].t > TRACK_LIFE || this.tracks.length - drop > MAX_TRACKS)) drop++;
      if (drop > 0) this.tracks.splice(0, drop);
      let gone = 0;
      while (gone < this.dust.length && g.time - this.dust[gone].t > DUST_LIFE) gone++;
      if (gone > 0) this.dust.splice(0, gone);
    }
    draw(g, cam, drag, ghost, dt) {
      const ctx = this.ctx;
      const m = g.map;
      ctx.imageSmoothingEnabled = false;
      ctx.fillStyle = "#1b1612";
      ctx.fillRect(0, 0, cam.w, cam.h);
      const k = TERRAIN_SCALE;
      ctx.imageSmoothingEnabled = true;
      ctx.drawImage(this.terrain, cam.x / k, cam.y / k, cam.w / k, cam.h / k, 0, 0, cam.w, cam.h);
      ctx.imageSmoothingEnabled = false;
      let shakeX = 0;
      let shakeY = 0;
      if (!REDUCED_MOTION && !LOW) {
        for (const e of g.effects) {
          if (e.kind !== "shake" || e.x < cam.x || e.x > cam.x + cam.w || e.y < cam.y || e.y > cam.y + cam.h) continue;
          const amp = 5 * e.size * (1 - e.age / e.life);
          shakeX += (Math.random() - 0.5) * amp;
          shakeY += (Math.random() - 0.5) * amp;
        }
      }
      ctx.save();
      ctx.translate(Math.round(-cam.x + shakeX), Math.round(-cam.y + shakeY));
      this.spice.update(m);
      ctx.drawImage(this.spice.canvas, cam.x, cam.y, cam.w, cam.h, cam.x, cam.y, cam.w, cam.h);
      const x0 = Math.max(0, Math.floor(cam.x / TILE));
      const y0 = Math.max(0, Math.floor(cam.y / TILE));
      const x1 = Math.min(m.w - 1, Math.floor((cam.x + cam.w) / TILE));
      const y1 = Math.min(m.h - 1, Math.floor((cam.y + cam.h) / TILE));
      const known = (b) => b.owner === g.local || exploredRect(g, b.tx, b.ty, b.w, b.h);
      const seen = (u) => u.owner === g.local || visibleAt(g, u.x, u.y);
      if (!LOW) {
        this.layTracks(g, seen);
        drawTracks(ctx, this.tracks, g.time, cam);
      }
      const vx0 = cam.x - 80;
      const vy0 = cam.y - 80;
      const vx1 = cam.x + cam.w + 80;
      const vy1 = cam.y + cam.h + 120;
      const onScreen = (x, y) => x >= vx0 && x <= vx1 && y >= vy0 && y <= vy1;
      const buildingOnScreen = (b) => b.tx * TILE < vx1 && (b.tx + b.w) * TILE > vx0 && b.ty * TILE < vy1 && (b.ty + b.h) * TILE > vy0;
      ctx.imageSmoothingEnabled = true;
      for (const p of this.props) {
        const pair = this.propImages.get(p.name);
        if (!pair) continue;
        const half = PROP_SIZE[p.name] / 4;
        if (p.x + half < vx0 || p.x - half > vx1 || p.y + half < vy0 || p.y - half > vy1) continue;
        ctx.drawImage(pair[p.flip ? 1 : 0], p.x - half, p.y - half, half * 2, half * 2);
      }
      ctx.imageSmoothingEnabled = false;
      for (const e of g.effects) if ((e.kind === "scorch" || e.kind === "wreck") && onScreen(e.x, e.y) && exploredRect(g, Math.floor(e.x / TILE), Math.floor(e.y / TILE), 1, 1)) drawGroundEffect(ctx, e, this.sprites);
      for (const z of g.mission?.zones ?? []) drawZone(ctx, z, g.time);
      for (const p of g.salvage) if (onScreen((p.x + 0.5) * TILE, (p.y + 0.5) * TILE) && exploredRect(g, p.x, p.y, 1, 1)) drawSalvage(ctx, p);
      const shown = g.buildings.filter((b) => buildingOnScreen(b) && known(b)).sort((p, q) => p.ty + p.h - (q.ty + q.h));
      for (const b of shown) drawBuilding(ctx, b, this.sprites);
      drawBarriers(ctx, g, shown);
      const sel = g.buildings.find((b) => b.id === g.selectedBuilding);
      if (sel) drawBuildingSelection(ctx, sel);
      if (sel?.rally && sel.owner === g.local) drawRally(ctx, sel);
      for (const b of g.buildings) if (b.repairing && b.owner === g.local) drawRepairing(ctx, b, g.time);
      this.updatePoses(g, dt);
      const units = g.units.filter((u) => onScreen(u.x, u.y) && seen(u));
      const aircraft = units.filter((u) => isAir(u.kind));
      for (const u of units) if (!isAir(u.kind)) drawUnit(ctx, u, g.time, this.sprites, this.poses.get(u.id));
      for (const u of units) {
        if (isAir(u.kind)) continue;
        if (g.selection.has(u.id)) {
          drawSelection(ctx, u);
          if (u.owner === g.local && u.waypoints.length > 0) drawWaypoints(ctx, u);
        } else if (u.hp < UNIT_STATS[u.kind].maxHp || this.showAllHealth) drawHpBar(ctx, u.x - UNIT_STATS[u.kind].radius, u.y - UNIT_STATS[u.kind].radius - 6, UNIT_STATS[u.kind].radius * 2, u.hp / UNIT_STATS[u.kind].maxHp);
        if (u.rank > 0) drawRank(ctx, u);
        if (g.time < u.shieldUntil) drawWard(ctx, u, g.time);
      }
      for (const b of shown) {
        if (b.id !== g.selectedBuilding && (b.hp < BUILDING_STATS[b.kind].maxHp || this.showAllHealth)) {
          drawHpBar(ctx, b.tx * TILE + 4, b.ty * TILE - 6, b.w * TILE - 8, b.hp / BUILDING_STATS[b.kind].maxHp);
        }
      }
      for (const d of LOW ? [] : this.dust) {
        if (!onScreen(d.x, d.y)) continue;
        const a = (g.time - d.t) / DUST_LIFE;
        const r = (6 + a * 13) * d.s;
        drawGlow(ctx, dustGlow(), d.x, d.y - a * 5, r, r * 0.8, 0.6 * (1 - a));
      }
      for (const b of shown) drawBurning(ctx, b, g.time);
      if (!LOW) for (const u of units) drawDamageSmoke(ctx, u, g.time);
      for (const c of g.charges) drawCharge(ctx, c, g.time);
      for (const u of aircraft) {
        const r = UNIT_STATS[u.kind].radius;
        const bob = Math.sin(g.time * 2.2 + u.id) * 2;
        drawGlow(ctx, shadowGlow(), u.x + 5, u.y + 4, r * 1.25, r * 0.7, 0.55);
        ctx.save();
        ctx.translate(0, -AIR_LIFT - bob);
        drawUnit(ctx, u, g.time, this.sprites, this.poses.get(u.id));
        drawRotor(ctx, u, g.time);
        if (g.selection.has(u.id)) {
          drawSelection(ctx, u);
          if (u.ammo !== void 0) drawAmmo(ctx, u);
        } else if (u.hp < UNIT_STATS[u.kind].maxHp || this.showAllHealth) drawHpBar(ctx, u.x - r, u.y - r - 6, r * 2, u.hp / UNIT_STATS[u.kind].maxHp);
        ctx.restore();
      }
      for (const s of g.strikes) drawStrike(ctx, s, g.time);
      if (this.aimRing) drawAimRing(ctx, this.aimRing, g.time);
      for (const p of g.projectiles) if (onScreen(p.x, p.y)) drawProjectile(ctx, p);
      for (const e of g.effects) {
        if (e.kind === "scorch" || e.kind === "wreck" || e.kind === "shake") continue;
        if (onScreen(e.x, e.y) || onScreen(e.x2, e.y2)) drawEffect(ctx, e);
      }
      if (!LOW) this.updateCrystalLight(g);
      if (this.crystalLight && !LOW) {
        const sx = Math.max(0, Math.floor(cam.x / TILE) - 2);
        const sy = Math.max(0, Math.floor(cam.y / TILE) - 2);
        const sw = Math.min(m.w - sx, Math.ceil(cam.w / TILE) + 5);
        const sh = Math.min(m.h - sy, Math.ceil(cam.h / TILE) + 5);
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.16 + 0.04 * Math.sin(g.time * 0.8);
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(this.crystalLight, sx, sy, sw, sh, sx * TILE, sy * TILE, sw * TILE, sh * TILE);
        ctx.restore();
      }
      const lowPower = {};
      for (const s of g.sides) lowPower[s] = powerInfo(g, s).low;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      if (!LOW) for (const b of shown) drawBeacons(ctx, b, g.time, BEACON_COLOR[this.factions[b.owner]], lowPower[b.owner]);
      for (const b of shown) {
        if (b.kind !== "seedSpire") continue;
        const pulse = 0.35 + 0.25 * Math.sin(g.time * 2 + b.id);
        drawGlow(ctx, shardGlow("rgba(140,240,255,0.9)"), (b.tx + 0.5) * TILE, (b.ty + 0.1) * TILE, 22, 30, pulse);
      }
      ctx.restore();
      if (g.weather.light < 1) this.drawNight(ctx, g, cam, shown, seen);
      if (g.weather.dust > 0) this.drawDust(ctx, g, cam);
      for (const st of g.storms) drawStormShadow(ctx, st);
      if (g.fog.enabled) this.drawShroud(ctx, g, cam);
      for (const st of g.storms) drawStorm(ctx, st, g.time);
      for (const mk of g.markers) {
        const t = mk.age / 0.6;
        ctx.strokeStyle = mk.kind === "move" ? `rgba(242,179,61,${1 - t})` : mk.kind === "attack" ? `rgba(255,80,60,${1 - t})` : `rgba(111,227,240,${1 - t})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mk.x, mk.y, 14 * (1 - t) + 3, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (ghost) {
        for (const t of ghost) {
          ctx.fillStyle = t.ok ? "rgba(90,220,90,0.35)" : "rgba(230,60,50,0.45)";
          ctx.fillRect(t.x * TILE + 1, t.y * TILE + 1, TILE - 2, TILE - 2);
          ctx.strokeStyle = t.ok ? "rgba(140,255,140,0.8)" : "rgba(255,110,90,0.85)";
          ctx.lineWidth = 1;
          ctx.strokeRect(t.x * TILE + 1.5, t.y * TILE + 1.5, TILE - 3, TILE - 3);
        }
      }
      ctx.restore();
      if (drag) {
        const x = Math.min(drag.x0, drag.x1);
        const y = Math.min(drag.y0, drag.y1);
        const w = Math.abs(drag.x1 - drag.x0);
        const h = Math.abs(drag.y1 - drag.y0);
        ctx.fillStyle = "rgba(242,179,61,0.08)";
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = COLORS.select;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 0.5, y + 0.5, w, h);
      }
      this.drawMinimap(g, cam, dt);
    }
    drawMinimap(g, cam, dt) {
      this.drawMinimapBody(g, cam, dt);
      const mini = this.mini;
      const scale = mini.canvas.width / (g.map.w * TILE);
      for (const p of g.pings) {
        const t = p.age % 1.5 / 1.5;
        mini.strokeStyle = `rgba(255,70,50,${1 - t})`;
        mini.lineWidth = 2;
        mini.beginPath();
        mini.arc(p.x * scale, p.y * scale, 3 + 12 * t, 0, Math.PI * 2);
        mini.stroke();
      }
    }
    drawMinimapBody(g, cam, dt) {
      const m = g.map;
      const mini = this.mini;
      const size = mini.canvas.width;
      const scale = size / (m.w * TILE);
      this.miniAge += dt;
      if (this.miniAge > 0.25) {
        this.miniAge = 0;
        const tctx = this.miniTiles.getContext("2d");
        const img = tctx.createImageData(m.w, m.h);
        for (let i = 0; i < m.w * m.h; i++) {
          const t = m.terrain[i];
          let c = t === Terrain.Cliff ? COLORS.cliff : t === Terrain.Rock ? COLORS.rockA : COLORS.sandA;
          if (m.spice[i] > 0) c = MINI_VEIN[m.vein[i]];
          if (!g.fog.explored[i]) c = [14, 11, 9];
          else if (!g.fog.visible[i]) c = c.map((v) => Math.round(v * 0.55));
          img.data[i * 4] = c[0];
          img.data[i * 4 + 1] = c[1];
          img.data[i * 4 + 2] = c[2];
          img.data[i * 4 + 3] = 255;
        }
        tctx.putImageData(img, 0, 0);
      }
      mini.imageSmoothingEnabled = false;
      mini.drawImage(this.miniTiles, 0, 0, size, size);
      if (!this.radarAlways && !hasRadar(g, g.local)) {
        mini.fillStyle = "#14110e";
        mini.fillRect(0, 0, size, size);
        for (let k = 0; k < 140; k++) {
          const v = 30 + Math.floor(Math.random() * 40);
          mini.fillStyle = `rgb(${v},${v - 4},${v - 8})`;
          mini.fillRect(Math.random() * size, Math.random() * size, 2, 2);
        }
        mini.fillStyle = "#b9a37f";
        mini.font = "bold 11px system-ui, sans-serif";
        mini.textAlign = "center";
        const offline = hasBuilding(g, "radar", g.local);
        mini.fillText(offline ? "RADAR OFFLINE" : "NO RADAR", size / 2, size / 2 - 4);
        mini.font = "10px system-ui, sans-serif";
        mini.fillText(offline ? "low power" : "build a Radar Outpost", size / 2, size / 2 + 10);
        return;
      }
      for (const b of g.buildings) {
        if (b.owner !== g.local && !exploredRect(g, b.tx, b.ty, b.w, b.h)) continue;
        mini.fillStyle = TEAM[b.owner].main;
        mini.fillRect(b.tx * TILE * scale, b.ty * TILE * scale, b.w * TILE * scale, b.h * TILE * scale);
      }
      for (const u of g.units) {
        if (u.owner !== g.local && !visibleAt(g, u.x, u.y)) continue;
        mini.fillStyle = g.selection.has(u.id) ? "#ffffff" : TEAM[u.owner].mini;
        mini.fillRect(u.x * scale - 1.5, u.y * scale - 1.5, 3, 3);
      }
      for (const z of g.mission?.zones ?? []) {
        mini.strokeStyle = z.owner === null ? "#f2b33d" : TEAM[z.owner].mini;
        mini.lineWidth = 2;
        mini.beginPath();
        mini.arc((z.x + 0.5) * TILE * scale, (z.y + 0.5) * TILE * scale, Math.max(4, z.r * TILE * scale), 0, Math.PI * 2);
        mini.stroke();
      }
      for (const st of g.storms) {
        mini.strokeStyle = Math.floor(g.time * 3) % 2 ? "rgba(180,240,255,0.9)" : "rgba(120,200,230,0.6)";
        mini.lineWidth = 1.5;
        mini.beginPath();
        mini.arc(st.x * scale, st.y * scale, stormRadius(st) * TILE * scale, 0, Math.PI * 2);
        mini.stroke();
      }
      mini.strokeStyle = "rgba(255,255,255,0.85)";
      mini.lineWidth = 1;
      mini.strokeRect(cam.x * scale + 0.5, cam.y * scale + 0.5, cam.w * scale, cam.h * scale);
    }
  };
  function buildTerrain(m) {
    const c = document.createElement("canvas");
    c.width = m.w * TILE / TERRAIN_SCALE;
    c.height = m.h * TILE / TERRAIN_SCALE;
    const pixels = paintTerrain(m);
    c.getContext("2d").putImageData(new ImageData(pixels, c.width, c.height), 0, 0);
    return c;
  }
  var SpiceLayer = class _SpiceLayer {
    canvas;
    ctx;
    levels;
    ready = false;
    constructor(m) {
      this.canvas = document.createElement("canvas");
      this.canvas.width = m.w * TILE;
      this.canvas.height = m.h * TILE;
      this.ctx = this.canvas.getContext("2d");
      this.levels = new Int8Array(m.w * m.h);
    }
    /** How full a tile looks (0-6), times 8, plus its kind: a change of either redraws it. */
    static level(m, i) {
      const amount = m.spice[i];
      const vein = m.vein[i];
      if (amount <= 0) return 0;
      const full = vein === Vein.Core ? 1 + Math.min(5, Math.floor(amount / 7)) : 1 + Math.min(5, Math.floor(amount / (vein === Vein.Dense ? 170 : 90)));
      return full * 8 + vein;
    }
    update(m) {
      if (!this.ready) {
        for (let i = 0; i < m.w * m.h; i++) this.levels[i] = _SpiceLayer.level(m, i);
        for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) this.drawTile(m, x, y);
        this.ready = true;
        return;
      }
      for (let y = 0; y < m.h; y++) {
        for (let x = 0; x < m.w; x++) {
          const i = idx(m, x, y);
          const lvl = _SpiceLayer.level(m, i);
          if (lvl === this.levels[i]) continue;
          this.levels[i] = lvl;
          this.redrawAround(m, x, y);
        }
      }
    }
    redrawAround(m, cx, cy) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      ctx.rect((cx - 1) * TILE, (cy - 1) * TILE, TILE * 3, TILE * 3);
      ctx.clip();
      ctx.clearRect((cx - 1) * TILE, (cy - 1) * TILE, TILE * 3, TILE * 3);
      for (let y = cy - 2; y <= cy + 2; y++) {
        for (let x = cx - 2; x <= cx + 2; x++) {
          if (x >= 0 && y >= 0 && x < m.w && y < m.h) this.drawTile(m, x, y);
        }
      }
      ctx.restore();
    }
    drawTile(m, x, y) {
      const i = idx(m, x, y);
      const code = this.levels[i];
      if (code <= 0) return;
      const lvl = code >> 3;
      const p = VEIN_LOOK[code & 7];
      const ctx = this.ctx;
      const a = lvl / 6;
      const cx = (x + 0.5) * TILE + (hash3(i, 1) - 0.5) * 8;
      const cy = (y + 0.5) * TILE + (hash3(i, 2) - 0.5) * 8;
      const r = TILE * (0.7 + 0.35 * a) * p.glowSize;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      grad.addColorStop(0, `rgba(${p.glow},${(0.1 + 0.22 * a) * p.glowAlpha})`);
      grad.addColorStop(1, `rgba(${p.glow},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
      const shards = Math.round((1 + lvl) * p.count);
      for (let k = 0; k < shards; k++) {
        const px = x * TILE + 4 + hash3(i, k + 5) * (TILE - 8);
        const py = y * TILE + 6 + hash3(i, k + 37) * (TILE - 10);
        const h = (5 + 9 * a * (0.6 + 0.4 * hash3(i, k + 71))) * p.height;
        const w = (2 + 2 * hash3(i, k + 91)) * p.width;
        const lean = (hash3(i, k + 13) - 0.5) * 0.8;
        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(lean);
        ctx.fillStyle = "rgba(20,60,80,0.35)";
        ctx.beginPath();
        ctx.ellipse(1, 1, w + 1, 2, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = k % 3 === 0 ? p.dark : p.light;
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(w, -h * 0.35);
        ctx.lineTo(0, 0);
        ctx.lineTo(-w, -h * 0.35);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = p.shine;
        ctx.beginPath();
        ctx.moveTo(0, -h);
        ctx.lineTo(-w, -h * 0.35);
        ctx.lineTo(0, -h * 0.25);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
  };
  var VEIN_LOOK = [
    // Crystal: cyan.
    { light: "#5fd8f0", dark: "#3fb8d8", shine: "rgba(230,255,255,0.75)", glow: "110,225,250", glowAlpha: 1, glowSize: 1, count: 1, height: 1, width: 1 },
    // Dense veins: deep blue-violet, bigger and more of them.
    { light: "#7c8cf4", dark: "#4e5bd0", shine: "rgba(225,230,255,0.8)", glow: "120,130,250", glowAlpha: 1.1, glowSize: 1.15, count: 1.3, height: 1.35, width: 1.2 },
    // Storm glass: red-orange, jagged.
    { light: "#ff7a52", dark: "#d8442a", shine: "rgba(255,225,200,0.8)", glow: "255,110,70", glowAlpha: 1.2, glowSize: 1, count: 1, height: 1.15, width: 0.9 },
    // Glass cores: amber, few, large, glowing.
    { light: "#ffd36a", dark: "#e09a2a", shine: "rgba(255,250,225,0.9)", glow: "255,190,80", glowAlpha: 1.6, glowSize: 1.35, count: 0.7, height: 1.6, width: 1.7 }
  ];
  var MINI_VEIN = [
    [90, 220, 250],
    [110, 120, 245],
    [250, 100, 70],
    [255, 200, 90]
  ];
  function drawBuilding(ctx, b, sprites) {
    if (b.kind === "wall" || b.kind === "gate") return;
    const team = TEAM[b.owner];
    const x = b.tx * TILE;
    const y = b.ty * TILE;
    const w = b.w * TILE;
    const h = b.h * TILE;
    if (b.kind === "refinery" || b.kind === "outpost") {
      const d = dockTile(b);
      ctx.fillStyle = "rgba(60,60,60,0.45)";
      ctx.fillRect(d.x * TILE + 2, d.y * TILE, TILE - 4, TILE - 4);
      ctx.strokeStyle = "rgba(255,210,80,0.7)";
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(d.x * TILE + 2.5, d.y * TILE + 0.5, TILE - 5, TILE - 5);
      ctx.setLineDash([]);
    }
    const turretSheet = TURRET_SPRITES[b.kind];
    if (turretSheet) {
      const img = sprites.get(b.kind, b.owner);
      if (img) {
        drawStrip(ctx, img, turretSheet, b.angle, x + w / 2, y + h / 2);
        return;
      }
    } else {
      const img = sprites.get(b.kind, b.owner);
      if (img) {
        const { marginX, marginY, scale } = BUILDING_SPRITE;
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, x - marginX * scale, y - marginY * scale, img.naturalWidth * scale, img.naturalHeight * scale);
        ctx.imageSmoothingEnabled = false;
        return;
      }
    }
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(x + 5, y + 5, w - 4, h - 4);
    ctx.fillStyle = COLORS.concrete;
    ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
    if (turretSheet) {
      drawTurret(ctx, b);
      return;
    }
    ctx.fillStyle = team.main;
    ctx.fillRect(x + 2, y + 2, w - 4, 7);
    ctx.strokeStyle = "#5c5548";
    ctx.lineWidth = 1;
    ctx.strokeRect(x + 2.5, y + 2.5, w - 5, h - 5);
    switch (b.kind) {
      case "yard":
        ctx.fillStyle = "#a59d8d";
        ctx.fillRect(x + 14, y + 22, w - 28, h - 36);
        ctx.strokeStyle = team.dark;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x + w - 18, y + 20);
        ctx.lineTo(x + w - 18, y + h - 12);
        ctx.lineTo(x + 18, y + h - 12);
        ctx.stroke();
        break;
      case "refinery":
        ctx.fillStyle = "#8f8778";
        for (let k = 0; k < 3; k++) {
          ctx.beginPath();
          ctx.arc(x + 18 + k * 30, y + 34, 10, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      case "power": {
        const cx = x + w / 2;
        const cy = y + h / 2 + 2;
        ctx.fillStyle = "#8f8778";
        ctx.beginPath();
        ctx.arc(cx, cy, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#6fb3d9";
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let k = 0; k < 3; k++) {
          const a = k * Math.PI * 2 / 3;
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + Math.cos(a) * 12, cy + Math.sin(a) * 12);
        }
        ctx.stroke();
        break;
      }
      case "barracks":
        ctx.fillStyle = "#7a8f5a";
        ctx.fillRect(x + 10, y + 16, w - 20, h - 30);
        ctx.fillStyle = "#5d6e43";
        for (let k = 0; k < 3; k++) ctx.fillRect(x + 14 + k * 14, y + 20, 8, h - 38);
        break;
      case "lightFactory":
      case "heavyFactory": {
        const doorW = b.kind === "heavyFactory" ? 44 : 34;
        ctx.fillStyle = "#6e675a";
        ctx.fillRect(x + w / 2 - doorW / 2, y + h - 26, doorW, 22);
        ctx.strokeStyle = "#4e483e";
        ctx.lineWidth = 1;
        for (let k = 1; k < 4; k++) {
          ctx.beginPath();
          ctx.moveTo(x + w / 2 - doorW / 2, y + h - 26 + k * 5.5);
          ctx.lineTo(x + w / 2 + doorW / 2, y + h - 26 + k * 5.5);
          ctx.stroke();
        }
        break;
      }
    }
    ctx.fillStyle = "#2b2620";
    ctx.font = "bold 9px system-ui, sans-serif";
    ctx.textAlign = "center";
    const label = BUILDING_STATS[b.kind].label.toUpperCase();
    ctx.fillText(b.w <= 2 ? label.split(" ")[0] : label, x + w / 2, b.kind.endsWith("Factory") ? y + 13 + 9 : y + h - 6);
  }
  function drawTurret(ctx, b) {
    const team = TEAM[b.owner];
    const c = buildingCentre(b);
    ctx.fillStyle = team.main;
    ctx.fillRect(b.tx * TILE + 2, b.ty * TILE + 2, TILE - 4, 4);
    ctx.save();
    ctx.translate(c.x, c.y + 1);
    ctx.rotate(b.angle);
    ctx.fillStyle = "#3a3f46";
    ctx.fillRect(2, -2.5, 16, 5);
    ctx.fillStyle = team.dark;
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = team.main;
    ctx.beginPath();
    ctx.arc(-1, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  function drawHpBar(ctx, x, y, w, frac) {
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(x, y, w, 3);
    ctx.fillStyle = frac > 0.5 ? "#5fd35a" : frac > 0.25 ? "#e8c35a" : "#e0503a";
    ctx.fillRect(x, y, w * Math.max(0, frac), 3);
  }
  var REDUCED_MOTION = typeof matchMedia === "function" && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var HULL_TURN = 4.5;
  var TURRET_TURN = 7;
  var DEPTH = Math.sin(50 * Math.PI / 180);
  function turnTowards(from, to, step) {
    let d = ((to - from + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    if (Math.abs(d) <= step) return to;
    return from + Math.sign(d) * step;
  }
  var TRACK_STEP = 7;
  var DUST_LIFE = 0.9;
  var MAX_DUST = 400;
  function propPair(img) {
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    const x = c.getContext("2d");
    x.translate(c.width, 0);
    x.scale(-1, 1);
    x.drawImage(img, 0, 0);
    return [img, c];
  }
  var TRACK_LIFE = 16;
  var MAX_TRACKS = 2400;
  function leavesTracks(kind) {
    return UNIT_STATS[kind].armor !== "infantry" && kind !== "skimmer" && kind !== "monolith" && !isAir(kind);
  }
  function drawTracks(ctx, tracks, time, cam) {
    ctx.lineWidth = 2.2;
    ctx.lineCap = "butt";
    const SHADES = 6;
    let shade = -1;
    for (const m of tracks) {
      const fade = 1 - (time - m.t) / TRACK_LIFE;
      if (fade <= 0) continue;
      const s0 = Math.min(SHADES - 1, Math.floor(fade * SHADES));
      if (s0 !== shade) {
        if (shade >= 0) ctx.stroke();
        shade = s0;
        ctx.strokeStyle = `rgba(36,28,20,${0.28 * (shade + 1) / SHADES})`;
        ctx.beginPath();
      }
      if (m.x < cam.x - 20 || m.x > cam.x + cam.w + 20 || m.y < cam.y - 20 || m.y > cam.y + cam.h + 20) continue;
      const c = Math.cos(m.angle);
      const s = Math.sin(m.angle);
      const hx = c * m.len / 2;
      const hy = s * m.len / 2;
      const ox = -s * m.gauge;
      const oy = c * m.gauge;
      ctx.moveTo(m.x + ox - hx, m.y + oy - hy);
      ctx.lineTo(m.x + ox + hx, m.y + oy + hy);
      ctx.moveTo(m.x - ox - hx, m.y - oy - hy);
      ctx.lineTo(m.x - ox + hx, m.y - oy + hy);
    }
    if (shade >= 0) ctx.stroke();
  }
  var GLOWS = /* @__PURE__ */ new Map();
  function glow(key, w, h, paint) {
    let c = GLOWS.get(key);
    if (!c) {
      c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      paint(c.getContext("2d"));
      GLOWS.set(key, c);
    }
    return c;
  }
  function radialGlow(key, stops) {
    return glow(key, 64, 64, (c) => {
      const g = c.createRadialGradient(32, 32, 0, 32, 32, 32);
      for (const [at, color] of stops) g.addColorStop(at, color);
      c.fillStyle = g;
      c.fillRect(0, 0, 64, 64);
    });
  }
  var fireGlow = () => radialGlow("fire", [[0, "rgba(255,250,220,1)"], [0.35, "rgba(255,190,70,0.95)"], [0.7, "rgba(220,80,30,0.7)"], [1, "rgba(80,40,20,0)"]]);
  var scorchGlow = () => radialGlow("scorch", [[0, "rgba(18,14,10,0.55)"], [0.6, "rgba(30,24,18,0.32)"], [1, "rgba(30,24,18,0)"]]);
  var flameGlow = () => radialGlow("flame", [[0, "rgba(255,240,180,0.9)"], [0.45, "rgba(255,150,40,0.75)"], [1, "rgba(200,60,20,0)"]]);
  var cloudGlow = (lit) => lit ? radialGlow("cloudLit", [[0, "rgba(176,156,126,0.6)"], [0.6, "rgba(140,124,102,0.3)"], [1, "rgba(70,62,52,0)"]]) : radialGlow("cloudDark", [[0, "rgba(88,78,66,0.66)"], [0.6, "rgba(70,62,52,0.34)"], [1, "rgba(70,62,52,0)"]]);
  var dustGlow = () => radialGlow("dust", [[0, "rgba(232,218,190,0.95)"], [0.55, "rgba(212,196,166,0.5)"], [1, "rgba(190,175,148,0)"]]);
  var shardGlow = (color) => radialGlow(`shard${color}`, [[0, color], [1, "rgba(111,227,240,0)"]]);
  var muzzleGlow = () => glow("muzzle", 48, 32, (c) => {
    const r = 16;
    c.translate(8, 16);
    const g = c.createRadialGradient(0, 0, 0, 0, 0, r);
    g.addColorStop(0, "rgba(255,250,220,1)");
    g.addColorStop(0.4, "rgba(255,200,90,0.9)");
    g.addColorStop(1, "rgba(255,120,40,0)");
    c.fillStyle = g;
    c.beginPath();
    c.moveTo(r * 1.6, 0);
    c.lineTo(r * 0.3, r * 0.45);
    c.lineTo(-r * 0.2, 0);
    c.lineTo(r * 0.3, -r * 0.45);
    c.closePath();
    c.fill();
    c.beginPath();
    c.arc(0, 0, r * 0.55, 0, Math.PI * 2);
    c.fill();
  });
  function drawZone(ctx, z, time) {
    const cx = (z.x + 0.5) * TILE;
    const cy = (z.y + 0.5) * TILE;
    const r = z.r * TILE;
    const colour = z.owner === null ? "rgba(242,179,61," : z.owner === 0 ? "rgba(120,180,255," : z.owner === 1 ? "rgba(255,120,100," : z.owner === 2 ? "rgba(110,230,170," : "rgba(200,150,240,";
    ctx.save();
    ctx.fillStyle = `${colour}0.08)`;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `${colour}${0.65 + 0.2 * Math.sin(time * 2.5)})`;
    ctx.lineWidth = 2.5;
    if (!z.capturable) ctx.setLineDash([10, 8]);
    ctx.lineDashOffset = -time * 12;
    ctx.stroke();
    ctx.setLineDash([]);
    if (z.claimant !== null && z.hold > 0) {
      const c = z.claimant === 0 ? "rgba(120,180,255,0.95)" : z.claimant === 1 ? "rgba(255,120,100,0.95)" : z.claimant === 2 ? "rgba(110,230,170,0.95)" : "rgba(200,150,240,0.95)";
      ctx.strokeStyle = c;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(cx, cy, r + 5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * z.hold / CAPTURE_TIME);
      ctx.stroke();
    }
    if (z.capturable) {
      ctx.fillStyle = "rgba(0,0,0,0.35)";
      ctx.beginPath();
      ctx.ellipse(cx + 8, cy + 3, 14, 5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#5d5a54";
      ctx.fillRect(cx - 7, cy - 2, 14, 6);
      ctx.strokeStyle = "#9a958a";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 5, cy);
      ctx.lineTo(cx, cy - 30);
      ctx.lineTo(cx + 5, cy);
      ctx.moveTo(cx - 3, cy - 10);
      ctx.lineTo(cx + 3, cy - 10);
      ctx.moveTo(cx - 2, cy - 20);
      ctx.lineTo(cx + 2, cy - 20);
      ctx.stroke();
      ctx.fillStyle = "#c9c2b4";
      ctx.beginPath();
      ctx.ellipse(cx + 4, cy - 24, 6, 3.5, -0.5, 0, Math.PI * 2);
      ctx.fill();
      if (Math.sin(time * 4) > 0) {
        ctx.fillStyle = `${colour}1)`;
        ctx.beginPath();
        ctx.arc(cx, cy - 31, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.font = "700 12px 'Barlow Condensed', system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillText(z.label.toUpperCase(), cx + 1, cy - r - 7);
    ctx.fillStyle = `${colour}1)`;
    ctx.fillText(z.label.toUpperCase(), cx, cy - r - 8);
    ctx.restore();
  }
  function drawSalvage(ctx, p) {
    const cx = (p.x + 0.5) * TILE;
    const cy = (p.y + 0.5) * TILE;
    const size = Math.min(1.4, 0.55 + p.amount / 400);
    const fade = Math.min(1, (ECONOMY.salvageLife - p.age) / 30);
    ctx.save();
    ctx.globalAlpha = fade;
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.ellipse(cx + 2, cy + 3, 12 * size, 6 * size, 0, 0, Math.PI * 2);
    ctx.fill();
    const bits = 6;
    for (let k = 0; k < bits; k++) {
      const a = hash3(p.id, k) * Math.PI * 2;
      const d = hash3(p.id, k + 9) * 8 * size;
      const w = (4 + hash3(p.id, k + 17) * 6) * size;
      const h = (2 + hash3(p.id, k + 23) * 4) * size;
      ctx.save();
      ctx.translate(cx + Math.cos(a) * d, cy + Math.sin(a) * d * 0.6);
      ctx.rotate(hash3(p.id, k + 31) * Math.PI);
      ctx.fillStyle = k % 3 === 0 ? "#8a4a2a" : k % 3 === 1 ? "#5a5650" : "#7a7466";
      ctx.fillRect(-w / 2, -h / 2, w, h);
      ctx.fillStyle = "rgba(255,255,255,0.12)";
      ctx.fillRect(-w / 2, -h / 2, w, 1);
      ctx.restore();
    }
    ctx.restore();
  }
  function drawBarriers(ctx, g, shown) {
    const at = /* @__PURE__ */ new Map();
    for (const b of shown) if (b.kind === "wall" || b.kind === "gate") at.set(b.ty * g.map.w + b.tx, b);
    if (at.size === 0) return;
    const linked = (b, dx, dy) => {
      const o = at.get((b.ty + dy) * g.map.w + b.tx + dx);
      return !!o && o.owner === b.owner;
    };
    for (const b of at.values()) {
      const x = b.tx * TILE;
      const y = b.ty * TILE;
      const hurt = 1 - b.hp / BUILDING_STATS[b.kind].maxHp;
      if (b.kind === "wall") {
        const c = TILE / 2;
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(x + 6, y + 10, TILE - 6, TILE - 6);
        const top = "#b9b1a2";
        const face = "#8b8476";
        const block = (bx, by, bw, bh) => {
          ctx.fillStyle = face;
          ctx.fillRect(bx, by + 6, bw, bh);
          ctx.fillStyle = top;
          ctx.fillRect(bx, by, bw, bh);
        };
        block(x + 7, y + 4, TILE - 14, TILE - 14);
        if (linked(b, 1, 0)) block(x + c, y + 6, c, TILE - 18);
        if (linked(b, -1, 0)) block(x, y + 6, c, TILE - 18);
        if (linked(b, 0, 1)) block(x + 9, y + c, TILE - 18, c);
        if (linked(b, 0, -1)) block(x + 9, y, TILE - 18, c);
        ctx.fillStyle = TEAM[b.owner].main;
        ctx.fillRect(x + 10, y + 7, TILE - 20, 3);
        if (hurt > 0.4) {
          ctx.strokeStyle = "rgba(40,30,20,0.7)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(x + 10, y + 8);
          ctx.lineTo(x + 16, y + 15);
          ctx.lineTo(x + 13, y + 20);
          ctx.stroke();
        }
      } else {
        const open = g.units.some((u) => !hostile(g, u.owner, b.owner) && Math.hypot(u.x - (x + TILE / 2), u.y - (y + TILE / 2)) < TILE * 1.6);
        const horizontal = linked(b, 1, 0) || linked(b, -1, 0) || !(linked(b, 0, 1) || linked(b, 0, -1));
        ctx.fillStyle = "rgba(0,0,0,0.3)";
        ctx.fillRect(x + 4, y + 8, TILE - 4, TILE - 6);
        ctx.fillStyle = "#6e6a62";
        if (horizontal) {
          ctx.fillRect(x + 1, y + 6, 7, TILE - 10);
          ctx.fillRect(x + TILE - 8, y + 6, 7, TILE - 10);
        } else {
          ctx.fillRect(x + 6, y + 1, TILE - 12, 7);
          ctx.fillRect(x + 6, y + TILE - 8, TILE - 12, 7);
        }
        ctx.fillStyle = TEAM[b.owner].main;
        if (horizontal) ctx.fillRect(x + 8, y + TILE / 2 - 3, open ? 5 : TILE - 16, 6);
        else ctx.fillRect(x + TILE / 2 - 3, y + 8, 6, open ? 5 : TILE - 16);
        ctx.fillStyle = "#f2b33d";
        ctx.fillRect(horizontal ? x + 2 : x + TILE / 2 - 2, horizontal ? y + 7 : y + 2, 4, 3);
      }
    }
  }
  function drawStrike(ctx, s, time) {
    ctx.save();
    if (s.kind === "orbital") {
      const r = SUPER.orbitalRadius * TILE;
      if (s.age < SUPER.orbitalDelay) {
        const k = s.age / SUPER.orbitalDelay;
        ctx.strokeStyle = `rgba(255,70,50,${0.5 + 0.4 * Math.sin(time * 14)})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(s.x, s.y, r * (1.6 - 0.6 * k), 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([6, 6]);
        ctx.beginPath();
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = `rgba(255,120,90,${0.15 + 0.3 * k})`;
        ctx.fillRect(s.x - 2, s.y - 600, 4, 600);
      } else {
        const k = 1 - (s.age - SUPER.orbitalDelay);
        if (k > 0) {
          ctx.globalCompositeOperation = "lighter";
          drawGlow(ctx, fireGlow(), s.x, s.y, r * 1.2 * k, r * 0.9 * k, k);
          ctx.fillStyle = `rgba(255,240,220,${0.85 * k})`;
          ctx.fillRect(s.x - 14 * k, s.y - 700, 28 * k, 700);
        }
      }
    } else if (s.kind === "swarm") {
      const r = SUPER.swarmRadius * TILE;
      const fade = Math.min(1, s.age, s.life - s.age);
      ctx.globalAlpha = fade;
      ctx.strokeStyle = "rgba(255,150,80,0.35)";
      ctx.beginPath();
      ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
      ctx.stroke();
      for (let k = 0; k < 26; k++) {
        const a = time * (1.5 + k % 5 * 0.4) + k * 2.4;
        const d = r * (0.2 + k * 37 % 80 / 100);
        const x = s.x + Math.cos(a) * d;
        const y = s.y + Math.sin(a * 1.3) * d * 0.8;
        ctx.fillStyle = "#2b2824";
        ctx.fillRect(x - 2.5, y - 1.5, 5, 3);
        ctx.fillStyle = k % 3 === 0 ? "#ff7a3d" : "#c9c2b4";
        ctx.fillRect(x - 1, y - 2.5, 2, 1.2);
      }
    }
    ctx.restore();
  }
  function drawAimRing(ctx, ring, time) {
    ctx.save();
    ctx.strokeStyle = `rgba(255,90,60,${0.6 + 0.3 * Math.sin(time * 8)})`;
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 6]);
    ctx.beginPath();
    ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(ring.x - 10, ring.y);
    ctx.lineTo(ring.x + 10, ring.y);
    ctx.moveTo(ring.x, ring.y - 10);
    ctx.lineTo(ring.x, ring.y + 10);
    ctx.stroke();
    ctx.restore();
  }
  function drawRotor(ctx, u, time) {
    const rotors = u.kind === "gunship" ? [0] : u.kind === "dropship" ? [-14, 14] : [];
    const r = u.kind === "gunship" ? 20 : 16;
    for (const along of rotors) {
      const cx = u.x + Math.cos(u.angle) * along;
      const cy = u.y + Math.sin(u.angle) * along - 10;
      ctx.save();
      ctx.globalAlpha = 0.16;
      ctx.fillStyle = "#d8d2c4";
      ctx.beginPath();
      ctx.ellipse(cx, cy, r, r * 0.64, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 0.45;
      ctx.strokeStyle = "#2b2824";
      ctx.lineWidth = 1.5;
      const a = time * 31 + u.id;
      ctx.beginPath();
      ctx.moveTo(cx - Math.cos(a) * r, cy - Math.sin(a) * r * 0.64);
      ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.64);
      ctx.stroke();
      ctx.restore();
    }
  }
  function drawAmmo(ctx, u) {
    const max = AMMO[u.kind]?.shots ?? 0;
    const r = UNIT_STATS[u.kind].radius;
    const w = 4;
    const x0 = u.x - max * (w + 1) / 2;
    for (let k = 0; k < max; k++) {
      ctx.fillStyle = k < Math.floor(u.ammo ?? 0) ? "#f2b33d" : "rgba(30,26,22,0.8)";
      ctx.fillRect(x0 + k * (w + 1), u.y + r + 4, w, 3);
    }
  }
  var shadowGlow = () => radialGlow("airShadow", [[0, "rgba(0,0,0,0.6)"], [0.6, "rgba(0,0,0,0.35)"], [1, "rgba(0,0,0,0)"]]);
  var lightGlow = () => radialGlow("light", [[0, "rgba(255,255,255,1)"], [0.45, "rgba(255,255,255,0.75)"], [1, "rgba(255,255,255,0)"]]);
  function makeDustTile() {
    const size = 256;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const x = c.getContext("2d");
    const puff = dustGlow();
    for (let i = 0; i < 70; i++) {
      const px = Math.random() * size;
      const py = Math.random() * size;
      const r = 10 + Math.random() * 26;
      const a = 0.06 + Math.random() * 0.12;
      for (const dx of [-size, 0, size]) {
        for (const dy of [-size, 0, size]) drawGlow(x, puff, px + dx, py + dy, r * 2.6, r, a);
      }
    }
    return c;
  }
  function drawGlow(ctx, img, x, y, rx, ry, alpha) {
    if (alpha <= 4e-3 || rx <= 0 || ry <= 0) return;
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.drawImage(img, x - rx, y - ry, rx * 2, ry * 2);
    ctx.globalAlpha = 1;
  }
  var WRECK_STRIPS = /* @__PURE__ */ new WeakMap();
  function wreckStrip(img) {
    let c = WRECK_STRIPS.get(img);
    if (!c) {
      c = document.createElement("canvas");
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const x = c.getContext("2d");
      x.drawImage(img, 0, 0);
      x.globalCompositeOperation = "source-atop";
      x.fillStyle = "rgba(24,20,16,0.8)";
      x.fillRect(0, 0, c.width, c.height);
      WRECK_STRIPS.set(img, c);
    }
    return c;
  }
  var BEACON_COLOR = { concord: "#f2b33d", shardbound: "#6fe3f0", reclaimers: "#ff6a3d" };
  var beaconGlow = (color) => radialGlow(`beacon${color}`, [[0, "rgba(255,255,255,1)"], [0.18, color], [1, "rgba(0,0,0,0)"]]);
  var smokeGlow = () => radialGlow("smoke", [[0, "rgba(192,186,178,0.95)"], [0.55, "rgba(170,164,156,0.5)"], [1, "rgba(150,144,136,0)"]]);
  function drawBeacons(ctx, b, time, color, dark) {
    const w = b.w * TILE;
    const corners = b.w >= 2 ? [0.2, 0.82] : [0.5];
    corners.forEach((fx, k) => {
      const phase = (time * (dark ? 0.5 : 0.7) + b.id * 0.37 + k * 0.5) % 1;
      const on2 = dark ? phase < 0.5 ? 0.5 : 0 : phase < 0.12 ? 1 : phase < 0.2 ? 0.35 : 0.12;
      if (on2 <= 0) return;
      const x = b.tx * TILE + w * fx;
      const y = b.ty * TILE - 4;
      drawGlow(ctx, beaconGlow(dark ? "#e0503a" : color), x, y, 9, 9, on2);
    });
  }
  function drawDamageSmoke(ctx, u, time) {
    const s = UNIT_STATS[u.kind];
    if (s.armor === "infantry") return;
    const frac = u.hp / s.maxHp;
    if (frac >= 0.35) return;
    const heavy = frac < 0.15 ? 1.3 : 1;
    const r = s.radius / 11;
    for (let p = 0; p < 5; p++) {
      const a = (time * 0.7 + p / 5 + u.id * 0.13) % 1;
      const size = (4 + a * 10) * r * heavy;
      drawGlow(ctx, smokeGlow(), u.x - 2 * r + a * 8, u.y - 4 - a * 28 * r, size, size, 0.95 * Math.sqrt(1 - a) * Math.min(1, a * 4 + 0.4));
    }
    if (frac < 0.15 && (time * 3 + u.id) % 1 < 0.15) drawGlow(ctx, flameGlow(), u.x - 2 * r, u.y - 3, 4 * r, 5 * r, 0.9);
  }
  function drawBurning(ctx, b, time) {
    const frac = b.hp / BUILDING_STATS[b.kind].maxHp;
    if (frac >= 0.5 || b.hp <= 0) return;
    const w = b.w * TILE;
    const h = b.h * TILE;
    const spots = frac < 0.25 ? 2 : 1;
    for (let k = 0; k < spots; k++) {
      const seed = b.id * 7.3 + k * 3.1;
      const fx = b.tx * TILE + w * (0.3 + 0.4 * ((Math.sin(seed) + 1) / 2));
      const fy = b.ty * TILE + h * (0.25 + 0.35 * ((Math.cos(seed * 1.7) + 1) / 2));
      const heavy = frac < 0.25 ? 1.3 : 0.8;
      for (let p = 0; p < (LOW ? 0 : 7); p++) {
        const a = (time * 0.45 + p / 7 + k * 0.37) % 1;
        ctx.fillStyle = `rgba(186,180,172,${0.75 * Math.sqrt(1 - a) * Math.min(1, a * 4 + 0.4)})`;
        ctx.beginPath();
        ctx.arc(fx + Math.sin(p * 2.3 + time) * 3 + a * 14, fy - a * 52 * heavy, (5 + a * 15) * heavy, 0, Math.PI * 2);
        ctx.fill();
      }
      if (frac < 0.25) {
        for (let f = 0; f < 3; f++) {
          const flick = 0.6 + 0.4 * Math.sin(time * (13 + f * 4) + seed + f);
          const fx2 = fx + (f - 1) * 4;
          const r = (6 + 3 * f) * flick;
          drawGlow(ctx, flameGlow(), fx2, fy - r * 0.5, r * 0.6, r * 1.1, 1);
        }
      }
    }
  }
  function drawGroundEffect(ctx, e, sprites) {
    const t = e.age / e.life;
    const fade = t > 0.8 ? (1 - t) / 0.2 : 1;
    if (e.kind === "scorch") {
      const r = 14 * e.size;
      drawGlow(ctx, scorchGlow(), e.x, e.y, r, r * 0.75, fade);
      return;
    }
    const sheet = e.unit ? UNIT_SPRITES[e.unit] : void 0;
    const img = sheet && e.unit ? sprites.get(e.unit, e.owner ?? 0) : null;
    ctx.save();
    ctx.globalAlpha = 0.9 * fade;
    if (sheet && img) {
      drawStrip(ctx, wreckStrip(img), sheet, (e.angle ?? 0) + 0.25, e.x, e.y);
    } else {
      ctx.fillStyle = "#1c1814";
      ctx.beginPath();
      ctx.ellipse(e.x, e.y, 10 * e.size, 7 * e.size, e.angle ?? 0, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    if (e.age < 8 && !LOW) {
      const flicker = 0.5 + 0.5 * Math.sin(e.age * 23 + e.x);
      ctx.fillStyle = `rgba(255,${Math.round(120 + 80 * flicker)},40,${0.55 * (1 - e.age / 8)})`;
      ctx.beginPath();
      ctx.arc(e.x + 3 * e.size, e.y - 2 * e.size, (2 + 2 * flicker) * e.size, 0, Math.PI * 2);
      ctx.fill();
    }
    if (e.age < 20 && !LOW) {
      for (let k = 0; k < 3; k++) {
        const a = (e.age * 0.7 + k * 0.33) % 1;
        ctx.fillStyle = `rgba(70,64,58,${0.28 * (1 - a) * (1 - e.age / 20) * fade})`;
        ctx.beginPath();
        ctx.arc(e.x + 2 + a * 6, e.y - 4 - a * 26, 3 + a * 7, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  function drawEffect(ctx, e) {
    const t = e.age / e.life;
    switch (e.kind) {
      case "fire": {
        const grow2 = t < 0.25 ? t / 0.25 : 1 - (t - 0.25) * 0.5;
        const r = 16 * e.size * grow2;
        drawGlow(ctx, fireGlow(), e.x, e.y - 6 * t * e.size, r, r, 1 - t);
        break;
      }
      case "ring": {
        ctx.strokeStyle = `rgba(255,235,200,${0.6 * (1 - t)})`;
        ctx.lineWidth = 3 * (1 - t) + 0.5;
        ctx.beginPath();
        ctx.ellipse(e.x, e.y, 30 * e.size * t, 22 * e.size * t, 0, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
      case "plume": {
        if (LOW) break;
        for (let k = 0; k < 6; k++) {
          const a = (e.age * 0.6 + k / 6) % 1;
          const alpha = 0.32 * (1 - a) * Math.min(1, (1 - t) * 3) * Math.min(1, e.age * 4);
          if (alpha < 0.01) continue;
          ctx.fillStyle = `rgba(60,55,50,${alpha})`;
          ctx.beginPath();
          ctx.arc(e.x + Math.sin(k * 2.1 + e.age) * 4 * e.size + a * 10, e.y - a * 46 * e.size, (4 + a * 12) * e.size, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case "debris":
      case "shard":
      case "spark": {
        const p = particlePos(e, e.age);
        const hop = e.kind === "spark" ? 0 : Math.sin(Math.min(1, t * 1.4) * Math.PI) * 14 * e.size;
        const rot = (e.spin ?? 0) * e.age;
        ctx.save();
        ctx.translate(p.x, p.y - hop);
        ctx.rotate(rot);
        if (e.kind === "spark") {
          ctx.strokeStyle = `rgba(255,${Math.round(220 - 100 * t)},120,${1 - t})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-(e.vx ?? 0) * 0.03, -(e.vy ?? 0) * 0.03);
          ctx.stroke();
        } else if (e.kind === "shard") {
          const s = 4 * e.size;
          const alpha = Math.min(1, (1 - t) * 2);
          if (!LOW) drawGlow(ctx, shardGlow(e.color ?? "#6fe3f0"), 0, 0, s * 1.8, s * 1.8, alpha * 0.5);
          ctx.globalAlpha = alpha;
          ctx.fillStyle = e.color ?? "#6fe3f0";
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.lineTo(s * 0.4, 0);
          ctx.lineTo(0, s * 0.8);
          ctx.lineTo(-s * 0.4, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          const s = 2.6 * e.size;
          ctx.globalAlpha = Math.min(1, (1 - t) * 2);
          ctx.fillStyle = "#2c2824";
          ctx.fillRect(-s, -s * 0.6, s * 2, s * 1.2);
          ctx.fillStyle = "#5a5047";
          ctx.fillRect(-s, -s * 0.6, s * 2, s * 0.4);
        }
        ctx.restore();
        break;
      }
      case "muzzle": {
        const k = 9 * e.size * (1 - t * 0.5) / 16;
        ctx.save();
        ctx.translate(e.x, e.y);
        ctx.rotate(e.angle ?? 0);
        ctx.globalAlpha = 1 - t;
        ctx.drawImage(muzzleGlow(), -8 * k, -16 * k, 48 * k, 32 * k);
        ctx.restore();
        break;
      }
      case "tracer":
        ctx.strokeStyle = `rgba(255,235,150,${1 - t})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(e.x2, e.y2);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        break;
      case "beam": {
        ctx.lineCap = "round";
        ctx.strokeStyle = `rgba(95,216,240,${0.45 * (1 - t)})`;
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(e.x2, e.y2);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        ctx.strokeStyle = `rgba(235,255,255,${1 - t})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.lineCap = "butt";
        break;
      }
      case "heal": {
        ctx.lineCap = "round";
        ctx.strokeStyle = `rgba(120,240,140,${0.5 * (1 - t)})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(e.x2, e.y2);
        ctx.lineTo(e.x, e.y);
        ctx.stroke();
        ctx.lineCap = "butt";
        ctx.strokeStyle = `rgba(160,255,170,${1 - t})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 4 + 8 * t, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }
      case "flame": {
        const a = Math.atan2(e.y - e.y2, e.x - e.x2);
        const len = Math.hypot(e.x - e.x2, e.y - e.y2);
        ctx.save();
        ctx.translate(e.x2, e.y2);
        ctx.rotate(a);
        const grad = ctx.createLinearGradient(0, 0, len, 0);
        grad.addColorStop(0, `rgba(255,240,170,${0.9 * (1 - t)})`);
        grad.addColorStop(0.5, `rgba(255,140,40,${0.75 * (1 - t)})`);
        grad.addColorStop(1, `rgba(200,60,20,${0.2 * (1 - t)})`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(len * 0.6, -9, len, -4 - 6 * t);
        ctx.lineTo(len, 4 + 6 * t);
        ctx.quadraticCurveTo(len * 0.6, 9, 0, 0);
        ctx.fill();
        ctx.restore();
        break;
      }
      case "smoke":
        ctx.fillStyle = `rgba(150,140,130,${0.45 * (1 - t)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y - 4 * t, 2 + 4 * t, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "hit":
        ctx.fillStyle = `rgba(255,220,120,${1 - t})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, 2 + 3 * t, 0, Math.PI * 2);
        ctx.fill();
        break;
      case "boom":
      case "bigBoom": {
        const r = (e.kind === "bigBoom" ? 18 : 10) * e.size * (0.4 + t);
        ctx.fillStyle = `rgba(80,70,60,${0.5 * (1 - t)})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y - t * 8, r * 1.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,${Math.round(200 - 120 * t)},60,${1 - t})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, r * (1 - t * 0.5), 0, Math.PI * 2);
        ctx.fill();
        break;
      }
    }
  }
  function drawProjectile(ctx, p) {
    if (p.style === "arc") {
      const total = Math.hypot(p.tx - p.sx, p.ty - p.sy) || 1;
      const done = Math.min(1, Math.hypot(p.x - p.sx, p.y - p.sy) / total);
      const lift2 = Math.sin(done * Math.PI) * Math.min(90, total * 0.35);
      ctx.fillStyle = "rgba(0,0,0,0.3)";
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, 3, 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#3a3128";
      ctx.beginPath();
      ctx.arc(p.x, p.y - lift2, 3.5, 0, Math.PI * 2);
      ctx.fill();
      return;
    }
    if (p.style === "rocket") {
      const a = Math.atan2(p.ty - p.y, p.tx - p.x);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(a);
      ctx.fillStyle = "rgba(255,170,60,0.9)";
      ctx.beginPath();
      ctx.ellipse(-6, 0, 4, 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#d8dde4";
      ctx.fillRect(-3, -1.5, 8, 3);
      ctx.restore();
      return;
    }
    ctx.fillStyle = "#2b2620";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "rgba(255,220,140,0.9)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  }
  function drawStormShadow(ctx, st) {
    const r = stormRadius(st) * TILE;
    const fade = Math.min(1, st.age / 2, (st.life - st.age) / 2);
    const g = ctx.createRadialGradient(st.x, st.y, r * 0.3, st.x, st.y, r * 2.1);
    g.addColorStop(0, `rgba(14,16,20,${0.35 * fade})`);
    g.addColorStop(0.55, `rgba(20,20,22,${0.18 * fade})`);
    g.addColorStop(1, "rgba(20,20,22,0)");
    ctx.fillStyle = g;
    ctx.fillRect(st.x - r * 2.1, st.y - r * 2.1, r * 4.2, r * 4.2);
  }
  function drawStorm(ctx, st, time) {
    const r = stormRadius(st) * TILE;
    const fade = Math.min(1, st.age / 2, (st.life - st.age) / 2);
    for (let i = 0; i < (LOW ? 0 : 18); i++) {
      const a = i * 2.17 + time * (0.35 + i % 3 * 0.12);
      const d = r * (0.55 + i % 4 * 0.17);
      const cx = st.x + Math.cos(a) * d;
      const cy = st.y + Math.sin(a) * d * 0.85;
      const cr = r * (0.35 + i % 5 * 0.07);
      drawGlow(ctx, cloudGlow(i % 6 >= 4), cx, cy, cr, cr, fade);
    }
    const flare = Math.max(0, Math.sin(time * 0.9 + st.id) * Math.sin(time * 2.3 + 1)) ** 3;
    const core = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, r * 0.8);
    core.addColorStop(0, `rgba(160,240,250,${(0.12 + flare * 0.4) * fade})`);
    core.addColorStop(1, "rgba(111,227,240,0)");
    ctx.fillStyle = core;
    ctx.fillRect(st.x - r, st.y - r, r * 2, r * 2);
    const beat = Math.floor(time * 1.3 + st.id * 0.37);
    const phase = time * 1.3 + st.id * 0.37 - beat;
    if (!REDUCED_MOTION && !LOW && phase < 0.12 && beat * 2654435761 % 5 < 2) {
      const a0 = beat * 1.618 % 1 * Math.PI * 2;
      const flash = (1 - phase / 0.12) * fade;
      ctx.beginPath();
      let lx = st.x + Math.cos(a0) * r * 0.15;
      let ly = st.y + Math.sin(a0) * r * 0.15;
      ctx.moveTo(lx, ly);
      for (let k = 1; k <= 6; k++) {
        const jitter = Math.sin(beat * 12.9898 + k * 78.233) * 0.5;
        lx = st.x + Math.cos(a0 + jitter) * r * (0.15 + k * 0.13);
        ly = st.y + Math.sin(a0 + jitter) * r * (0.15 + k * 0.13);
        ctx.lineTo(lx, ly);
      }
      ctx.strokeStyle = `rgba(111,227,240,${0.35 * flash})`;
      ctx.lineWidth = 7;
      ctx.stroke();
      ctx.strokeStyle = `rgba(210,250,255,${flash})`;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    const grad = ctx.createRadialGradient(st.x, st.y, r * 0.2, st.x, st.y, r * 1.15);
    grad.addColorStop(0, `rgba(30,45,65,${0.34 * fade})`);
    grad.addColorStop(0.75, `rgba(60,100,135,${0.22 * fade})`);
    grad.addColorStop(1, "rgba(70,110,140,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(st.x, st.y, r * 1.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = `rgba(170,230,255,${0.6 * fade})`;
    ctx.lineWidth = 3;
    for (let k = 0; k < 3; k++) {
      const a0 = time * 1.6 + k * Math.PI * 2 / 3;
      ctx.beginPath();
      ctx.arc(st.x, st.y, r * (0.45 + k * 0.18), a0, a0 + 1.6);
      ctx.stroke();
    }
    for (let k = 0; k < 48; k++) {
      const a = time * (1.2 + k % 5 * 0.25) + k * 2.39;
      const rr = r * (0.2 + k * 37 % 80 / 100);
      const px = st.x + Math.cos(a) * rr;
      const py = st.y + Math.sin(a) * rr * 0.8;
      ctx.fillStyle = k % 4 === 0 ? `rgba(230,255,255,${0.9 * fade})` : `rgba(95,216,240,${0.8 * fade})`;
      ctx.fillRect(px, py, 4, 2);
    }
  }
  function drawBuildingSelection(ctx, b) {
    const x = b.tx * TILE;
    const y = b.ty * TILE;
    const w = b.w * TILE;
    const h = b.h * TILE;
    ctx.strokeStyle = COLORS.select;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
    ctx.setLineDash([]);
    const hpFrac = b.hp / BUILDING_STATS[b.kind].maxHp;
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(x, y - 7, w, 4);
    ctx.fillStyle = "#5fd35a";
    ctx.fillRect(x, y - 7, w * hpFrac, 4);
  }
  var SpriteBank = class {
    images = /* @__PURE__ */ new Map();
    /** Each side's buildings come from its faction's art (assets/buildings/<faction>/). */
    constructor(factions, sides = [0, 1]) {
      const strips = [...Object.keys(UNIT_SPRITES), ...Object.keys(TURRET_SPRITES)];
      const buildings = Object.keys(BUILDING_STATS).filter((k) => !(k in TURRET_SPRITES));
      for (const owner of sides) {
        for (const kind of strips) this.load(`${kind}_${owner}`, `assets/units/${kind}_${owner}.png`);
        for (const kind of Object.keys(UNIT_TURRETS)) this.load(`${kind}_turret_${owner}`, `assets/units/${kind}_turret_${owner}.png`);
        for (const kind of buildings) this.load(`${kind}_${owner}`, `assets/buildings/${factions[owner]}/${kind}_${owner}.png`);
      }
    }
    load(key, src) {
      const img = new Image();
      img.src = src;
      this.images.set(key, img);
    }
    get(kind, owner) {
      const img = this.images.get(`${kind}_${owner}`);
      return img && img.complete && img.naturalWidth > 0 ? img : null;
    }
    turret(kind, owner) {
      const img = this.images.get(`${kind}_turret_${owner}`);
      return img && img.complete && img.naturalWidth > 0 ? img : null;
    }
  };
  function drawStrip(ctx, img, sheet, angle, x, y) {
    const step = Math.PI * 2 / sheet.frames;
    const a = (angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    const frame = Math.round(a / step) % sheet.frames;
    const s = sheet.size * sheet.scale;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(img, frame * sheet.size, 0, sheet.size, sheet.size, x - s / 2, y - s / 2, s, s);
    ctx.imageSmoothingEnabled = false;
  }
  function recoil(u) {
    const kind = UNIT_STATS[u.kind].weapon;
    if (!kind || UNIT_STATS[u.kind].armor === "infantry") return 0;
    const w = weapon(kind);
    const since = w.cooldown * rankCooldown(u) - u.cooldown;
    if (since < 0 || since > RECOIL_TIME) return 0;
    const heavy = w.style === "shell" || w.style === "arc" || w.style === "rocket";
    return (heavy ? 3 : 1) * (1 - since / RECOIL_TIME);
  }
  var RECOIL_TIME = 0.16;
  function drawUnit(ctx, u, time, sprites, pose) {
    const sheet = UNIT_SPRITES[u.kind];
    const img = sheet && sprites.get(u.kind, u.owner);
    const turretInfo = UNIT_TURRETS[u.kind];
    const turretImg = turretInfo && sprites.turret(u.kind, u.owner);
    if (sheet && img && pose && turretInfo && turretImg) {
      const kick = recoil(u);
      drawStrip(ctx, img, sheet, pose.hull, u.x, u.y);
      const px = u.x + Math.cos(pose.hull) * turretInfo.pivot - Math.cos(pose.turret) * kick;
      const py = u.y + (Math.sin(pose.hull) * turretInfo.pivot - Math.sin(pose.turret) * kick) * DEPTH;
      drawStrip(ctx, turretImg, sheet, pose.turret, px, py);
      return;
    }
    if (sheet && img) {
      if (u.kind === "harvester" && u.harvest === "harvesting") {
        ctx.save();
        ctx.translate(u.x, u.y);
        ctx.rotate(u.angle);
        drawDust(ctx, time);
        ctx.restore();
      }
      const kick = recoil(u);
      const bob = UNIT_STATS[u.kind].armor === "infantry" && u.path.length > 0 ? Math.abs(Math.sin(time * 11 + u.id)) * -1.5 : 0;
      drawStrip(ctx, img, sheet, u.angle, u.x - Math.cos(u.angle) * kick, u.y - Math.sin(u.angle) * kick + bob);
      return;
    }
    const team = TEAM[u.owner];
    ctx.save();
    ctx.translate(u.x, u.y);
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.beginPath();
    ctx.ellipse(2, 3, UNIT_STATS[u.kind].radius, UNIT_STATS[u.kind].radius * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.rotate(u.angle);
    if (u.kind === "harvester") {
      if (u.harvest === "harvesting") drawDust(ctx, time);
      ctx.fillStyle = team.dark;
      ctx.fillRect(-13, -10, 26, 20);
      ctx.fillStyle = team.main;
      ctx.fillRect(-11, -8, 16, 16);
      ctx.fillStyle = "#e8c35a";
      ctx.fillRect(5, -9, 8, 18);
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.fillRect(-9, -6, 6, 4);
    } else if (u.kind === "tank") {
      ctx.fillStyle = "#2b3038";
      ctx.fillRect(-11, -9, 22, 4);
      ctx.fillRect(-11, 5, 22, 4);
      ctx.fillStyle = team.dark;
      ctx.fillRect(-10, -6, 20, 12);
      ctx.fillStyle = team.main;
      ctx.beginPath();
      ctx.arc(-1, 0, 5.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#d8dde4";
      ctx.fillRect(3, -1.5, 11, 3);
    } else if (u.kind === "infantry") {
      ctx.fillStyle = team.dark;
      ctx.beginPath();
      ctx.arc(0, 0, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#e9dcc4";
      ctx.beginPath();
      ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#222";
      ctx.fillRect(3, -0.75, 5, 1.5);
    } else {
      ctx.fillStyle = team.dark;
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = team.main;
      ctx.beginPath();
      ctx.arc(-1, 0, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.moveTo(9, 0);
      ctx.lineTo(3, -4);
      ctx.lineTo(3, 4);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
  function drawDust(ctx, time) {
    const p = time * 3 % 1;
    ctx.fillStyle = `rgba(220,150,90,${0.5 * (1 - p)})`;
    ctx.beginPath();
    ctx.arc(20 + p * 8, 0, 4 + p * 6, 0, Math.PI * 2);
    ctx.fill();
  }
  function drawRally(ctx, b) {
    const c = buildingCentre(b);
    const x = (b.rally.x + 0.5) * TILE;
    const y = (b.rally.y + 0.5) * TILE;
    ctx.strokeStyle = "rgba(242,179,61,0.85)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = "#d8dde4";
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 16);
    ctx.stroke();
    ctx.fillStyle = "#f2b33d";
    ctx.beginPath();
    ctx.moveTo(x, y - 16);
    ctx.lineTo(x + 10, y - 12);
    ctx.lineTo(x, y - 8);
    ctx.fill();
  }
  function drawWaypoints(ctx, u) {
    const pts = [u.goal, ...u.waypoints].filter((p) => !!p);
    ctx.strokeStyle = "rgba(242,179,61,0.6)";
    ctx.fillStyle = "rgba(242,179,61,0.85)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(u.x, u.y);
    for (const p of pts) ctx.lineTo((p.x + 0.5) * TILE, (p.y + 0.5) * TILE);
    ctx.stroke();
    ctx.setLineDash([]);
    for (const p of pts) ctx.fillRect((p.x + 0.5) * TILE - 2, (p.y + 0.5) * TILE - 2, 4, 4);
  }
  function drawRepairing(ctx, b, time) {
    const c = buildingCentre(b);
    const a = 0.55 + 0.35 * Math.sin(time * 5);
    ctx.fillStyle = `rgba(20,30,20,${a * 0.7})`;
    ctx.beginPath();
    ctx.arc(c.x, c.y, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = `rgba(140,255,140,${a})`;
    ctx.fillRect(c.x - 7, c.y - 2.5, 14, 5);
    ctx.fillRect(c.x - 2.5, c.y - 7, 5, 14);
  }
  function drawCharge(ctx, c, time) {
    const rate = c.timer < 1 ? 12 : 5;
    const on2 = Math.sin(time * rate * Math.PI) > 0;
    ctx.fillStyle = "#1b1612";
    ctx.fillRect(c.x - 4, c.y - 3, 8, 6);
    ctx.fillStyle = on2 ? "#ff3a2a" : "#6a1a14";
    ctx.beginPath();
    ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    if (on2) {
      ctx.fillStyle = "rgba(255,60,40,0.25)";
      ctx.beginPath();
      ctx.arc(c.x, c.y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function drawWard(ctx, u, time) {
    const r = UNIT_STATS[u.kind].radius + 4;
    ctx.strokeStyle = `rgba(140,235,255,${0.45 + 0.25 * Math.sin(time * 6 + u.id)})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(u.x, u.y, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  function drawRank(ctx, u) {
    const r = UNIT_STATS[u.kind].radius;
    const x = u.x + r + 2;
    let y = u.y - r + 2;
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    for (let i = 0; i < u.rank; i++) {
      ctx.strokeStyle = "rgba(0,0,0,0.6)";
      ctx.beginPath();
      ctx.moveTo(x - 3, y + 1);
      ctx.lineTo(x, y - 2);
      ctx.lineTo(x + 3, y + 1);
      ctx.stroke();
      ctx.strokeStyle = u.rank >= 3 ? "#ff9a3c" : "#ffd75a";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.lineWidth = 2;
      y += 4;
    }
    ctx.lineJoin = "miter";
  }
  function drawSelection(ctx, u) {
    const r = UNIT_STATS[u.kind].radius + 4;
    const l = 5;
    ctx.strokeStyle = COLORS.select;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const cx = u.x + sx * r;
      const cy = u.y + sy * r;
      ctx.moveTo(cx, cy - sy * l);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx - sx * l, cy);
    }
    ctx.stroke();
    const w = r * 2;
    const hpFrac = u.hp / UNIT_STATS[u.kind].maxHp;
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(u.x - r, u.y - r - 7, w, 4);
    ctx.fillStyle = hpFrac > 0.5 ? "#5fd35a" : hpFrac > 0.25 ? "#e8c35a" : "#e0503a";
    ctx.fillRect(u.x - r, u.y - r - 7, w * hpFrac, 4);
    if (u.kind === "harvester") {
      ctx.fillStyle = "rgba(0,0,0,0.6)";
      ctx.fillRect(u.x - r, u.y + r + 3, w, 4);
      ctx.fillStyle = COLORS.spice;
      ctx.fillRect(u.x - r, u.y + r + 3, w * u.cargo / HARVESTER.capacity, 4);
    }
  }

  // src/sidebar.ts
  var HOTKEYS = ["R", "T", "Y", "U", "I", "O", "F", "G", "J", "K", "L", "N", "B", "V"];
  var ICON = {
    yard: "#a59d8d",
    power: "#6fb3d9",
    refinery: "#c4572a",
    barracks: "#7a8f5a",
    turret: "#9aa3ad",
    lightFactory: "#b59a5a",
    heavyFactory: "#8a6f9e",
    infantry: "#7a8f5a",
    quad: "#2f6fb0",
    tank: "#556070",
    harvester: "#e8c35a",
    rocketInfantry: "#8f6f4f",
    raider: "#4f8fc0",
    artillery: "#a08060",
    radar: "#5fb0a0",
    repairPad: "#7f8a90",
    rocketTurret: "#b07070",
    glasswalker: "#5fd8f0",
    skimmer: "#3fb8d8",
    prismTank: "#8fe8fa",
    resonator: "#6fc8e0",
    scrapper: "#b08050",
    junker: "#d07030",
    wrecker: "#8a7058",
    mortarCrawler: "#a07848",
    outpost: "#c08a4a",
    airfield: "#8a9aa8",
    uplink: "#4a7bc0",
    stormHeart: "#5fd8f0",
    scrapHive: "#e07a38",
    flakTurret: "#7a8a98",
    gunship: "#6a7a88",
    dropship: "#8a8f9a",
    bomber: "#5a6470",
    wall: "#8f887b",
    gate: "#a59d8d",
    outpostTruck: "#c08a4a",
    drillRig: "#8a8f9a",
    silo: "#b8b0a0",
    deepDrill: "#8a8f9a",
    seedSpire: "#5fd8f0",
    techCenter: "#9a8ac0",
    medic: "#e8e8e8",
    mender: "#a8f0f8",
    mechanic: "#d0a060",
    marksman: "#4f6040",
    lancer: "#4fa8c8",
    deadeye: "#7a5838",
    bastion: "#3f4a58",
    monolith: "#b0f0ff",
    titan: "#6a5040",
    vance: "#d8b040",
    seer: "#e0f8ff",
    rook: "#e07a30"
  };
  var TABS = [
    { id: "build", label: "Build", title: "Structures", needs: "yard" },
    { id: "barracks", label: "Troops", title: "Barracks \xB7 infantry", needs: "barracks" },
    { id: "lightFactory", label: "Light", title: "Light Factory \xB7 vehicles", needs: "lightFactory" },
    { id: "heavyFactory", label: "Heavy", title: "Heavy Factory \xB7 armour", needs: "heavyFactory" },
    { id: "airfield", label: "Air", title: "Airfield \xB7 aircraft", needs: "airfield" },
    { id: "research", label: "Tech", title: "Tech Center \xB7 research", needs: "techCenter" }
  ];
  var TAB_FOR = { yard: "build", barracks: "barracks", lightFactory: "lightFactory", heavyFactory: "heavyFactory", airfield: "airfield", techCenter: "research" };
  var Sidebar = class {
    buttons = [];
    structureKeys = /* @__PURE__ */ new Map();
    unitKeys = /* @__PURE__ */ new Map();
    /** The menu showing, the one last picked by hand, and the building selected last frame. */
    tab = "build";
    chosen = "build";
    lastSelected = null;
    panes = /* @__PURE__ */ new Map();
    tabButtons = /* @__PURE__ */ new Map();
    title = document.getElementById("side-title");
    game;
    constructor(structures, units, research, game, hooks) {
      const me = game.local;
      const issue = hooks.issue;
      this.game = game;
      this.panes.set("build", structures);
      this.panes.set("research", research);
      for (const p of ["barracks", "lightFactory", "heavyFactory", "airfield"]) {
        const pane = document.createElement("div");
        pane.className = "grid2";
        units.append(pane);
        this.panes.set(p, pane);
      }
      const tabRow = document.getElementById("side-tabs");
      for (const t of TABS) {
        const el2 = document.createElement("button");
        el2.type = "button";
        el2.className = "side-tab";
        el2.setAttribute("role", "tab");
        el2.textContent = t.label;
        el2.title = t.title;
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.hidden = true;
        el2.append(dot);
        el2.addEventListener("click", () => {
          this.chosen = this.tab = t.id;
          el2.blur();
        });
        tabRow?.append(el2);
        this.tabButtons.set(t.id, { el: el2, dot });
      }
      BUILDABLE.filter((k) => canBuild(game.factions[me], k)).forEach((kind, i) => {
        const art = BUILDING_STATS[kind].weapon ? portraitOf(kind, me) : `assets/buildings/${game.factions[me]}/${kind}_${me}.png`;
        const b = makeButton(BUILDING_STATS[kind].label, BUILDING_STATS[kind].cost, ICON[kind], HOTKEYS[i], art, BUILDING_STATS[kind].weapon ? "unit" : "building");
        b.press = () => {
          if (kind === "wall") return hooks.layWalls?.();
          const job = structureOf(game, me);
          if (job?.kind === kind && job.done) hooks.beginPlacing(kind);
          else if (!job) issue({ t: "build", kind });
        };
        if (HOTKEYS[i]) this.structureKeys.set(HOTKEYS[i], b);
        b.el.addEventListener("click", () => b.press());
        b.el.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          if (structureOf(game, me)?.kind === kind) {
            issue({ t: "cancelBuild" });
            hooks.cancelPlacing();
          }
        });
        b.update = () => {
          const job = structureOf(game, me);
          const missing = missingFor(game, kind, me);
          const mine = job?.kind === kind;
          setState(b, {
            locked: !!missing,
            busy: !!job && !mine,
            title: missing ? `Requires ${BUILDING_STATS[missing].label}` : "Left-click to build, right-click to cancel",
            progress: mine ? job.spent / BUILDING_STATS[kind].cost : 0,
            badge: mine && job.done ? "READY" : "",
            ready: mine && job.done
          });
        };
        structures.append(b.el);
        this.buttons.push(b);
      });
      const faction = game.factions[me];
      TRAINABLE.filter((k) => canTrain(faction, k)).forEach((kind, i) => {
        const cost = unitCost(faction, kind);
        const key = HOTKEYS[i];
        const b = makeButton(UNIT_STATS[kind].label, cost, ICON[kind], key && `\u21E7${key}`, portraitOf(kind, me), "unit", coreCost(kind));
        b.producer = UNIT_STATS[kind].producer;
        b.press = () => issue({ t: "train", kind, n: 1 });
        if (key) this.unitKeys.set(key, b);
        b.el.addEventListener("click", (e) => {
          if (e.ctrlKey) issue({ t: "repeat", kind });
          else issue({ t: "train", kind, n: e.shiftKey ? 5 : 1 });
        });
        b.el.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          if (linesOf(game, me)[UNIT_STATS[kind].producer].repeat === kind) issue({ t: "repeat", kind });
          issue({ t: "untrain", kind, n: e.shiftKey ? 5 : 1 });
        });
        const hero = HEROES[kind];
        b.update = () => {
          const missing = missingFor(game, kind, me);
          const line = linesOf(game, me)[UNIT_STATS[kind].producer];
          const n = queuedCount(game, kind, me);
          const cur = line.current?.kind === kind ? line.current : null;
          const heroTaken = !!hero && n === 0 && heroCount(game, me) > 0;
          const repeating = line.repeat === kind;
          setState(b, {
            locked: !!missing,
            busy: heroTaken,
            title: missing ? `Requires ${BUILDING_STATS[missing].label}` : (coreCost(kind) ? `Also costs ${coreCost(kind)} glass cores (paid when queued). ` : "") + (hero ? `Hero \u2014 one at a time. ${hero.ability} (Q): ${hero.blurb}` : "Click: queue one \xB7 Shift-click: five \xB7 Ctrl-click: keep building \xB7 Right-click: remove"),
            progress: cur ? cur.spent / cost : 0,
            badge: repeating ? `\u21BB${n > 1 ? n : ""}` : n > 0 ? String(n) : "",
            ready: false
          });
        };
        this.panes.get(UNIT_STATS[kind].producer).append(b.el);
        this.buttons.push(b);
      });
      window.addEventListener("keydown", (e) => {
        if (e.ctrlKey || e.altKey || e.metaKey || e.repeat || typingIn(e.target)) return;
        const m = /^Key([A-Z])$/.exec(e.code);
        if (!m) return;
        const b = (e.shiftKey ? this.unitKeys : this.structureKeys).get(m[1]);
        if (b?.press && !b.el.classList.contains("locked")) {
          b.press();
          this.tab = b.producer ?? "build";
        }
      });
      for (const id of researchFor(faction)) {
        const r = RESEARCH[id];
        const b = makeButton(r.label, r.cost, "#9a8ac0", void 0, void 0, void 0, coreCost(id));
        b.el.addEventListener("click", () => issue({ t: "research", id }));
        b.el.addEventListener("contextmenu", (e) => {
          e.preventDefault();
          if (game.research[me].current?.id === id) issue({ t: "cancelResearch" });
        });
        b.update = () => {
          const state = game.research[me];
          const done = state.done.includes(id);
          const mine = state.current?.id === id ? state.current : null;
          const blocked = researchBlocked(game, me, id);
          setState(b, {
            locked: blocked === "Requires Tech Center",
            busy: !done && !mine && !!state.current,
            title: `${r.blurb} (${Math.round(researchTime(id))}s)${done ? " \u2014 done" : blocked === "Requires Tech Center" ? " \u2014 requires Tech Center" : ""}`,
            progress: mine ? mine.spent / r.cost : 0,
            badge: done ? "\u2714" : "",
            ready: done
          });
        };
        research.append(b.el);
        this.buttons.push(b);
      }
    }
    update() {
      const g = this.game;
      const me = g.local;
      const sel = g.buildings.find((b) => b.id === g.selectedBuilding && b.owner === me);
      const selId = sel?.id ?? null;
      if (selId !== this.lastSelected) {
        this.lastSelected = selId;
        this.tab = (sel && TAB_FOR[sel.kind]) ?? this.chosen;
      }
      const lines2 = linesOf(g, me);
      for (const t of TABS) {
        const tb = this.tabButtons.get(t.id);
        const active = t.id === this.tab;
        if (tb.el.getAttribute("aria-selected") !== String(active)) tb.el.setAttribute("aria-selected", String(active));
        tb.el.classList.toggle("absent", !hasBuilding(g, t.needs, me));
        const busy = t.id === "build" ? !!structureOf(g, me) : t.id === "research" ? !!g.research[me].current : !!lines2[t.id].current;
        if (tb.dot.hidden === busy) tb.dot.hidden = !busy;
      }
      for (const [id, pane] of this.panes) if (pane.hidden !== (id !== this.tab)) pane.hidden = id !== this.tab;
      const title = TABS.find((t) => t.id === this.tab).title;
      if (this.title && this.title.textContent !== title) this.title.textContent = title;
      for (const b of this.buttons) b.update();
    }
  };
  function makeButton(label, cost, color, key, art, fit, cores = 0) {
    const el2 = document.createElement("button");
    el2.className = "build";
    if (art) {
      const img = document.createElement("img");
      img.className = `art ${fit ?? "unit"}`;
      img.alt = "";
      img.decoding = "async";
      img.draggable = false;
      img.src = art;
      img.onerror = () => {
        img.remove();
        el2.classList.remove("has-art");
      };
      el2.classList.add("has-art");
      el2.append(img);
    }
    const icon = document.createElement("span");
    icon.className = "icon";
    icon.style.background = color;
    const name = document.createElement("span");
    name.className = "name";
    name.textContent = label;
    const price = document.createElement("span");
    price.className = "cost";
    price.textContent = cost.toLocaleString();
    const bar2 = document.createElement("span");
    bar2.className = "bar";
    const badge = document.createElement("span");
    badge.className = "badge";
    el2.append(bar2, icon, name, price, badge);
    if (cores > 0) {
      const c = document.createElement("span");
      c.className = "cores";
      c.textContent = `\u25C6${cores}`;
      c.title = `${cores} glass cores`;
      el2.append(c);
    }
    if (key) {
      const k = document.createElement("span");
      k.className = "key";
      k.textContent = key;
      el2.append(k);
    }
    return { el: el2, bar: bar2, badge, update: () => {
    } };
  }
  function setState(b, s) {
    b.el.classList.toggle("locked", s.locked);
    b.el.classList.toggle("busy", s.busy);
    b.el.classList.toggle("ready", s.ready);
    if (b.el.title !== s.title) b.el.title = s.title;
    const width = `${Math.round(s.progress * 100)}%`;
    if (b.bar.style.width !== width) b.bar.style.width = width;
    if (b.badge.textContent !== s.badge) b.badge.textContent = s.badge;
  }

  // src/settings.ts
  var MODE_IDS = ["1v1", "2v2", "ffa3", "ffa4"];
  var SPEEDS = { slow: 0.6, normal: 1, fast: 1.5, fastest: 2.2 };
  var SPEED_ORDER = ["slow", "normal", "fast", "fastest"];
  var SPEED_LABELS = { slow: "Slow", normal: "Normal", fast: "Fast", fastest: "Fastest" };
  var DEFAULT_SETTINGS = {
    seed: 1,
    difficulty: "normal",
    hazards: true,
    fog: true,
    faction: "concord",
    enemyFaction: "random",
    speed: "normal",
    edgeScroll: true,
    mode: "1v1",
    weather: "clear",
    time: "day"
  };
  var CHOICES = [...FACTION_IDS, "random"];
  var isChoice = (v) => CHOICES.includes(v);
  var LEVELS = ["easy", "normal", "hard"];
  var MAX_SEED = 99999;
  function validSeed(n) {
    const v = Math.floor(Number(n));
    return Number.isFinite(v) && v >= 1 && v <= MAX_SEED ? v : null;
  }
  function flag(value) {
    if (value === "1" || value === "on" || value === "true") return true;
    if (value === "0" || value === "off" || value === "false") return false;
    return null;
  }
  function parseSettings(query, saved) {
    const base = { ...DEFAULT_SETTINGS };
    if (saved) {
      base.seed = validSeed(saved.seed) ?? base.seed;
      if (LEVELS.includes(saved.difficulty)) base.difficulty = saved.difficulty;
      if (typeof saved.hazards === "boolean") base.hazards = saved.hazards;
      if (typeof saved.fog === "boolean") base.fog = saved.fog;
      if (isChoice(saved.faction)) base.faction = saved.faction;
      if (isChoice(saved.enemyFaction)) base.enemyFaction = saved.enemyFaction;
      if (SPEED_ORDER.includes(saved.speed)) base.speed = saved.speed;
      if (typeof saved.edgeScroll === "boolean") base.edgeScroll = saved.edgeScroll;
      if (MODE_IDS.includes(saved.mode)) base.mode = saved.mode;
      if (WEATHER_MODES.includes(saved.weather)) base.weather = saved.weather;
      if (TIME_MODES.includes(saved.time)) base.time = saved.time;
    }
    const link = query.get("play") === "1";
    const speed = query.get("speed");
    const faction = query.get("faction");
    const enemy = query.get("enemy");
    return {
      seed: validSeed(query.get("seed")) ?? base.seed,
      difficulty: LEVELS.find((l) => l === query.get("ai")) ?? base.difficulty,
      hazards: flag(query.get("storms")) ?? base.hazards,
      fog: flag(query.get("fog")) ?? base.fog,
      faction: isChoice(faction) ? faction : base.faction,
      enemyFaction: isChoice(enemy) ? enemy : base.enemyFaction,
      speed: SPEED_ORDER.includes(speed) ? speed : base.speed,
      edgeScroll: flag(query.get("edge")) ?? base.edgeScroll,
      // A game link says everything it means: no mode, weather or time there means the defaults,
      // not whatever was last picked on the menu.
      mode: MODE_IDS.find((m) => m === query.get("mode")) ?? (link ? DEFAULT_SETTINGS.mode : base.mode),
      weather: WEATHER_MODES.find((m) => m === query.get("weather")) ?? (link ? DEFAULT_SETTINGS.weather : base.weather),
      time: TIME_MODES.find((m) => m === query.get("time")) ?? (link ? DEFAULT_SETTINGS.time : base.time)
    };
  }
  function resolveFactions(s, rand3) {
    const player = s.faction === "random" ? FACTION_IDS[Math.floor(rand3() * FACTION_IDS.length)] : s.faction;
    const others = FACTION_IDS.filter((f) => f !== player);
    const enemy = s.enemyFaction === "random" ? others[Math.floor(rand3() * others.length)] : s.enemyFaction;
    return { player, enemy };
  }
  function sideFactions(mode, player, enemy, enemyChoice, rand3) {
    const pick2 = () => FACTION_IDS[Math.floor(rand3() * FACTION_IDS.length)];
    if (mode === "1v1") return [player, enemy];
    const extra = (enemySide) => enemySide && enemyChoice !== "random" ? enemyChoice : pick2();
    if (mode === "2v2") return [player, enemy, extra(false), extra(true)];
    if (mode === "ffa3") return [player, enemy, extra(true)];
    return [player, enemy, extra(true), extra(true)];
  }
  function settingsToQuery(s, play) {
    const q = new URLSearchParams({
      seed: String(s.seed),
      ai: s.difficulty,
      storms: s.hazards ? "1" : "0",
      fog: s.fog ? "1" : "0",
      faction: s.faction,
      enemy: s.enemyFaction,
      speed: s.speed
    });
    if (!s.edgeScroll) q.set("edge", "0");
    if (s.mode !== "1v1") q.set("mode", s.mode);
    if (s.weather !== "clear") q.set("weather", s.weather);
    if (s.time !== "day") q.set("time", s.time);
    if (play) q.set("play", "1");
    return q;
  }
  function randomSeed(rand3 = Math.random) {
    return 1 + Math.floor(rand3() * MAX_SEED);
  }
  var STORAGE_KEY = "vitrea.settings";
  function loadSaved() {
    try {
      const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  function save(s) {
    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(s));
    } catch {
    }
  }

  // src/samples.ts
  var WEAPON_FAMILY = {
    rifle: "rifle",
    shardRifle: "laser",
    scattergun: "shotgun",
    mg: "mg",
    raiderGun: "mg",
    gunRockets: "rocket",
    bombs: "artillery",
    flak: "cannon",
    shardRepeater: "laser",
    cannon: "cannon",
    turretGun: "cannon",
    twinCannon: "cannon",
    autocannon: "cannon",
    scrapCannon: "cannon",
    rocket: "rocket",
    turretRocket: "rocket",
    artilleryShell: "artillery",
    mortar: "artillery",
    resonance: "artillery",
    prismBeam: "beam",
    lancerBeam: "beam",
    monolithBeam: "beam",
    seerBeam: "laser",
    flamer: "flame",
    marksmanRifle: "sniper",
    deadeyeRifle: "sniper",
    vancePistols: "pistol",
    rookCannon: "shotgun"
  };
  function weaponSampleKeys(weapon2) {
    return [`shot_${weapon2}`, `shot_${WEAPON_FAMILY[weapon2]}`];
  }
  var AUDIO_FILE = /\.(ogg|mp3|wav|m4a)$/i;
  function sampleKey(file) {
    if (!AUDIO_FILE.test(file)) return null;
    const base = file.replace(/^.*[\\/]/, "").replace(AUDIO_FILE, "");
    return base.replace(/_\d+$/, "").toLowerCase() || null;
  }
  function groupSamples(files) {
    const out = {};
    for (const f of [...files].sort()) {
      const key = sampleKey(f);
      if (key) (out[key] ??= []).push(f);
    }
    return out;
  }
  var SampleBank = class {
    buffers = /* @__PURE__ */ new Map();
    /** True once loading has finished (or found nothing to load). */
    loaded = false;
    async load(ctx, base = "assets/sounds/") {
      try {
        await this.loadAll(ctx, base);
      } finally {
        this.loaded = true;
      }
    }
    async loadAll(ctx, base) {
      let files;
      try {
        const res = await fetch(`${base}manifest.json`);
        if (!res.ok) return;
        files = await res.json();
      } catch {
        return;
      }
      for (const [key, list] of Object.entries(groupSamples(files))) {
        for (const f of list) {
          try {
            const data = await (await fetch(base + f)).arrayBuffer();
            const buf = await ctx.decodeAudioData(data);
            const takes = this.buffers.get(key) ?? [];
            takes.push(buf);
            this.buffers.set(key, takes);
          } catch {
          }
        }
      }
    }
    /** A random take of the first key that has any, or null. */
    pick(keys) {
      for (const k of keys) {
        const takes = this.buffers.get(k);
        if (takes?.length) return takes[Math.floor(Math.random() * takes.length)];
      }
      return null;
    }
  };

  // src/audio.ts
  var THROTTLE = {
    rifle: 0.05,
    mg: 0.06,
    raiderGun: 0.06,
    cannon: 0.08,
    turretGun: 0.08,
    rocket: 0.1,
    turretRocket: 0.1,
    artilleryShell: 0.15,
    shardRifle: 0.06,
    shardRepeater: 0.06,
    prismBeam: 0.1,
    resonance: 0.15,
    marksmanRifle: 0.1,
    lancerBeam: 0.1,
    deadeyeRifle: 0.1,
    twinCannon: 0.1,
    monolithBeam: 0.15,
    scrapCannon: 0.1,
    heal: 0.25,
    vancePistols: 0.06,
    seerBeam: 0.08,
    rookCannon: 0.08,
    scattergun: 0.06,
    flamer: 0.12,
    autocannon: 0.08,
    mortar: 0.12,
    impact: 0.06,
    explodeSmall: 0.06,
    explodeBig: 0.1,
    unload: 0.4,
    select: 0.05,
    command: 0.08
  };
  var MUTE_KEY = "vitrea.muted";
  var Sound = class {
    ctx = null;
    master = null;
    /** Sub-mixes under the master volume: effects, voices and music, each with its own slider. */
    sfx = null;
    voiceBus = null;
    musicBus = null;
    noise = null;
    muted = false;
    last = /* @__PURE__ */ new Map();
    wind = null;
    engines = null;
    samples = new SampleBank();
    /** One line at a time per channel: unit replies and the announcer don't talk over themselves. */
    voices = {
      unit: { until: 0, src: null },
      announcer: { until: 0, src: null },
      briefing: { until: 0, src: null }
    };
    constructor() {
      try {
        this.muted = globalThis.localStorage?.getItem(MUTE_KEY) === "1";
      } catch {
      }
      onPrefs((p) => this.applyPrefs(p));
      const wake = () => this.ensure();
      window.addEventListener("pointerdown", wake);
      window.addEventListener("keydown", wake);
    }
    /** Create or resume the audio context. Safe to call repeatedly. */
    ensure() {
      if (!this.ctx) {
        const Ctor = window.AudioContext ?? window.webkitAudioContext;
        if (!Ctor) return;
        this.ctx = new Ctor();
        this.master = this.ctx.createGain();
        const comp = this.ctx.createDynamicsCompressor();
        comp.threshold.value = -12;
        comp.ratio.value = 6;
        this.master.connect(comp).connect(this.ctx.destination);
        this.sfx = this.ctx.createGain();
        this.voiceBus = this.ctx.createGain();
        this.musicBus = this.ctx.createGain();
        for (const bus of [this.sfx, this.voiceBus, this.musicBus]) bus.connect(this.master);
        this.applyPrefs(prefs(), true);
        const len = this.ctx.sampleRate * 1.5;
        this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const data = this.noise.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        void this.samples.load(this.ctx);
      }
      if (this.ctx.state === "suspended") void this.ctx.resume();
    }
    /** Set the volumes from the player's preferences (master 0.8 = the old fixed level). */
    applyPrefs(p, now = false) {
      if (!this.ctx || !this.master || !this.sfx || !this.voiceBus || !this.musicBus) return;
      const set = (node, v) => now ? node.gain.value = v : node.gain.setTargetAtTime(v, this.ctx.currentTime, 0.03);
      set(this.master, this.muted ? 0 : p.master * 0.625);
      set(this.sfx, p.effects * 1.25);
      set(this.voiceBus, p.voices * 1.1);
      set(this.musicBus, p.music);
    }
    toggleMute() {
      this.muted = !this.muted;
      this.applyPrefs(prefs());
      try {
        globalThis.localStorage?.setItem(MUTE_KEY, this.muted ? "1" : "0");
      } catch {
      }
      return this.muted;
    }
    ready() {
      return !!this.ctx && this.ctx.state === "running" && !!this.master && !this.muted;
    }
    throttled(key) {
      const gap = THROTTLE[key];
      if (!gap || !this.ctx) return false;
      const now = this.ctx.currentTime;
      const prev = this.last.get(key) ?? -1;
      if (now - prev < gap) return true;
      this.last.set(key, now);
      return false;
    }
    // ------------------------------------------------------------ building blocks
    /**
     * Speak a voice line on a channel (a random take of the first key with a
     * recording). Skipped if that channel is still talking, unless `interrupt`.
     */
    voice(channel, keys, interrupt = false) {
      if (!this.ready()) return false;
      const buf = this.samples.pick(keys);
      if (!buf) return false;
      const ctx = this.ctx;
      const ch = this.voices[channel];
      if (ctx.currentTime < ch.until && !interrupt) return false;
      try {
        ch.src?.stop();
      } catch {
      }
      const src = ctx.createBufferSource();
      src.buffer = buf;
      const g = ctx.createGain();
      g.gain.value = channel === "briefing" ? 1 : 0.9;
      src.connect(g).connect(this.voiceBus);
      src.start();
      ch.src = src;
      ch.until = ctx.currentTime + buf.duration;
      return true;
    }
    stopVoice(channel) {
      const ch = this.voices[channel];
      try {
        ch.src?.stop();
      } catch {
      }
      ch.src = null;
      ch.until = 0;
    }
    /** Who answers for the current selection: the hero if one is selected, else the faction. */
    speaker(g) {
      const units = [...g.selection].map((id) => g.units.find((u) => u.id === id)).filter((u) => u && u.owner === g.local && u.kind !== "harvester");
      if (units.length === 0) return null;
      const hero = units.find((u) => isHero(u.kind));
      return hero ? hero.kind : g.factions[g.local];
    }
    /** Play a recording for the first of `keys` that has one, slightly re-pitched each time. False if none. */
    sample(keys, vol, pan) {
      const buf = this.samples.pick(keys);
      if (!buf) return false;
      const ctx = this.ctx;
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = 0.94 + Math.random() * 0.12;
      const g = ctx.createGain();
      g.gain.value = vol;
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      src.connect(g).connect(p).connect(this.sfx);
      src.start();
      return true;
    }
    /** A burst of filtered noise with a fast attack and exponential decay. */
    burst(o) {
      const ctx = this.ctx;
      const t = ctx.currentTime + (o.delay ?? 0);
      const src = ctx.createBufferSource();
      src.buffer = this.noise;
      src.playbackRate.value = 0.8 + Math.random() * 0.4;
      const f = ctx.createBiquadFilter();
      f.type = o.type;
      f.frequency.setValueAtTime(o.freq, t);
      if (o.freqEnd) f.frequency.exponentialRampToValueAtTime(o.freqEnd, t + o.dur);
      f.Q.value = o.q ?? 0.8;
      const g = ctx.createGain();
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(o.vol, t + 5e-3);
      g.gain.exponentialRampToValueAtTime(1e-4, t + o.dur);
      const p = ctx.createStereoPanner();
      p.pan.value = o.pan;
      src.connect(f).connect(g).connect(p).connect(this.sfx);
      src.start(t, Math.random() * 1);
      src.stop(t + o.dur + 0.05);
    }
    /** An oscillator note, optionally sliding in pitch. */
    tone(o) {
      const ctx = this.ctx;
      const t = ctx.currentTime + (o.delay ?? 0);
      const osc = ctx.createOscillator();
      osc.type = o.type;
      osc.frequency.setValueAtTime(o.freq, t);
      if (o.freqEnd) osc.frequency.exponentialRampToValueAtTime(o.freqEnd, t + o.dur);
      const g = ctx.createGain();
      g.gain.setValueAtTime(1e-4, t);
      g.gain.exponentialRampToValueAtTime(o.vol, t + (o.attack ?? 8e-3));
      g.gain.exponentialRampToValueAtTime(1e-4, t + o.dur);
      const p = ctx.createStereoPanner();
      p.pan.value = o.pan ?? 0;
      osc.connect(g).connect(p).connect(this.sfx);
      osc.start(t);
      osc.stop(t + o.dur + 0.05);
    }
    // ------------------------------------------------------------ the sounds
    shot(weapon2, vol, pan) {
      if (this.sample(weaponSampleKeys(weapon2), 0.7 * vol, pan)) return;
      switch (weapon2) {
        case "rifle":
          this.burst({ dur: 0.07, type: "highpass", freq: 1800, vol: 0.35 * vol, pan });
          break;
        case "mg":
        case "raiderGun":
          this.burst({ dur: 0.04, type: "bandpass", freq: 2600, q: 1.2, vol: 0.3 * vol, pan });
          break;
        case "cannon":
        case "turretGun":
          this.burst({ dur: 0.28, type: "lowpass", freq: 900, freqEnd: 150, vol: 0.6 * vol, pan });
          this.tone({ freq: 130, freqEnd: 45, type: "sine", dur: 0.25, vol: 0.5 * vol, pan });
          break;
        case "rocket":
        case "turretRocket":
          this.burst({ dur: 0.45, type: "bandpass", freq: 500, freqEnd: 2400, q: 2, vol: 0.35 * vol, pan });
          break;
        case "artilleryShell":
          this.burst({ dur: 0.6, type: "lowpass", freq: 600, freqEnd: 90, vol: 0.75 * vol, pan });
          this.tone({ freq: 90, freqEnd: 32, type: "sine", dur: 0.55, vol: 0.6 * vol, pan });
          break;
        // Shardbound: crystalline zaps and a sonic thrum.
        case "shardRifle":
        case "shardRepeater":
          this.tone({ freq: 2400, freqEnd: 900, type: "triangle", dur: 0.07, vol: 0.18 * vol, pan });
          break;
        case "prismBeam":
          this.tone({ freq: 1800, freqEnd: 420, type: "sawtooth", dur: 0.22, vol: 0.18 * vol, pan });
          this.tone({ freq: 3600, freqEnd: 1200, type: "sine", dur: 0.18, vol: 0.12 * vol, pan });
          break;
        case "resonance":
          this.tone({ freq: 70, freqEnd: 140, type: "sine", dur: 0.5, vol: 0.5 * vol, pan });
          this.tone({ freq: 1320, type: "sine", dur: 0.4, vol: 0.08 * vol, pan, delay: 0.05 });
          break;
        // Reclaimers: scrap weapons.
        case "scattergun":
          this.burst({ dur: 0.14, type: "lowpass", freq: 2400, freqEnd: 600, vol: 0.45 * vol, pan });
          break;
        case "flamer":
          this.burst({ dur: 0.3, type: "bandpass", freq: 700, q: 0.5, vol: 0.3 * vol, pan });
          break;
        case "autocannon":
          this.burst({ dur: 0.16, type: "lowpass", freq: 1200, freqEnd: 300, vol: 0.45 * vol, pan });
          this.tone({ freq: 160, freqEnd: 80, type: "sine", dur: 0.12, vol: 0.3 * vol, pan });
          break;
        case "mortar":
          this.burst({ dur: 0.35, type: "lowpass", freq: 700, freqEnd: 150, vol: 0.5 * vol, pan });
          this.tone({ freq: 220, freqEnd: 90, type: "sine", dur: 0.2, vol: 0.3 * vol, pan });
          break;
        // Snipers: a sharp crack that rings out.
        case "marksmanRifle":
        case "deadeyeRifle":
          this.burst({ dur: 0.12, type: "highpass", freq: 2200, vol: 0.5 * vol, pan });
          this.burst({ dur: 0.5, type: "bandpass", freq: 900, freqEnd: 400, q: 1, vol: 0.12 * vol, pan, delay: 0.04 });
          break;
        case "vancePistols":
          this.burst({ dur: 0.06, type: "highpass", freq: 2e3, vol: 0.35 * vol, pan });
          this.burst({ dur: 0.06, type: "highpass", freq: 2300, vol: 0.3 * vol, pan, delay: 0.09 });
          break;
        case "seerBeam":
          this.tone({ freq: 2600, freqEnd: 1300, type: "triangle", dur: 0.12, vol: 0.2 * vol, pan });
          this.tone({ freq: 3900, freqEnd: 1950, type: "sine", dur: 0.1, vol: 0.08 * vol, pan });
          break;
        case "rookCannon":
          this.burst({ dur: 0.18, type: "lowpass", freq: 2e3, freqEnd: 500, vol: 0.5 * vol, pan });
          break;
        case "lancerBeam":
          this.tone({ freq: 3200, freqEnd: 600, type: "sine", dur: 0.28, vol: 0.2 * vol, pan });
          break;
        case "twinCannon":
          this.burst({ dur: 0.3, type: "lowpass", freq: 900, freqEnd: 140, vol: 0.65 * vol, pan });
          this.tone({ freq: 120, freqEnd: 40, type: "sine", dur: 0.28, vol: 0.55 * vol, pan });
          this.burst({ dur: 0.25, type: "lowpass", freq: 800, freqEnd: 140, vol: 0.45 * vol, pan, delay: 0.12 });
          break;
        case "monolithBeam":
          this.tone({ freq: 900, freqEnd: 160, type: "sawtooth", dur: 0.45, vol: 0.2 * vol, pan });
          this.tone({ freq: 2700, freqEnd: 700, type: "sine", dur: 0.35, vol: 0.12 * vol, pan });
          break;
        case "gunRockets":
          this.burst({ dur: 0.3, type: "bandpass", freq: 700, freqEnd: 2600, q: 2, vol: 0.3 * vol, pan });
          break;
        case "bombs":
          this.burst({ dur: 0.7, type: "lowpass", freq: 500, freqEnd: 70, vol: 0.8 * vol, pan });
          this.tone({ freq: 70, freqEnd: 28, type: "sine", dur: 0.6, vol: 0.7 * vol, pan });
          break;
        case "flak":
          this.burst({ dur: 0.1, type: "lowpass", freq: 1600, freqEnd: 500, vol: 0.4 * vol, pan });
          this.tone({ freq: 220, freqEnd: 110, type: "square", dur: 0.06, vol: 0.12 * vol, pan });
          break;
        case "scrapCannon":
          this.burst({ dur: 0.3, type: "lowpass", freq: 1e3, freqEnd: 200, vol: 0.6 * vol, pan });
          this.tone({ freq: 140, freqEnd: 55, type: "sine", dur: 0.22, vol: 0.45 * vol, pan });
          break;
        default: {
          const missing = weapon2;
          void missing;
        }
      }
    }
    explosion(big, vol, pan) {
      const dur = big ? 1.3 : 0.55;
      this.burst({ dur, type: "lowpass", freq: big ? 1400 : 2200, freqEnd: 120, vol: (big ? 0.9 : 0.5) * vol, pan });
      this.tone({ freq: big ? 70 : 110, freqEnd: 28, type: "sine", dur: dur * 0.8, vol: (big ? 0.7 : 0.35) * vol, pan });
      if (big) this.burst({ dur: 0.9, type: "bandpass", freq: 300, q: 0.6, vol: 0.3 * vol, pan, delay: 0.08 });
    }
    /** A short rising arpeggio, used for "ready" chimes and jingles. */
    arpeggio(notes, type, step, vol, dur = 0.35) {
      notes.forEach((f, i) => this.tone({ freq: f, type, dur, vol, delay: i * step }));
    }
    /** Crystal shimmer: a few high, slightly detuned bell tones. */
    shimmer(vol, pan) {
      for (const [f, d] of [[1760, 0], [2217, 0.04], [2637, 0.09], [3520, 0.14]]) {
        this.tone({ freq: f, type: "sine", dur: 0.6, vol: 0.12 * vol, pan, delay: d });
      }
    }
    // ------------------------------------------------------------ public
    /** Play everything the game emitted this frame, positioned relative to the camera, then clear. */
    playEvents(g, cam) {
      if (!this.ready()) {
        g.events.length = 0;
        return;
      }
      const cx = cam.x + cam.w / 2;
      const cy = cam.y + cam.h / 2;
      const reach = Math.max(cam.w, cam.h) * 0.9;
      const place = (x, y) => {
        const d = Math.hypot(x - cx, y - cy);
        const vol = Math.max(0, 1 - d / reach) ** 1.5;
        const pan = Math.max(-0.8, Math.min(0.8, (x - cx) / (cam.w / 2)));
        return { vol, pan };
      };
      for (const e of g.events) {
        switch (e.kind) {
          case "shot": {
            if (!visibleAt(g, e.x, e.y)) break;
            const { vol, pan } = place(e.x, e.y);
            if (vol > 0.02 && !this.throttled(e.weapon)) this.shot(e.weapon, vol, pan);
            break;
          }
          case "impact": {
            if (!visibleAt(g, e.x, e.y)) break;
            const { vol, pan } = place(e.x, e.y);
            if (vol > 0.02 && !this.throttled("impact") && !this.sample([e.big ? "impact_big" : "impact_small"], vol * (e.big ? 0.8 : 0.5), pan)) {
              this.explosion(e.big, vol * (e.big ? 0.8 : 0.4), pan);
            }
            break;
          }
          case "explode": {
            const { vol, pan } = place(e.x, e.y);
            const heard = visibleAt(g, e.x, e.y) ? vol : e.big ? vol * 0.4 : 0;
            if (heard > 0.02 && !this.throttled(e.big ? "explodeBig" : "explodeSmall") && !this.sample([e.big ? "explode_big" : "explode_small"], heard, pan)) {
              this.explosion(e.big, heard, pan);
            }
            break;
          }
          case "ability": {
            if (e.owner === g.local) this.voice("unit", [{ charge: "vance_ability", ward: "seer_ability", crew: "rook_ability" }[e.ability]], true);
            const { vol, pan } = place(e.x, e.y);
            if (!visibleAt(g, e.x, e.y) || vol < 0.02) break;
            if (e.ability === "charge") {
              for (let k = 0; k < 3; k++) this.tone({ freq: 1760, type: "square", dur: 0.05, vol: 0.08 * vol, pan, delay: k * 0.25 });
            } else if (e.ability === "ward") {
              this.tone({ freq: 520, freqEnd: 1560, type: "sine", dur: 0.6, vol: 0.18 * vol, pan });
              this.tone({ freq: 2080, type: "triangle", dur: 0.5, vol: 0.06 * vol, pan, delay: 0.1 });
            } else {
              this.tone({ freq: 220, type: "sawtooth", dur: 0.18, vol: 0.12 * vol, pan });
              this.tone({ freq: 330, type: "sawtooth", dur: 0.25, vol: 0.12 * vol, pan, delay: 0.18 });
            }
            break;
          }
          case "chat":
            this.tone({ freq: 988, type: "sine", dur: 0.07, vol: 0.1 });
            this.tone({ freq: 1319, type: "sine", dur: 0.09, vol: 0.1, delay: 0.08 });
            break;
          case "promote":
            this.arpeggio([659, 784, 988, 1319], "triangle", 0.06, 0.14);
            break;
          case "heal": {
            if (!visibleAt(g, e.x, e.y)) break;
            const { vol, pan } = place(e.x, e.y);
            if (vol > 0.02 && !this.throttled("heal")) this.tone({ freq: 880, freqEnd: 1320, type: "sine", dur: 0.14, vol: 0.05 * vol, pan });
            break;
          }
          case "unload": {
            const { vol, pan } = place(e.x, e.y);
            if (!this.throttled("unload")) this.shimmer(Math.max(0.35, vol), pan);
            break;
          }
          case "unitReady":
            this.arpeggio([523, 659, 784], "triangle", 0.07, 0.18);
            break;
          case "structureReady":
            this.arpeggio([392, 523, 659, 784], "triangle", 0.08, 0.18, 0.45);
            break;
          case "place":
            this.burst({ dur: 0.35, type: "lowpass", freq: 500, freqEnd: 100, vol: 0.5, pan: 0 });
            this.tone({ freq: 160, freqEnd: 60, type: "sine", dur: 0.3, vol: 0.4 });
            break;
          case "buildStart":
            this.tone({ freq: 660, type: "square", dur: 0.06, vol: 0.06 });
            this.tone({ freq: 990, type: "square", dur: 0.06, vol: 0.06, delay: 0.06 });
            break;
          case "cancel":
            this.tone({ freq: 660, freqEnd: 330, type: "square", dur: 0.15, vol: 0.06 });
            break;
          case "error":
            this.tone({ freq: 140, type: "sawtooth", dur: 0.22, vol: 0.12 });
            break;
          case "announce":
            this.voice("announcer", [`announcer_${e.line}`], e.line === "victory" || e.line === "defeat");
            break;
          case "heroVoice":
            this.voice("unit", [`${e.unit}_${e.line}`], e.line === "fallen");
            break;
          case "select": {
            const who = this.speaker(g);
            if (who) this.voice("unit", [`${who}_select`]);
            if (!this.throttled("select")) this.tone({ freq: 1320, type: "sine", dur: 0.05, vol: 0.12 });
            break;
          }
          case "command": {
            const who = this.speaker(g);
            if (who) this.voice("unit", [`${who}_${e.attack ? "attack" : "move"}`]);
            if (!this.throttled("command")) {
              this.tone({ freq: 880, type: "sine", dur: 0.05, vol: 0.12 });
              this.tone({ freq: 1175, type: "sine", dur: 0.06, vol: 0.12, delay: 0.05 });
            }
            break;
          }
          case "stormWarning":
            this.voice("announcer", ["announcer_storm_warning"]);
            this.burst({ dur: 2.2, type: "bandpass", freq: 300, freqEnd: 900, q: 0.7, vol: 0.35, pan: 0 });
            this.tone({ freq: 220, freqEnd: 110, type: "triangle", dur: 1.6, vol: 0.15, attack: 0.4 });
            break;
          case "alarm":
            for (let i = 0; i < 3; i++) {
              this.tone({ freq: 740, type: "square", dur: 0.16, vol: 0.08, delay: i * 0.36 });
              this.tone({ freq: 554, type: "square", dur: 0.16, vol: 0.08, delay: i * 0.36 + 0.18 });
            }
            break;
          case "victory":
            if (g.local !== 0) {
              this.voice("announcer", ["announcer_defeat"], true);
              this.arpeggio([392, 330, 262, 196], "triangle", 0.22, 0.2, 0.9);
              break;
            }
            this.voice("announcer", ["announcer_victory"], true);
            this.arpeggio([523, 659, 784, 1047, 1319], "triangle", 0.12, 0.2, 0.7);
            break;
          case "defeat":
            if (g.local !== 0) {
              this.voice("announcer", ["announcer_victory"], true);
              this.arpeggio([523, 659, 784, 1047, 1319], "triangle", 0.12, 0.2, 0.7);
              break;
            }
            this.voice("announcer", ["announcer_defeat"], true);
            this.arpeggio([392, 330, 262, 196], "triangle", 0.22, 0.2, 0.9);
            break;
        }
      }
      g.events.length = 0;
    }
    /**
     * Engines: a low rumble that grows with the number of vehicles moving on
     * screen (yours or visible enemies). Uses the `engine_loop` recording if
     * there is one, otherwise filtered noise over a low saw.
     */
    updateEngines(g, cam) {
      if (!this.ctx || !this.master || this.ctx.state !== "running") return;
      if (!this.engines) {
        if (!this.samples.loaded) return;
        const ctx = this.ctx;
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = 160;
        const gain = ctx.createGain();
        gain.gain.value = 0;
        filter.connect(gain).connect(this.sfx);
        const loop = this.samples.pick(["engine_loop"]);
        if (loop) {
          const src = ctx.createBufferSource();
          src.buffer = loop;
          src.loop = true;
          src.connect(gain);
          src.start();
        } else {
          const rumble = ctx.createBufferSource();
          rumble.buffer = this.noise;
          rumble.loop = true;
          rumble.playbackRate.value = 0.5;
          rumble.connect(filter);
          rumble.start();
          const growl = ctx.createOscillator();
          growl.type = "sawtooth";
          growl.frequency.value = 42;
          const growlGain = ctx.createGain();
          growlGain.gain.value = 0.35;
          growl.connect(growlGain).connect(filter);
          growl.start();
        }
        this.engines = { gain, filter };
      }
      let moving = 0;
      for (const u of g.units) {
        if (UNIT_STATS[u.kind].armor === "infantry" || u.path.length === 0) continue;
        if (u.x < cam.x || u.x > cam.x + cam.w || u.y < cam.y || u.y > cam.y + cam.h) continue;
        if (u.owner !== 0 && !visibleAt(g, u.x, u.y)) continue;
        moving++;
      }
      const level = Math.min(1, moving / 5);
      const t = this.ctx.currentTime;
      this.engines.gain.gain.setTargetAtTime(level * 0.22, t, 0.25);
      this.engines.filter.frequency.setTargetAtTime(120 + 90 * level, t, 0.3);
    }
    /** Storm wind that rises and falls with how close the nearest storm is to the camera. */
    updateWind(g, cam) {
      if (!this.ctx || !this.master || this.ctx.state !== "running") return;
      if (!this.wind) {
        const src = this.ctx.createBufferSource();
        src.buffer = this.noise;
        src.loop = true;
        const filter = this.ctx.createBiquadFilter();
        filter.type = "bandpass";
        filter.Q.value = 0.9;
        const gain = this.ctx.createGain();
        gain.gain.value = 0;
        src.connect(filter).connect(gain).connect(this.sfx);
        src.start();
        this.wind = { gain, filter };
      }
      const cx = cam.x + cam.w / 2;
      const cy = cam.y + cam.h / 2;
      let level = 0;
      for (const s of g.storms) {
        const d = Math.hypot(s.x - cx, s.y - cy) / TILE;
        level = Math.max(level, Math.max(0, 1 - d / 28));
      }
      level = Math.max(level, g.weather.dust * 0.75);
      const t = this.ctx.currentTime;
      this.wind.gain.gain.setTargetAtTime(level * 0.35, t, 0.4);
      this.wind.filter.frequency.setTargetAtTime(350 + 500 * level + 120 * Math.sin(t * 0.7), t, 0.3);
    }
  };

  // src/voicelines.ts
  var lines = (role, entries) => entries.map(([file, text]) => ({ role, file, text }));
  var VOICE_LINES = [
    ...lines("announcer", [
      ["announcer_building", "Building."],
      ["announcer_construction_complete", "Construction complete."],
      ["announcer_training", "Training."],
      ["announcer_unit_ready", "Unit ready."],
      ["announcer_cancelled", "Cancelled."],
      ["announcer_insufficient_funds", "Insufficient funds."],
      ["announcer_low_power", "Low power."],
      ["announcer_silos_needed", "Silos needed."],
      ["announcer_superweapon_detected", "Warning: enemy superweapon detected."],
      ["announcer_superweapon_ready", "Superweapon ready."],
      ["announcer_cannot_deploy", "Cannot deploy here."],
      ["announcer_base_under_attack", "Our base is under attack."],
      ["announcer_units_under_attack", "Our units are under attack."],
      ["announcer_unit_lost", "Unit lost."],
      ["announcer_harvester_lost", "Harvester lost."],
      ["announcer_structure_lost", "Structure lost."],
      ["announcer_storm_warning", "Crystal storm approaching."],
      ["announcer_enemy_approaching", "Enemy forces approaching."],
      ["announcer_research_complete", "Research complete."],
      ["announcer_unit_promoted", "Unit promoted."],
      ["announcer_radar_online", "Radar online."],
      ["announcer_victory", "Mission accomplished."],
      ["announcer_defeat", "Mission failed."]
    ]),
    ...lines("concord", [
      ["concord_select_1", "Concord, standing by."],
      ["concord_select_2", "Go ahead, Commander."],
      ["concord_select_3", "Ready for orders."],
      ["concord_select_4", "Sir?"],
      ["concord_move_1", "Moving out."],
      ["concord_move_2", "Copy that."],
      ["concord_move_3", "On our way."],
      ["concord_move_4", "Relocating."],
      ["concord_attack_1", "Engaging!"],
      ["concord_attack_2", "Target acquired."],
      ["concord_attack_3", "Weapons free!"],
      ["concord_attack_4", "Lighting them up."]
    ]),
    ...lines("shardbound", [
      ["shardbound_select_1", "The glass hears you."],
      ["shardbound_select_2", "We are here."],
      ["shardbound_select_3", "Speak."],
      ["shardbound_select_4", "The crystal is listening."],
      ["shardbound_move_1", "We go."],
      ["shardbound_move_2", "Like light through glass."],
      ["shardbound_move_3", "Following the hum."],
      ["shardbound_move_4", "As the storm moves."],
      ["shardbound_attack_1", "Shatter them."],
      ["shardbound_attack_2", "They will break."],
      ["shardbound_attack_3", "Let the glass sing."],
      ["shardbound_attack_4", "Into the shards."]
    ]),
    ...lines("reclaimers", [
      ["reclaimers_select_1", "Yeah, what?"],
      ["reclaimers_select_2", "Got a job for us?"],
      ["reclaimers_select_3", "Talk to me."],
      ["reclaimers_select_4", "Engine's warm, boss."],
      ["reclaimers_move_1", "Rollin'!"],
      ["reclaimers_move_2", "Yeah, yeah, going."],
      ["reclaimers_move_3", "Hope there's loot."],
      ["reclaimers_move_4", "Clear the road!"],
      ["reclaimers_attack_1", "Strip 'em for parts!"],
      ["reclaimers_attack_2", "Scrap 'em!"],
      ["reclaimers_attack_3", "That one's mine!"],
      ["reclaimers_attack_4", "Break it, take it!"]
    ]),
    ...lines("vance", [
      ["vance_ready", "Captain Vance, reporting for duty."],
      ["vance_select_1", "Vance here."],
      ["vance_select_2", "What's the plan, Commander?"],
      ["vance_move_1", "On it."],
      ["vance_move_2", "Keep up, people."],
      ["vance_attack", "Let's make this quick."],
      ["vance_ability", "Charge set. Clear out!"],
      ["vance_fallen", "Tell them we held."]
    ]),
    ...lines("seer", [
      ["seer_ready", "The storm sent me."],
      ["seer_select_1", "I have seen this."],
      ["seer_select_2", "Ask, and the glass will answer."],
      ["seer_move_1", "The path is clear to me."],
      ["seer_move_2", "I walk where the light bends."],
      ["seer_attack", "Their ending is already written."],
      ["seer_ability", "Stand within the glass. It will hold."],
      ["seer_fallen", "The light fades."]
    ]),
    ...lines("rook", [
      ["rook_ready", "Rook's here. Who's paying?"],
      ["rook_select_1", "Whaddaya want?"],
      ["rook_select_2", "Make it worth my while."],
      ["rook_move_1", "Outta my way!"],
      ["rook_move_2", "Fine. Walking."],
      ["rook_attack", "Mine now!"],
      ["rook_ability", "Oi! Crew! Get over here!"],
      ["rook_fallen", "Ain't done yet."]
    ]),
    ...lines("briefing", [
      ["briefing_landfall", "Commander, welcome to Vitrea. The colony company left this plateau in a hurry. The yard, a power plant and a refinery are still standing. Get the colony working again: raise a Barracks, put a Radar Outpost up so we can see the land, and get the crystal flowing. Reclaimer scouts are watching from the far side of the map, but they won't move on us yet."],
      ["briefing_storm_season", "The storms are coming early this year, and they're coming often. The Shardbound know it. They'll use the weather as cover to raid us. Hold out for eight minutes. Keep your harvesters out of the storms; they'll run for the refinery when one gets close, but they need somewhere safe to run to."],
      ["briefing_glass_teeth", "This time you're with the Shardbound. The Reclaimers have built a radar outpost that watches every storm route on the plain, and while it stands, they see us coming. There's no base this time: just a strike force of Prism Tanks, Skimmers and Glasswalkers. Take out the radar. Crystal will heal your units while they stand on it. Use the fields."],
      ["briefing_salvage_rights", "Now you lead the Reclaimers. Concord thinks the colony's wreckage belongs to them. We think anything left lying on the plain belongs to whoever can carry it. Build up, and break their base. Remember: every Concord vehicle you destroy pays you salvage."],
      ["briefing_dusk_convoy", "Concord has found a fresh claim on the far side of the plain, and the haulers to work it are ready. Rook's Reclaimers are waiting along the road; they want the haulers more than the claim. Get them there. The convoy drives itself, but it halts whenever enemies are close: clear the road ahead and it will roll on. Two of the three haulers must reach the claim."],
      ["briefing_lights_out", "Shardbound again. Concord has dug in around its new claim, ringed with turrets that never sleep. But turrets need power, and power plants burn. Strike at night. Destroy all three of their power plants: with the power out, their turrets fire at half speed. Your Lancers out-range the gun turrets and pick off soldiers, but only the Prism Tanks can bring buildings down. There is no base. Keep your strike team alive."],
      ["briefing_relay_hill", "You're Boss Rook's again. The company left three relay towers on the plain, and whoever holds them hears every radio on Vitrea. The Shardbound hold all three, each with a turret and a squad. Take them, and hold all three at the same time for a full minute. Dust storms roll through: you'll hear the enemy before you see them."],
      ["briefing_long_night", "Back with Concord. The Seer and Boss Rook have made a deal, and tonight they come for us together, from two sides at once. There's no winning this in the dark. Hold the Construction Yard until dawn: ten minutes. Build defences, keep the harvest going, and don't let the yard fall."],
      ["briefing_unlikely_allies", "The Seer broke her deal with Rook the moment the night was over, and took his best fields. Rook has called us. On an open channel. Asking for help. Fight alongside the Reclaimers against both Shardbound bases. Destroy every Shardbound building. Rook's people will fight their own war; help them, and they'll help you."],
      ["briefing_glass_crown", "Back with Concord, for the last time. The Shardbound have made the biggest crystal fields on Vitrea their home, and the storms don't touch them. End this. Destroy their base before the crystal swallows the plain."]
    ])
  ];
  function briefingKey(missionId) {
    return `briefing_${missionId.replace(/-/g, "_")}`;
  }

  // src/net/lockstep.ts
  var STEP = 1 / 60;
  var TURN_STEPS = 6;
  var DELAY_TURNS = 2;
  var HASH_EVERY = 25;
  function stateHash(g) {
    let h = 2166136261;
    const mix = (n) => {
      h ^= Math.round(n * 1e3) | 0;
      h = Math.imul(h, 16777619);
    };
    mix(g.credits);
    mix(g.ai.credits);
    mix(g.cores);
    mix(g.ai.cores);
    mix(g.nextId);
    for (const u of g.units) {
      mix(u.id);
      mix(u.x);
      mix(u.y);
      mix(u.hp);
      mix(u.cargo);
    }
    for (const b of g.buildings) {
      mix(b.id);
      mix(b.hp);
    }
    return h >>> 0;
  }
  var Lockstep = class {
    /** The turn about to run, and how many of its steps have run. */
    turn = 0;
    step = 0;
    incoming = /* @__PURE__ */ new Map();
    mine = /* @__PURE__ */ new Map();
    outbox = [];
    hashes = /* @__PURE__ */ new Map();
    /** Every turn's applied commands, [side 0, side 1], for catching up a player who rejoins. */
    history = [];
    /** Every turn message we've sent, so they can be resent after a dropped connection. */
    sent = /* @__PURE__ */ new Map();
    /** Turns still to replay when catching up (oldest first), and where they end. */
    replay = [];
    replayIndex = 0;
    /** Called with the commanding side's error text when one of the local player's commands fails. */
    onError = () => {
    };
    /** Called for every command as it is applied (both sides), e.g. to record a replay. */
    onApply = () => {
    };
    /** Called once if the two games drift apart. */
    onDesync = () => {
    };
    desynced = false;
    g;
    local;
    /** How messages reach the other player; swapped when they reconnect. */
    send;
    constructor(g, local, send) {
      this.g = g;
      this.local = local;
      this.send = send;
      for (let t = 0; t < DELAY_TURNS; t++) {
        this.mine.set(t, []);
        this.incoming.set(t, []);
      }
    }
    /** Queue a local command; it goes out with the next turn. */
    issue(c) {
      this.outbox.push(c);
    }
    receive(m) {
      if (m.type === "turn") this.incoming.set(m.turn, m.cmds);
      else if (m.type === "hash") {
        const mine = this.hashes.get(m.turn);
        if (mine !== void 0 && mine !== m.hash && !this.desynced) {
          this.desynced = true;
          this.onDesync(m.turn);
        }
      }
    }
    /** True if the next turn is waiting on the other player's commands. */
    get waiting() {
      return !this.catchingUp && this.step === 0 && !this.incoming.has(this.turn);
    }
    /** True while replaying the game's history after rejoining. */
    get catchingUp() {
      return this.replayIndex < this.replay.length;
    }
    /** How far through catching up (0-1). */
    get catchUpProgress() {
      return this.replay.length ? this.replayIndex / this.replay.length : 1;
    }
    /** Snapshot for a rejoining player. Only valid at the start of a turn (`step === 0`). */
    catchUpData() {
      const side = (o) => [...o === this.local ? this.mine : this.incoming].filter(([t]) => t >= this.turn);
      return { turn: this.turn, history: this.history.slice(0, this.turn), future: { 0: side(0), 1: side(1) } };
    }
    /**
     * Rebuild from a catch-up: replay the history (a chunk per `advance` call),
     * then carry on with the scheduled commands. Turns we have no commands for
     * yet get empty ones, sent at once, so the other player isn't left waiting.
     */
    loadCatchUp(data) {
      this.replay = data.history;
      this.replayIndex = 0;
      this.turn = 0;
      this.step = 0;
      this.mine = new Map(data.future[this.local]);
      this.incoming = new Map(data.future[this.local === 0 ? 1 : 0]);
      for (let t = data.turn; t < data.turn + DELAY_TURNS; t++) {
        if (!this.mine.has(t)) this.mine.set(t, []);
      }
      for (const [t, cmds] of this.mine) {
        this.sent.set(t, cmds);
        this.send({ type: "turn", turn: t, cmds });
      }
    }
    /** After a dropped connection: resend every turn message from `from` on. */
    resendFrom(from) {
      for (const [t, cmds] of this.sent) if (t >= from) this.send({ type: "turn", turn: t, cmds });
    }
    /** Run up to `steps` simulation steps; returns how many ran (fewer while waiting for the other side). */
    advance(steps) {
      let ran = 0;
      while (ran < steps) {
        if (this.catchingUp && this.step === 0) {
          const [first, second] = this.replay[this.replayIndex++];
          for (const c of first) {
            this.onApply(0, c, this.g.tick);
            applyCommand(this.g, 0, c);
          }
          for (const c of second) {
            this.onApply(1, c, this.g.tick);
            applyCommand(this.g, 1, c);
          }
          this.history[this.turn] = [first, second];
        } else if (this.step === 0) {
          const theirs = this.incoming.get(this.turn);
          if (!theirs) break;
          const later = this.turn + DELAY_TURNS;
          const outgoing = this.outbox;
          this.outbox = [];
          this.mine.set(later, outgoing);
          this.sent.set(later, outgoing);
          this.send({ type: "turn", turn: later, cmds: outgoing });
          const mine = this.mine.get(this.turn) ?? [];
          const [first, second] = this.local === 0 ? [mine, theirs] : [theirs, mine];
          for (const c of first) this.apply(0, c);
          for (const c of second) this.apply(1, c);
          this.history[this.turn] = [first, second];
          this.mine.delete(this.turn);
          this.incoming.delete(this.turn);
        }
        update(this.g, STEP);
        ran++;
        if (++this.step === TURN_STEPS) {
          this.step = 0;
          if (this.turn % HASH_EVERY === 0 && !this.catchingUp) {
            const hash4 = stateHash(this.g);
            this.hashes.set(this.turn, hash4);
            this.send({ type: "hash", turn: this.turn, hash: hash4 });
          }
          this.turn++;
        }
      }
      return ran;
    }
    apply(owner, c) {
      this.onApply(owner, c, this.g.tick);
      const problem = applyCommand(this.g, owner, c);
      if (problem && owner === this.local) this.onError(problem);
    }
  };

  // node_modules/peerjs-js-binarypack/dist/binarypack.mjs
  var $e8379818650e2442$export$93654d4f2d6cd524 = class {
    constructor() {
      this.encoder = new TextEncoder();
      this._pieces = [];
      this._parts = [];
    }
    append_buffer(data) {
      this.flush();
      this._parts.push(data);
    }
    append(data) {
      this._pieces.push(data);
    }
    flush() {
      if (this._pieces.length > 0) {
        const buf = new Uint8Array(this._pieces);
        this._parts.push(buf);
        this._pieces = [];
      }
    }
    toArrayBuffer() {
      const buffer = [];
      for (const part of this._parts) buffer.push(part);
      return $e8379818650e2442$var$concatArrayBuffers(buffer).buffer;
    }
  };
  function $e8379818650e2442$var$concatArrayBuffers(bufs) {
    let size = 0;
    for (const buf of bufs) size += buf.byteLength;
    const result = new Uint8Array(size);
    let offset = 0;
    for (const buf of bufs) {
      const view = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
      result.set(view, offset);
      offset += buf.byteLength;
    }
    return result;
  }
  function $0cfd7828ad59115f$export$417857010dc9287f(data) {
    const unpacker = new $0cfd7828ad59115f$var$Unpacker(data);
    return unpacker.unpack();
  }
  function $0cfd7828ad59115f$export$2a703dbb0cb35339(data) {
    const packer = new $0cfd7828ad59115f$export$b9ec4b114aa40074();
    const res = packer.pack(data);
    if (res instanceof Promise) return res.then(() => packer.getBuffer());
    return packer.getBuffer();
  }
  var $0cfd7828ad59115f$var$Unpacker = class {
    constructor(data) {
      this.index = 0;
      this.dataBuffer = data;
      this.dataView = new Uint8Array(this.dataBuffer);
      this.length = this.dataBuffer.byteLength;
    }
    unpack() {
      const type = this.unpack_uint8();
      if (type < 128) return type;
      else if ((type ^ 224) < 32) return (type ^ 224) - 32;
      let size;
      if ((size = type ^ 160) <= 15) return this.unpack_raw(size);
      else if ((size = type ^ 176) <= 15) return this.unpack_string(size);
      else if ((size = type ^ 144) <= 15) return this.unpack_array(size);
      else if ((size = type ^ 128) <= 15) return this.unpack_map(size);
      switch (type) {
        case 192:
          return null;
        case 193:
          return void 0;
        case 194:
          return false;
        case 195:
          return true;
        case 202:
          return this.unpack_float();
        case 203:
          return this.unpack_double();
        case 204:
          return this.unpack_uint8();
        case 205:
          return this.unpack_uint16();
        case 206:
          return this.unpack_uint32();
        case 207:
          return this.unpack_uint64();
        case 208:
          return this.unpack_int8();
        case 209:
          return this.unpack_int16();
        case 210:
          return this.unpack_int32();
        case 211:
          return this.unpack_int64();
        case 212:
          return void 0;
        case 213:
          return void 0;
        case 214:
          return void 0;
        case 215:
          return void 0;
        case 216:
          size = this.unpack_uint16();
          return this.unpack_string(size);
        case 217:
          size = this.unpack_uint32();
          return this.unpack_string(size);
        case 218:
          size = this.unpack_uint16();
          return this.unpack_raw(size);
        case 219:
          size = this.unpack_uint32();
          return this.unpack_raw(size);
        case 220:
          size = this.unpack_uint16();
          return this.unpack_array(size);
        case 221:
          size = this.unpack_uint32();
          return this.unpack_array(size);
        case 222:
          size = this.unpack_uint16();
          return this.unpack_map(size);
        case 223:
          size = this.unpack_uint32();
          return this.unpack_map(size);
      }
    }
    unpack_uint8() {
      const byte = this.dataView[this.index] & 255;
      this.index++;
      return byte;
    }
    unpack_uint16() {
      const bytes = this.read(2);
      const uint16 = (bytes[0] & 255) * 256 + (bytes[1] & 255);
      this.index += 2;
      return uint16;
    }
    unpack_uint32() {
      const bytes = this.read(4);
      const uint32 = ((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3];
      this.index += 4;
      return uint32;
    }
    unpack_uint64() {
      const bytes = this.read(8);
      const uint64 = ((((((bytes[0] * 256 + bytes[1]) * 256 + bytes[2]) * 256 + bytes[3]) * 256 + bytes[4]) * 256 + bytes[5]) * 256 + bytes[6]) * 256 + bytes[7];
      this.index += 8;
      return uint64;
    }
    unpack_int8() {
      const uint8 = this.unpack_uint8();
      return uint8 < 128 ? uint8 : uint8 - 256;
    }
    unpack_int16() {
      const uint16 = this.unpack_uint16();
      return uint16 < 32768 ? uint16 : uint16 - 65536;
    }
    unpack_int32() {
      const uint32 = this.unpack_uint32();
      return uint32 < 2 ** 31 ? uint32 : uint32 - 2 ** 32;
    }
    unpack_int64() {
      const uint64 = this.unpack_uint64();
      return uint64 < 2 ** 63 ? uint64 : uint64 - 2 ** 64;
    }
    unpack_raw(size) {
      if (this.length < this.index + size) throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${size} ${this.length}`);
      const buf = this.dataBuffer.slice(this.index, this.index + size);
      this.index += size;
      return buf;
    }
    unpack_string(size) {
      const bytes = this.read(size);
      let i = 0;
      let str = "";
      let c;
      let code;
      while (i < size) {
        c = bytes[i];
        if (c < 160) {
          code = c;
          i++;
        } else if ((c ^ 192) < 32) {
          code = (c & 31) << 6 | bytes[i + 1] & 63;
          i += 2;
        } else if ((c ^ 224) < 16) {
          code = (c & 15) << 12 | (bytes[i + 1] & 63) << 6 | bytes[i + 2] & 63;
          i += 3;
        } else {
          code = (c & 7) << 18 | (bytes[i + 1] & 63) << 12 | (bytes[i + 2] & 63) << 6 | bytes[i + 3] & 63;
          i += 4;
        }
        str += String.fromCodePoint(code);
      }
      this.index += size;
      return str;
    }
    unpack_array(size) {
      const objects = new Array(size);
      for (let i = 0; i < size; i++) objects[i] = this.unpack();
      return objects;
    }
    unpack_map(size) {
      const map = {};
      for (let i = 0; i < size; i++) {
        const key = this.unpack();
        map[key] = this.unpack();
      }
      return map;
    }
    unpack_float() {
      const uint32 = this.unpack_uint32();
      const sign = uint32 >> 31;
      const exp = (uint32 >> 23 & 255) - 127;
      const fraction = uint32 & 8388607 | 8388608;
      return (sign === 0 ? 1 : -1) * fraction * 2 ** (exp - 23);
    }
    unpack_double() {
      const h32 = this.unpack_uint32();
      const l32 = this.unpack_uint32();
      const sign = h32 >> 31;
      const exp = (h32 >> 20 & 2047) - 1023;
      const hfrac = h32 & 1048575 | 1048576;
      const frac = hfrac * 2 ** (exp - 20) + l32 * 2 ** (exp - 52);
      return (sign === 0 ? 1 : -1) * frac;
    }
    read(length) {
      const j = this.index;
      if (j + length <= this.length) return this.dataView.subarray(j, j + length);
      else throw new Error("BinaryPackFailure: read index out of range");
    }
  };
  var $0cfd7828ad59115f$export$b9ec4b114aa40074 = class {
    getBuffer() {
      return this._bufferBuilder.toArrayBuffer();
    }
    pack(value) {
      if (typeof value === "string") this.pack_string(value);
      else if (typeof value === "number") {
        if (Math.floor(value) === value) this.pack_integer(value);
        else this.pack_double(value);
      } else if (typeof value === "boolean") {
        if (value === true) this._bufferBuilder.append(195);
        else if (value === false) this._bufferBuilder.append(194);
      } else if (value === void 0) this._bufferBuilder.append(192);
      else if (typeof value === "object") {
        if (value === null) this._bufferBuilder.append(192);
        else {
          const constructor = value.constructor;
          if (value instanceof Array) {
            const res = this.pack_array(value);
            if (res instanceof Promise) return res.then(() => this._bufferBuilder.flush());
          } else if (value instanceof ArrayBuffer) this.pack_bin(new Uint8Array(value));
          else if ("BYTES_PER_ELEMENT" in value) {
            const v = value;
            this.pack_bin(new Uint8Array(v.buffer, v.byteOffset, v.byteLength));
          } else if (value instanceof Date) this.pack_string(value.toString());
          else if (value instanceof Blob) return value.arrayBuffer().then((buffer) => {
            this.pack_bin(new Uint8Array(buffer));
            this._bufferBuilder.flush();
          });
          else if (constructor == Object || constructor.toString().startsWith("class")) {
            const res = this.pack_object(value);
            if (res instanceof Promise) return res.then(() => this._bufferBuilder.flush());
          } else throw new Error(`Type "${constructor.toString()}" not yet supported`);
        }
      } else throw new Error(`Type "${typeof value}" not yet supported`);
      this._bufferBuilder.flush();
    }
    pack_bin(blob) {
      const length = blob.length;
      if (length <= 15) this.pack_uint8(160 + length);
      else if (length <= 65535) {
        this._bufferBuilder.append(218);
        this.pack_uint16(length);
      } else if (length <= 4294967295) {
        this._bufferBuilder.append(219);
        this.pack_uint32(length);
      } else throw new Error("Invalid length");
      this._bufferBuilder.append_buffer(blob);
    }
    pack_string(str) {
      const encoded = this._textEncoder.encode(str);
      const length = encoded.length;
      if (length <= 15) this.pack_uint8(176 + length);
      else if (length <= 65535) {
        this._bufferBuilder.append(216);
        this.pack_uint16(length);
      } else if (length <= 4294967295) {
        this._bufferBuilder.append(217);
        this.pack_uint32(length);
      } else throw new Error("Invalid length");
      this._bufferBuilder.append_buffer(encoded);
    }
    pack_array(ary) {
      const length = ary.length;
      if (length <= 15) this.pack_uint8(144 + length);
      else if (length <= 65535) {
        this._bufferBuilder.append(220);
        this.pack_uint16(length);
      } else if (length <= 4294967295) {
        this._bufferBuilder.append(221);
        this.pack_uint32(length);
      } else throw new Error("Invalid length");
      const packNext = (index) => {
        if (index < length) {
          const res = this.pack(ary[index]);
          if (res instanceof Promise) return res.then(() => packNext(index + 1));
          return packNext(index + 1);
        }
      };
      return packNext(0);
    }
    pack_integer(num) {
      if (num >= -32 && num <= 127) this._bufferBuilder.append(num & 255);
      else if (num >= 0 && num <= 255) {
        this._bufferBuilder.append(204);
        this.pack_uint8(num);
      } else if (num >= -128 && num <= 127) {
        this._bufferBuilder.append(208);
        this.pack_int8(num);
      } else if (num >= 0 && num <= 65535) {
        this._bufferBuilder.append(205);
        this.pack_uint16(num);
      } else if (num >= -32768 && num <= 32767) {
        this._bufferBuilder.append(209);
        this.pack_int16(num);
      } else if (num >= 0 && num <= 4294967295) {
        this._bufferBuilder.append(206);
        this.pack_uint32(num);
      } else if (num >= -2147483648 && num <= 2147483647) {
        this._bufferBuilder.append(210);
        this.pack_int32(num);
      } else if (num >= -9223372036854776e3 && num <= 9223372036854776e3) {
        this._bufferBuilder.append(211);
        this.pack_int64(num);
      } else if (num >= 0 && num <= 18446744073709552e3) {
        this._bufferBuilder.append(207);
        this.pack_uint64(num);
      } else throw new Error("Invalid integer");
    }
    pack_double(num) {
      let sign = 0;
      if (num < 0) {
        sign = 1;
        num = -num;
      }
      const exp = Math.floor(Math.log(num) / Math.LN2);
      const frac0 = num / 2 ** exp - 1;
      const frac1 = Math.floor(frac0 * 2 ** 52);
      const b32 = 2 ** 32;
      const h32 = sign << 31 | exp + 1023 << 20 | frac1 / b32 & 1048575;
      const l32 = frac1 % b32;
      this._bufferBuilder.append(203);
      this.pack_int32(h32);
      this.pack_int32(l32);
    }
    pack_object(obj) {
      const keys = Object.keys(obj);
      const length = keys.length;
      if (length <= 15) this.pack_uint8(128 + length);
      else if (length <= 65535) {
        this._bufferBuilder.append(222);
        this.pack_uint16(length);
      } else if (length <= 4294967295) {
        this._bufferBuilder.append(223);
        this.pack_uint32(length);
      } else throw new Error("Invalid length");
      const packNext = (index) => {
        if (index < keys.length) {
          const prop = keys[index];
          if (obj.hasOwnProperty(prop)) {
            this.pack(prop);
            const res = this.pack(obj[prop]);
            if (res instanceof Promise) return res.then(() => packNext(index + 1));
          }
          return packNext(index + 1);
        }
      };
      return packNext(0);
    }
    pack_uint8(num) {
      this._bufferBuilder.append(num);
    }
    pack_uint16(num) {
      this._bufferBuilder.append(num >> 8);
      this._bufferBuilder.append(num & 255);
    }
    pack_uint32(num) {
      const n = num & 4294967295;
      this._bufferBuilder.append((n & 4278190080) >>> 24);
      this._bufferBuilder.append((n & 16711680) >>> 16);
      this._bufferBuilder.append((n & 65280) >>> 8);
      this._bufferBuilder.append(n & 255);
    }
    pack_uint64(num) {
      const high = num / 2 ** 32;
      const low = num % 2 ** 32;
      this._bufferBuilder.append((high & 4278190080) >>> 24);
      this._bufferBuilder.append((high & 16711680) >>> 16);
      this._bufferBuilder.append((high & 65280) >>> 8);
      this._bufferBuilder.append(high & 255);
      this._bufferBuilder.append((low & 4278190080) >>> 24);
      this._bufferBuilder.append((low & 16711680) >>> 16);
      this._bufferBuilder.append((low & 65280) >>> 8);
      this._bufferBuilder.append(low & 255);
    }
    pack_int8(num) {
      this._bufferBuilder.append(num & 255);
    }
    pack_int16(num) {
      this._bufferBuilder.append((num & 65280) >> 8);
      this._bufferBuilder.append(num & 255);
    }
    pack_int32(num) {
      this._bufferBuilder.append(num >>> 24 & 255);
      this._bufferBuilder.append((num & 16711680) >>> 16);
      this._bufferBuilder.append((num & 65280) >>> 8);
      this._bufferBuilder.append(num & 255);
    }
    pack_int64(num) {
      const high = Math.floor(num / 2 ** 32);
      const low = num % 2 ** 32;
      this._bufferBuilder.append((high & 4278190080) >>> 24);
      this._bufferBuilder.append((high & 16711680) >>> 16);
      this._bufferBuilder.append((high & 65280) >>> 8);
      this._bufferBuilder.append(high & 255);
      this._bufferBuilder.append((low & 4278190080) >>> 24);
      this._bufferBuilder.append((low & 16711680) >>> 16);
      this._bufferBuilder.append((low & 65280) >>> 8);
      this._bufferBuilder.append(low & 255);
    }
    constructor() {
      this._bufferBuilder = new (0, $e8379818650e2442$export$93654d4f2d6cd524)();
      this._textEncoder = new TextEncoder();
    }
  };

  // node_modules/webrtc-adapter/src/js/utils.js
  var logDisabled_ = true;
  var deprecationWarnings_ = true;
  function extractVersion(uastring, expr, pos) {
    const match = uastring.match(expr);
    return match && match.length >= pos && parseFloat(match[pos], 10);
  }
  function wrapPeerConnectionEvent(window2, eventNameToWrap, wrapper) {
    if (!window2.RTCPeerConnection) {
      return;
    }
    const addEventListener = Object.getOwnPropertyDescriptor(
      EventTarget.prototype,
      "addEventListener"
    );
    if (!addEventListener.writable) {
      log("Unable to polyfill events");
      return;
    }
    const proto = window2.RTCPeerConnection.prototype;
    const nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function(nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap) {
        return nativeAddEventListener.apply(this, arguments);
      }
      const wrappedCallback = (e) => {
        const modifiedEvent = wrapper(e);
        if (modifiedEvent) {
          if (cb.handleEvent) {
            cb.handleEvent(modifiedEvent);
          } else {
            cb(modifiedEvent);
          }
        }
      };
      this._eventMap = this._eventMap || {};
      if (!this._eventMap[eventNameToWrap]) {
        this._eventMap[eventNameToWrap] = /* @__PURE__ */ new Map();
      }
      this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
      return nativeAddEventListener.apply(this, [
        nativeEventName,
        wrappedCallback
      ]);
    };
    const nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function(nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      if (!this._eventMap[eventNameToWrap].has(cb)) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
      this._eventMap[eventNameToWrap].delete(cb);
      if (this._eventMap[eventNameToWrap].size === 0) {
        delete this._eventMap[eventNameToWrap];
      }
      if (Object.keys(this._eventMap).length === 0) {
        delete this._eventMap;
      }
      return nativeRemoveEventListener.apply(this, [
        nativeEventName,
        unwrappedCb
      ]);
    };
    Object.defineProperty(proto, "on" + eventNameToWrap, {
      get() {
        return this["_on" + eventNameToWrap];
      },
      set(cb) {
        if (this["_on" + eventNameToWrap]) {
          this.removeEventListener(
            eventNameToWrap,
            this["_on" + eventNameToWrap]
          );
          delete this["_on" + eventNameToWrap];
        }
        if (cb) {
          this.addEventListener(
            eventNameToWrap,
            this["_on" + eventNameToWrap] = cb
          );
        }
      },
      enumerable: true,
      configurable: true
    });
  }
  function disableLog(bool) {
    if (typeof bool !== "boolean") {
      return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    }
    logDisabled_ = bool;
    return bool ? "adapter.js logging disabled" : "adapter.js logging enabled";
  }
  function disableWarnings(bool) {
    if (typeof bool !== "boolean") {
      return new Error("Argument type: " + typeof bool + ". Please use a boolean.");
    }
    deprecationWarnings_ = !bool;
    return "adapter.js deprecation warnings " + (bool ? "disabled" : "enabled");
  }
  function log() {
    if (typeof window === "object") {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== "undefined" && typeof console.log === "function") {
        console.log.apply(console, arguments);
      }
    }
  }
  function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + " is deprecated, please use " + newMethod + " instead.");
  }
  function detectBrowser(window2) {
    const result = { browser: null, version: null };
    if (typeof window2 === "undefined" || !window2.navigator || !window2.navigator.userAgent) {
      result.browser = "Not a browser.";
      return result;
    }
    const { navigator: navigator2 } = window2;
    if (navigator2.userAgentData && navigator2.userAgentData.brands) {
      const chromium = navigator2.userAgentData.brands.find((brand) => {
        return brand.brand === "Chromium";
      });
      if (chromium) {
        const version = parseInt(chromium.version, 10);
        if (version >= 90) {
          return { browser: "chrome", version };
        }
      }
    }
    if (navigator2.mozGetUserMedia) {
      result.browser = "firefox";
      result.version = parseInt(extractVersion(
        navigator2.userAgent,
        /Firefox\/(\d+)\./,
        1
      ));
    } else if (navigator2.webkitGetUserMedia || window2.isSecureContext === false && window2.webkitRTCPeerConnection) {
      result.browser = "chrome";
      result.version = parseInt(extractVersion(
        navigator2.userAgent,
        /Chrom(e|ium)\/(\d+)\./,
        2
      )) || null;
    } else if (window2.RTCPeerConnection && navigator2.userAgent.match(/AppleWebKit\/(\d+)\./)) {
      result.browser = "safari";
      result.version = parseInt(extractVersion(
        navigator2.userAgent,
        /AppleWebKit\/(\d+)\./,
        1
      ));
      result.supportsUnifiedPlan = window2.RTCRtpTransceiver && "currentDirection" in window2.RTCRtpTransceiver.prototype;
      result._safariVersion = extractVersion(
        navigator2.userAgent,
        /Version\/(\d+(\.?\d+))/,
        1
      );
    } else {
      result.browser = "Not a supported browser.";
      return result;
    }
    return result;
  }
  function isObject(val) {
    return Object.prototype.toString.call(val) === "[object Object]";
  }
  function compactObject(data) {
    if (!isObject(data)) {
      return data;
    }
    return Object.keys(data).reduce(function(accumulator, key) {
      const isObj = isObject(data[key]);
      const value = isObj ? compactObject(data[key]) : data[key];
      const isEmptyObject = isObj && !Object.keys(value).length;
      if (value === void 0 || isEmptyObject) {
        return accumulator;
      }
      return Object.assign(accumulator, { [key]: value });
    }, {});
  }
  function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) {
      return;
    }
    resultSet.set(base.id, base);
    Object.keys(base).forEach((name) => {
      if (name.endsWith("Id")) {
        walkStats(stats, stats.get(base[name]), resultSet);
      } else if (name.endsWith("Ids")) {
        base[name].forEach((id) => {
          walkStats(stats, stats.get(id), resultSet);
        });
      }
    });
  }
  function filterStats(result, track, outbound) {
    const streamStatsType = outbound ? "outbound-rtp" : "inbound-rtp";
    const filteredResult = /* @__PURE__ */ new Map();
    if (track === null) {
      return filteredResult;
    }
    const trackStats = [];
    result.forEach((value) => {
      if (value.type === "track" && value.trackIdentifier === track.id) {
        trackStats.push(value);
      }
    });
    trackStats.forEach((trackStat) => {
      result.forEach((stats) => {
        if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
          walkStats(result, stats, filteredResult);
        }
      });
    });
    return filteredResult;
  }

  // node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js
  var chrome_shim_exports = {};
  __export(chrome_shim_exports, {
    fixNegotiationNeeded: () => fixNegotiationNeeded,
    shimAddTrackRemoveTrack: () => shimAddTrackRemoveTrack,
    shimAddTrackRemoveTrackWithNative: () => shimAddTrackRemoveTrackWithNative,
    shimGetSendersWithDtmf: () => shimGetSendersWithDtmf,
    shimGetUserMedia: () => shimGetUserMedia,
    shimMediaStream: () => shimMediaStream,
    shimOnTrack: () => shimOnTrack,
    shimPeerConnection: () => shimPeerConnection,
    shimSenderReceiverGetStats: () => shimSenderReceiverGetStats
  });

  // node_modules/webrtc-adapter/src/js/chrome/getusermedia.js
  var logging = log;
  function shimGetUserMedia(window2, browserDetails) {
    if (browserDetails.version >= 64) {
      return;
    }
    const navigator2 = window2 && window2.navigator;
    if (!navigator2.mediaDevices) {
      return;
    }
    const constraintsToChrome_ = function(c) {
      if (typeof c !== "object" || c.mandatory || c.optional) {
        return c;
      }
      const cc = {};
      Object.keys(c).forEach((key) => {
        if (key === "require" || key === "advanced" || key === "mediaSource") {
          return;
        }
        const r = typeof c[key] === "object" ? c[key] : { ideal: c[key] };
        if (r.exact !== void 0 && typeof r.exact === "number") {
          r.min = r.max = r.exact;
        }
        const oldname_ = function(prefix, name) {
          if (prefix) {
            return prefix + name.charAt(0).toUpperCase() + name.slice(1);
          }
          return name === "deviceId" ? "sourceId" : name;
        };
        if (r.ideal !== void 0) {
          cc.optional = cc.optional || [];
          let oc = {};
          if (typeof r.ideal === "number") {
            oc[oldname_("min", key)] = r.ideal;
            cc.optional.push(oc);
            oc = {};
            oc[oldname_("max", key)] = r.ideal;
            cc.optional.push(oc);
          } else {
            oc[oldname_("", key)] = r.ideal;
            cc.optional.push(oc);
          }
        }
        if (r.exact !== void 0 && typeof r.exact !== "number") {
          cc.mandatory = cc.mandatory || {};
          cc.mandatory[oldname_("", key)] = r.exact;
        } else {
          ["min", "max"].forEach((mix) => {
            if (r[mix] !== void 0) {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_(mix, key)] = r[mix];
            }
          });
        }
      });
      if (c.advanced) {
        cc.optional = (cc.optional || []).concat(c.advanced);
      }
      return cc;
    };
    const shimConstraints_ = function(constraints, func) {
      if (browserDetails.version >= 61) {
        return func(constraints);
      }
      constraints = JSON.parse(JSON.stringify(constraints));
      if (constraints && typeof constraints.audio === "object") {
        const remap = function(obj, a, b) {
          if (a in obj && !(b in obj)) {
            obj[b] = obj[a];
            delete obj[a];
          }
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        remap(constraints.audio, "autoGainControl", "googAutoGainControl");
        remap(constraints.audio, "noiseSuppression", "googNoiseSuppression");
        constraints.audio = constraintsToChrome_(constraints.audio);
      }
      if (constraints && typeof constraints.video === "object") {
        let face = constraints.video.facingMode;
        face = face && (typeof face === "object" ? face : { ideal: face });
        const getSupportedFacingModeLies = browserDetails.version < 66;
        if (face && (face.exact === "user" || face.exact === "environment" || face.ideal === "user" || face.ideal === "environment") && !(navigator2.mediaDevices.getSupportedConstraints && navigator2.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
          delete constraints.video.facingMode;
          let matches;
          if (face.exact === "environment" || face.ideal === "environment") {
            matches = ["back", "rear"];
          } else if (face.exact === "user" || face.ideal === "user") {
            matches = ["front"];
          }
          if (matches) {
            return navigator2.mediaDevices.enumerateDevices().then((devices) => {
              devices = devices.filter((d) => d.kind === "videoinput");
              let dev = devices.find((d) => matches.some((match) => d.label.toLowerCase().includes(match)));
              if (!dev && devices.length && matches.includes("back")) {
                dev = devices[devices.length - 1];
              }
              if (dev) {
                constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
              }
              constraints.video = constraintsToChrome_(constraints.video);
              logging("chrome: " + JSON.stringify(constraints));
              return func(constraints);
            });
          }
        }
        constraints.video = constraintsToChrome_(constraints.video);
      }
      logging("chrome: " + JSON.stringify(constraints));
      return func(constraints);
    };
    const shimError_ = function(e) {
      if (browserDetails.version >= 64) {
        return e;
      }
      return {
        name: {
          PermissionDeniedError: "NotAllowedError",
          PermissionDismissedError: "NotAllowedError",
          InvalidStateError: "NotAllowedError",
          DevicesNotFoundError: "NotFoundError",
          ConstraintNotSatisfiedError: "OverconstrainedError",
          TrackStartError: "NotReadableError",
          MediaDeviceFailedDueToShutdown: "NotAllowedError",
          MediaDeviceKillSwitchOn: "NotAllowedError",
          TabCaptureError: "AbortError",
          ScreenCaptureError: "AbortError",
          DeviceCaptureError: "AbortError"
        }[e.name] || e.name,
        message: e.message,
        constraint: e.constraint || e.constraintName,
        toString() {
          return this.name + (this.message && ": ") + this.message;
        }
      };
    };
    const getUserMedia_ = function(constraints, onSuccess, onError) {
      shimConstraints_(constraints, (c) => {
        navigator2.webkitGetUserMedia(c, onSuccess, (e) => {
          if (onError) {
            onError(shimError_(e));
          }
        });
      });
    };
    navigator2.getUserMedia = getUserMedia_.bind(navigator2);
    if (navigator2.mediaDevices.getUserMedia) {
      const origGetUserMedia = navigator2.mediaDevices.getUserMedia.bind(navigator2.mediaDevices);
      navigator2.mediaDevices.getUserMedia = function(cs) {
        return shimConstraints_(cs, (c) => origGetUserMedia(c).then((stream) => {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach((track) => {
              track.stop();
            });
            throw new DOMException("", "NotFoundError");
          }
          return stream;
        }, (e) => Promise.reject(shimError_(e))));
      };
    }
  }

  // node_modules/webrtc-adapter/src/js/chrome/chrome_shim.js
  function shimMediaStream(window2) {
    window2.MediaStream = window2.MediaStream || window2.webkitMediaStream;
  }
  function shimOnTrack(window2, browserDetails) {
    if (browserDetails.version > 102) {
      return;
    }
    if (typeof window2 === "object" && window2.RTCPeerConnection && !("ontrack" in window2.RTCPeerConnection.prototype)) {
      Object.defineProperty(window2.RTCPeerConnection.prototype, "ontrack", {
        get() {
          return this._ontrack;
        },
        set(f) {
          if (this._ontrack) {
            this.removeEventListener("track", this._ontrack);
          }
          this.addEventListener("track", this._ontrack = f);
        },
        enumerable: true,
        configurable: true
      });
      const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
      window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        if (!this._ontrackpoly) {
          this._ontrackpoly = (e) => {
            e.stream.addEventListener("addtrack", (te) => {
              let receiver;
              if (window2.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers().find((r) => r.track && r.track.id === te.track.id);
              } else {
                receiver = { track: te.track };
              }
              const event = new Event("track");
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = { receiver };
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach((track) => {
              let receiver;
              if (window2.RTCPeerConnection.prototype.getReceivers) {
                receiver = this.getReceivers().find((r) => r.track && r.track.id === track.id);
              } else {
                receiver = { track };
              }
              const event = new Event("track");
              event.track = track;
              event.receiver = receiver;
              event.transceiver = { receiver };
              event.streams = [e.stream];
              this.dispatchEvent(event);
            });
          };
          this.addEventListener("addstream", this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
    } else {
      wrapPeerConnectionEvent(window2, "track", (e) => {
        if (!e.transceiver) {
          Object.defineProperty(
            e,
            "transceiver",
            { value: { receiver: e.receiver } }
          );
        }
        return e;
      });
    }
  }
  function shimGetSendersWithDtmf(window2) {
    if (typeof window2 === "object" && window2.RTCPeerConnection && !("getSenders" in window2.RTCPeerConnection.prototype) && "createDTMFSender" in window2.RTCPeerConnection.prototype) {
      const shimSenderWithDtmf = function(pc, track) {
        return {
          track,
          get dtmf() {
            if (this._dtmf === void 0) {
              if (track.kind === "audio") {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };
      if (!window2.RTCPeerConnection.prototype.getSenders) {
        window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
          this._senders = this._senders || [];
          return this._senders.slice();
        };
        const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
        window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
          let sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };
        const origRemoveTrack = window2.RTCPeerConnection.prototype.removeTrack;
        window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
          origRemoveTrack.apply(this, arguments);
          const idx2 = this._senders.indexOf(sender);
          if (idx2 !== -1) {
            this._senders.splice(idx2, 1);
          }
        };
      }
      const origAddStream = window2.RTCPeerConnection.prototype.addStream;
      window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        this._senders = this._senders || [];
        origAddStream.apply(this, [stream]);
        stream.getTracks().forEach((track) => {
          this._senders.push(shimSenderWithDtmf(this, track));
        });
      };
      const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
      window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);
        stream.getTracks().forEach((track) => {
          const sender = this._senders.find((s) => s.track === track);
          if (sender) {
            this._senders.splice(this._senders.indexOf(sender), 1);
          }
        });
      };
    } else if (typeof window2 === "object" && window2.RTCPeerConnection && "getSenders" in window2.RTCPeerConnection.prototype && "createDTMFSender" in window2.RTCPeerConnection.prototype && window2.RTCRtpSender && !("dtmf" in window2.RTCRtpSender.prototype)) {
      const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
      window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender) => sender._pc = this);
        return senders;
      };
      Object.defineProperty(window2.RTCRtpSender.prototype, "dtmf", {
        get() {
          if (this._dtmf === void 0) {
            if (this.track.kind === "audio") {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  }
  function shimSenderReceiverGetStats(window2, browserDetails) {
    if (browserDetails.version >= 67) {
      return;
    }
    if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender && window2.RTCRtpReceiver)) {
      return;
    }
    if (!("getStats" in window2.RTCRtpSender.prototype)) {
      const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders) {
        window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
          const senders = origGetSenders.apply(this, []);
          senders.forEach((sender) => sender._pc = this);
          return senders;
        };
      }
      const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack) {
        window2.RTCPeerConnection.prototype.addTrack = function addTrack() {
          const sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      }
      window2.RTCRtpSender.prototype.getStats = function getStats() {
        const sender = this;
        return this._pc.getStats().then((result) => (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          filterStats(result, sender.track, true)
        ));
      };
    }
    if (!("getStats" in window2.RTCRtpReceiver.prototype)) {
      const origGetReceivers = window2.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers) {
        window2.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
          const receivers = origGetReceivers.apply(this, []);
          receivers.forEach((receiver) => receiver._pc = this);
          return receivers;
        };
      }
      wrapPeerConnectionEvent(window2, "track", (e) => {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window2.RTCRtpReceiver.prototype.getStats = function getStats() {
        const receiver = this;
        return this._pc.getStats().then((result) => filterStats(result, receiver.track, false));
      };
    }
    if (!("getStats" in window2.RTCRtpSender.prototype && "getStats" in window2.RTCRtpReceiver.prototype)) {
      return;
    }
    const origGetStats = window2.RTCPeerConnection.prototype.getStats;
    window2.RTCPeerConnection.prototype.getStats = function getStats() {
      if (arguments.length > 0 && arguments[0] instanceof window2.MediaStreamTrack) {
        const track = arguments[0];
        let sender;
        let receiver;
        let err;
        this.getSenders().forEach((s) => {
          if (s.track === track) {
            if (sender) {
              err = true;
            } else {
              sender = s;
            }
          }
        });
        this.getReceivers().forEach((r) => {
          if (r.track === track) {
            if (receiver) {
              err = true;
            } else {
              receiver = r;
            }
          }
          return r.track === track;
        });
        if (err || sender && receiver) {
          return Promise.reject(new DOMException(
            "There are more than one sender or receiver for the track.",
            "InvalidAccessError"
          ));
        } else if (sender) {
          return sender.getStats();
        } else if (receiver) {
          return receiver.getStats();
        }
        return Promise.reject(new DOMException(
          "There is no sender or receiver for the track.",
          "InvalidAccessError"
        ));
      }
      return origGetStats.apply(this, arguments);
    };
  }
  function shimAddTrackRemoveTrackWithNative(window2) {
    window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams).map((streamId) => this._shimmedLocalStreams[streamId][0]);
    };
    const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
    window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      const sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };
    const origAddStream = window2.RTCPeerConnection.prototype.addStream;
    window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      stream.getTracks().forEach((track) => {
        const alreadyExists = this.getSenders().find((s) => s.track === track);
        if (alreadyExists) {
          throw new DOMException(
            "Track already exists.",
            "InvalidAccessError"
          );
        }
      });
      const existingSenders = this.getSenders();
      origAddStream.apply(this, arguments);
      const newSenders = this.getSenders().filter((newSender) => existingSenders.indexOf(newSender) === -1);
      this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
    };
    const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
    window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };
    const origRemoveTrack = window2.RTCPeerConnection.prototype.removeTrack;
    window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach((streamId) => {
          const idx2 = this._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx2 !== -1) {
            this._shimmedLocalStreams[streamId].splice(idx2, 1);
          }
          if (this._shimmedLocalStreams[streamId].length === 1) {
            delete this._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
  }
  function shimAddTrackRemoveTrack(window2, browserDetails) {
    if (!window2.RTCPeerConnection) {
      return;
    }
    if (window2.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
      return shimAddTrackRemoveTrackWithNative(window2);
    }
    const origGetLocalStreams = window2.RTCPeerConnection.prototype.getLocalStreams;
    window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      const nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map((stream) => this._reverseStreams[stream.id]);
    };
    const origAddStream = window2.RTCPeerConnection.prototype.addStream;
    window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      stream.getTracks().forEach((track) => {
        const alreadyExists = this.getSenders().find((s) => s.track === track);
        if (alreadyExists) {
          throw new DOMException(
            "Track already exists.",
            "InvalidAccessError"
          );
        }
      });
      if (!this._reverseStreams[stream.id]) {
        const newStream = new window2.MediaStream(stream.getTracks());
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(this, [stream]);
    };
    const origRemoveStream = window2.RTCPeerConnection.prototype.removeStream;
    window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
      delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
      delete this._streams[stream.id];
    };
    window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
      if (this.signalingState === "closed") {
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError"
        );
      }
      const streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 || !streams[0].getTracks().find((t) => t === track)) {
        throw new DOMException(
          "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
          "NotSupportedError"
        );
      }
      const alreadyExists = this.getSenders().find((s) => s.track === track);
      if (alreadyExists) {
        throw new DOMException(
          "Track already exists.",
          "InvalidAccessError"
        );
      }
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      const oldStream = this._streams[stream.id];
      if (oldStream) {
        oldStream.addTrack(track);
        Promise.resolve().then(() => {
          this.dispatchEvent(new Event("negotiationneeded"));
        });
      } else {
        const newStream = new window2.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find((s) => s.track === track);
    };
    function replaceInternalStreamId(pc, description) {
      let sdp2 = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach((internalId) => {
        const externalStream = pc._reverseStreams[internalId];
        const internalStream = pc._streams[externalStream.id];
        sdp2 = sdp2.replace(
          new RegExp(internalStream.id, "g"),
          externalStream.id
        );
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp2
      });
    }
    function replaceExternalStreamId(pc, description) {
      let sdp2 = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach((internalId) => {
        const externalStream = pc._reverseStreams[internalId];
        const internalStream = pc._streams[externalStream.id];
        sdp2 = sdp2.replace(
          new RegExp(externalStream.id, "g"),
          internalStream.id
        );
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp2
      });
    }
    ["createOffer", "createAnswer"].forEach(function(method) {
      const nativeMethod = window2.RTCPeerConnection.prototype[method];
      const methodObj = { [method]() {
        const args = arguments;
        const isLegacyCall = arguments.length && typeof arguments[0] === "function";
        if (isLegacyCall) {
          return nativeMethod.apply(this, [
            (description) => {
              const desc = replaceInternalStreamId(this, description);
              args[0].apply(null, [desc]);
            },
            (err) => {
              if (args[1]) {
                args[1].apply(null, err);
              }
            },
            arguments[2]
          ]);
        }
        return nativeMethod.apply(this, arguments).then((description) => replaceInternalStreamId(this, description));
      } };
      window2.RTCPeerConnection.prototype[method] = methodObj[method];
    });
    const origSetLocalDescription = window2.RTCPeerConnection.prototype.setLocalDescription;
    window2.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };
    const origLocalDescription = Object.getOwnPropertyDescriptor(
      window2.RTCPeerConnection.prototype,
      "localDescription"
    );
    Object.defineProperty(
      window2.RTCPeerConnection.prototype,
      "localDescription",
      {
        get() {
          const description = origLocalDescription.get.apply(this);
          if (description.type === "") {
            return description;
          }
          return replaceInternalStreamId(this, description);
        }
      }
    );
    window2.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
      if (this.signalingState === "closed") {
        throw new DOMException(
          "The RTCPeerConnection's signalingState is 'closed'.",
          "InvalidStateError"
        );
      }
      if (!sender._pc) {
        throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
      }
      const isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException(
          "Sender was not created by this connection.",
          "InvalidAccessError"
        );
      }
      this._streams = this._streams || {};
      let stream;
      Object.keys(this._streams).forEach((streamid) => {
        const hasTrack = this._streams[streamid].getTracks().find((track) => sender.track === track);
        if (hasTrack) {
          stream = this._streams[streamid];
        }
      });
      if (stream) {
        if (stream.getTracks().length === 1) {
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event("negotiationneeded"));
      }
    };
  }
  function shimPeerConnection(window2, browserDetails) {
    if (!window2.RTCPeerConnection && window2.webkitRTCPeerConnection) {
      window2.RTCPeerConnection = window2.webkitRTCPeerConnection;
    }
    if (!window2.RTCPeerConnection) {
      return;
    }
    if (browserDetails.version < 53) {
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
        const nativeMethod = window2.RTCPeerConnection.prototype[method];
        const methodObj = { [method]() {
          arguments[0] = new (method === "addIceCandidate" ? window2.RTCIceCandidate : window2.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        } };
        window2.RTCPeerConnection.prototype[method] = methodObj[method];
      });
    }
  }
  function fixNegotiationNeeded(window2, browserDetails) {
    if (browserDetails.version > 102) {
      return;
    }
    wrapPeerConnectionEvent(window2, "negotiationneeded", (e) => {
      const pc = e.target;
      if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === "plan-b") {
        if (pc.signalingState !== "stable") {
          return;
        }
      }
      return e;
    });
  }

  // node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
  var firefox_shim_exports = {};
  __export(firefox_shim_exports, {
    shimAddTransceiver: () => shimAddTransceiver,
    shimCreateAnswer: () => shimCreateAnswer,
    shimCreateOffer: () => shimCreateOffer,
    shimGetDisplayMedia: () => shimGetDisplayMedia,
    shimGetParameters: () => shimGetParameters,
    shimGetStats: () => shimGetStats,
    shimGetUserMedia: () => shimGetUserMedia2,
    shimOnTrack: () => shimOnTrack2,
    shimPeerConnection: () => shimPeerConnection2,
    shimRTCDataChannel: () => shimRTCDataChannel,
    shimReceiverGetStats: () => shimReceiverGetStats,
    shimRemoveStream: () => shimRemoveStream,
    shimSenderGetStats: () => shimSenderGetStats
  });

  // node_modules/webrtc-adapter/src/js/firefox/getusermedia.js
  function shimGetUserMedia2(window2, browserDetails) {
    const navigator2 = window2 && window2.navigator;
    if (!navigator2.mediaDevices) {
      return;
    }
    const MediaStreamTrack = window2 && window2.MediaStreamTrack;
    navigator2.getUserMedia = function(constraints, onSuccess, onError) {
      deprecated(
        "navigator.getUserMedia",
        "navigator.mediaDevices.getUserMedia"
      );
      navigator2.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };
    if (!(browserDetails.version > 55 && "autoGainControl" in navigator2.mediaDevices.getSupportedConstraints())) {
      const remap = function(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      const nativeGetUserMedia = navigator2.mediaDevices.getUserMedia.bind(navigator2.mediaDevices);
      navigator2.mediaDevices.getUserMedia = function(c) {
        if (typeof c === "object" && typeof c.audio === "object") {
          c = JSON.parse(JSON.stringify(c));
          remap(c.audio, "autoGainControl", "mozAutoGainControl");
          remap(c.audio, "noiseSuppression", "mozNoiseSuppression");
        }
        return nativeGetUserMedia(c);
      };
      if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
        const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
        MediaStreamTrack.prototype.getSettings = function() {
          const obj = nativeGetSettings.apply(this, arguments);
          remap(obj, "mozAutoGainControl", "autoGainControl");
          remap(obj, "mozNoiseSuppression", "noiseSuppression");
          return obj;
        };
      }
      if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
        const nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
        MediaStreamTrack.prototype.applyConstraints = function(c) {
          if (this.kind === "audio" && typeof c === "object") {
            c = JSON.parse(JSON.stringify(c));
            remap(c, "autoGainControl", "mozAutoGainControl");
            remap(c, "noiseSuppression", "mozNoiseSuppression");
          }
          return nativeApplyConstraints.apply(this, [c]);
        };
      }
    }
  }

  // node_modules/webrtc-adapter/src/js/firefox/getdisplaymedia.js
  function shimGetDisplayMedia(window2, preferredMediaSource) {
    if (!window2.navigator.mediaDevices) {
      return;
    }
    if (window2.navigator.mediaDevices && "getDisplayMedia" in window2.navigator.mediaDevices) {
      return;
    }
    window2.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
      if (!(constraints && constraints.video)) {
        const err = new DOMException("getDisplayMedia without video constraints is undefined");
        err.name = "NotFoundError";
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = { mediaSource: preferredMediaSource };
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window2.navigator.mediaDevices.getUserMedia(constraints);
    };
  }

  // node_modules/webrtc-adapter/src/js/firefox/firefox_shim.js
  function shimOnTrack2(window2) {
    if (typeof window2 === "object" && window2.RTCTrackEvent && "receiver" in window2.RTCTrackEvent.prototype && !("transceiver" in window2.RTCTrackEvent.prototype)) {
      Object.defineProperty(window2.RTCTrackEvent.prototype, "transceiver", {
        get() {
          return { receiver: this.receiver };
        }
      });
    }
  }
  function shimPeerConnection2(window2, browserDetails) {
    if (typeof window2 !== "object" || !(window2.RTCPeerConnection || window2.mozRTCPeerConnection)) {
      return;
    }
    if (!window2.RTCPeerConnection && window2.mozRTCPeerConnection) {
      window2.RTCPeerConnection = window2.mozRTCPeerConnection;
    }
    if (browserDetails.version < 53) {
      ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(method) {
        const nativeMethod = window2.RTCPeerConnection.prototype[method];
        const methodObj = { [method]() {
          arguments[0] = new (method === "addIceCandidate" ? window2.RTCIceCandidate : window2.RTCSessionDescription)(arguments[0]);
          return nativeMethod.apply(this, arguments);
        } };
        window2.RTCPeerConnection.prototype[method] = methodObj[method];
      });
    }
  }
  function shimGetStats(window2, browserDetails) {
    if (typeof window2 !== "object" || !(window2.RTCPeerConnection || window2.mozRTCPeerConnection)) {
      return;
    }
    if (browserDetails.version >= 151) {
      return;
    }
    const modernStatsTypes = {
      inboundrtp: "inbound-rtp",
      outboundrtp: "outbound-rtp",
      candidatepair: "candidate-pair",
      localcandidate: "local-candidate",
      remotecandidate: "remote-candidate"
    };
    const nativeGetStats = window2.RTCPeerConnection.prototype.getStats;
    window2.RTCPeerConnection.prototype.getStats = function getStats() {
      const [selector, onSucc, onErr] = arguments;
      if (this.signalingState === "closed") {
        return Promise.resolve(/* @__PURE__ */ new Map());
      }
      return nativeGetStats.apply(this, [selector || null]).then((stats) => {
        if (browserDetails.version < 53 && !onSucc) {
          try {
            stats.forEach((stat) => {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== "TypeError") {
              throw e;
            }
            stats.forEach((stat, i) => {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      }).then(onSucc, onErr);
    };
  }
  function shimSenderGetStats(window2) {
    if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender)) {
      return;
    }
    if (window2.RTCRtpSender && "getStats" in window2.RTCRtpSender.prototype) {
      return;
    }
    const origGetSenders = window2.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window2.RTCPeerConnection.prototype.getSenders = function getSenders() {
        const senders = origGetSenders.apply(this, []);
        senders.forEach((sender) => sender._pc = this);
        return senders;
      };
    }
    const origAddTrack = window2.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window2.RTCPeerConnection.prototype.addTrack = function addTrack() {
        const sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window2.RTCRtpSender.prototype.getStats = function getStats() {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(/* @__PURE__ */ new Map());
    };
  }
  function shimReceiverGetStats(window2) {
    if (!(typeof window2 === "object" && window2.RTCPeerConnection && window2.RTCRtpSender)) {
      return;
    }
    if (window2.RTCRtpSender && "getStats" in window2.RTCRtpReceiver.prototype) {
      return;
    }
    const origGetReceivers = window2.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window2.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        const receivers = origGetReceivers.apply(this, []);
        receivers.forEach((receiver) => receiver._pc = this);
        return receivers;
      };
    }
    wrapPeerConnectionEvent(window2, "track", (e) => {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window2.RTCRtpReceiver.prototype.getStats = function getStats() {
      return this._pc.getStats(this.track);
    };
  }
  function shimRemoveStream(window2) {
    if (!window2.RTCPeerConnection || "removeStream" in window2.RTCPeerConnection.prototype) {
      return;
    }
    window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      deprecated("removeStream", "removeTrack");
      this.getSenders().forEach((sender) => {
        if (sender.track && stream.getTracks().includes(sender.track)) {
          this.removeTrack(sender);
        }
      });
    };
  }
  function shimRTCDataChannel(window2) {
    if (window2.DataChannel && !window2.RTCDataChannel) {
      window2.RTCDataChannel = window2.DataChannel;
    }
  }
  function shimAddTransceiver(window2, browserDetails) {
    if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
      return;
    }
    if (browserDetails.version >= 110) {
      return;
    }
    const origAddTransceiver = window2.RTCPeerConnection.prototype.addTransceiver;
    if (origAddTransceiver) {
      window2.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
        this.setParametersPromises = [];
        let sendEncodings = arguments[1] && arguments[1].sendEncodings;
        if (sendEncodings === void 0) {
          sendEncodings = [];
        }
        sendEncodings = [...sendEncodings];
        const shouldPerformCheck = sendEncodings.length > 0;
        if (shouldPerformCheck) {
          sendEncodings.forEach((encodingParam) => {
            if ("rid" in encodingParam) {
              const ridRegex = /^[a-z0-9]{0,16}$/i;
              if (!ridRegex.test(encodingParam.rid)) {
                throw new TypeError("Invalid RID value provided.");
              }
            }
            if ("scaleResolutionDownBy" in encodingParam) {
              if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1)) {
                throw new RangeError("scale_resolution_down_by must be >= 1.0");
              }
            }
            if ("maxFramerate" in encodingParam) {
              if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
                throw new RangeError("max_framerate must be >= 0.0");
              }
            }
          });
        }
        const transceiver = origAddTransceiver.apply(this, arguments);
        if (shouldPerformCheck) {
          const { sender } = transceiver;
          const params = sender.getParameters();
          if (!("encodings" in params) || // Avoid being fooled by patched getParameters() below.
          params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
            params.encodings = sendEncodings;
            sender.sendEncodings = sendEncodings;
            this.setParametersPromises.push(
              sender.setParameters(params).then(() => {
                delete sender.sendEncodings;
              }).catch(() => {
                delete sender.sendEncodings;
              })
            );
          }
        }
        return transceiver;
      };
    }
  }
  function shimGetParameters(window2, browserDetails) {
    if (!(typeof window2 === "object" && window2.RTCRtpSender)) {
      return;
    }
    if (browserDetails.version >= 110) {
      return;
    }
    const origGetParameters = window2.RTCRtpSender.prototype.getParameters;
    if (origGetParameters) {
      window2.RTCRtpSender.prototype.getParameters = function getParameters() {
        const params = origGetParameters.apply(this, arguments);
        if (!("encodings" in params)) {
          params.encodings = [].concat(this.sendEncodings || [{}]);
        }
        return params;
      };
    }
  }
  function shimCreateOffer(window2, browserDetails) {
    if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
      return;
    }
    if (browserDetails.version >= 110) {
      return;
    }
    const origCreateOffer = window2.RTCPeerConnection.prototype.createOffer;
    window2.RTCPeerConnection.prototype.createOffer = function createOffer() {
      if (this.setParametersPromises && this.setParametersPromises.length) {
        return Promise.all(this.setParametersPromises).then(() => {
          return origCreateOffer.apply(this, arguments);
        }).finally(() => {
          this.setParametersPromises = [];
        });
      }
      return origCreateOffer.apply(this, arguments);
    };
  }
  function shimCreateAnswer(window2, browserDetails) {
    if (!(typeof window2 === "object" && window2.RTCPeerConnection)) {
      return;
    }
    if (browserDetails.version >= 110) {
      return;
    }
    const origCreateAnswer = window2.RTCPeerConnection.prototype.createAnswer;
    window2.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
      if (this.setParametersPromises && this.setParametersPromises.length) {
        return Promise.all(this.setParametersPromises).then(() => {
          return origCreateAnswer.apply(this, arguments);
        }).finally(() => {
          this.setParametersPromises = [];
        });
      }
      return origCreateAnswer.apply(this, arguments);
    };
  }

  // node_modules/webrtc-adapter/src/js/safari/safari_shim.js
  var safari_shim_exports = {};
  __export(safari_shim_exports, {
    shimAudioContext: () => shimAudioContext,
    shimCallbacksAPI: () => shimCallbacksAPI,
    shimConstraints: () => shimConstraints,
    shimCreateOfferLegacy: () => shimCreateOfferLegacy,
    shimGetUserMedia: () => shimGetUserMedia3,
    shimLocalStreamsAPI: () => shimLocalStreamsAPI,
    shimRTCIceServerUrls: () => shimRTCIceServerUrls,
    shimRemoteStreamsAPI: () => shimRemoteStreamsAPI,
    shimTrackEventTransceiver: () => shimTrackEventTransceiver
  });
  function shimLocalStreamsAPI(window2) {
    if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
      return;
    }
    if (!("getLocalStreams" in window2.RTCPeerConnection.prototype)) {
      window2.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!("addStream" in window2.RTCPeerConnection.prototype)) {
      const _addTrack = window2.RTCPeerConnection.prototype.addTrack;
      window2.RTCPeerConnection.prototype.addStream = function addStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
        stream.getAudioTracks().forEach((track) => _addTrack.call(
          this,
          track,
          stream
        ));
        stream.getVideoTracks().forEach((track) => _addTrack.call(
          this,
          track,
          stream
        ));
      };
      window2.RTCPeerConnection.prototype.addTrack = function addTrack(track, ...streams) {
        if (streams) {
          streams.forEach((stream) => {
            if (!this._localStreams) {
              this._localStreams = [stream];
            } else if (!this._localStreams.includes(stream)) {
              this._localStreams.push(stream);
            }
          });
        }
        return _addTrack.apply(this, arguments);
      };
    }
    if (!("removeStream" in window2.RTCPeerConnection.prototype)) {
      window2.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        const index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        const tracks = stream.getTracks();
        this.getSenders().forEach((sender) => {
          if (tracks.includes(sender.track)) {
            this.removeTrack(sender);
          }
        });
      };
    }
  }
  function shimRemoteStreamsAPI(window2) {
    if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
      return;
    }
    if (!("getRemoteStreams" in window2.RTCPeerConnection.prototype)) {
      window2.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!("onaddstream" in window2.RTCPeerConnection.prototype)) {
      Object.defineProperty(window2.RTCPeerConnection.prototype, "onaddstream", {
        get() {
          return this._onaddstream;
        },
        set(f) {
          if (this._onaddstream) {
            this.removeEventListener("addstream", this._onaddstream);
            this.removeEventListener("track", this._onaddstreampoly);
          }
          this.addEventListener("addstream", this._onaddstream = f);
          this.addEventListener("track", this._onaddstreampoly = (e) => {
            e.streams.forEach((stream) => {
              if (!this._remoteStreams) {
                this._remoteStreams = [];
              }
              if (this._remoteStreams.includes(stream)) {
                return;
              }
              this._remoteStreams.push(stream);
              const event = new Event("addstream");
              event.stream = stream;
              this.dispatchEvent(event);
            });
          });
        }
      });
      const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
      window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
        const pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener("track", this._onaddstreampoly = function(e) {
            e.streams.forEach((stream) => {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              const event = new Event("addstream");
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  }
  function shimCallbacksAPI(window2) {
    if (typeof window2 !== "object" || !window2.RTCPeerConnection) {
      return;
    }
    const prototype = window2.RTCPeerConnection.prototype;
    const origCreateOffer = prototype.createOffer;
    const origCreateAnswer = prototype.createAnswer;
    const setLocalDescription = prototype.setLocalDescription;
    const setRemoteDescription = prototype.setRemoteDescription;
    const addIceCandidate = prototype.addIceCandidate;
    prototype.createOffer = function createOffer(successCallback, failureCallback) {
      const options = arguments.length >= 2 ? arguments[2] : arguments[0];
      const promise = origCreateOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
      const options = arguments.length >= 2 ? arguments[2] : arguments[0];
      const promise = origCreateAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    let withCallback = function(description, successCallback, failureCallback) {
      const promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;
    withCallback = function(description, successCallback, failureCallback) {
      const promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;
    withCallback = function(candidate, successCallback, failureCallback) {
      const promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  }
  function shimGetUserMedia3(window2) {
    const navigator2 = window2 && window2.navigator;
    if (navigator2.mediaDevices && navigator2.mediaDevices.getUserMedia) {
      const mediaDevices = navigator2.mediaDevices;
      const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
      navigator2.mediaDevices.getUserMedia = (constraints) => {
        return _getUserMedia(shimConstraints(constraints));
      };
    }
    if (!navigator2.getUserMedia && navigator2.mediaDevices && navigator2.mediaDevices.getUserMedia) {
      navigator2.getUserMedia = function getUserMedia(constraints, cb, errcb) {
        navigator2.mediaDevices.getUserMedia(constraints).then(cb, errcb);
      }.bind(navigator2);
    }
  }
  function shimConstraints(constraints) {
    if (constraints && constraints.video !== void 0) {
      return Object.assign(
        {},
        constraints,
        { video: compactObject(constraints.video) }
      );
    }
    return constraints;
  }
  function shimRTCIceServerUrls(window2) {
    if (!window2.RTCPeerConnection) {
      return;
    }
    const OrigPeerConnection = window2.RTCPeerConnection;
    window2.RTCPeerConnection = function RTCPeerConnection2(pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        const newIceServers = [];
        for (let i = 0; i < pcConfig.iceServers.length; i++) {
          let server = pcConfig.iceServers[i];
          if (server.urls === void 0 && server.url) {
            deprecated("RTCIceServer.url", "RTCIceServer.urls");
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window2.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    if ("generateCertificate" in OrigPeerConnection) {
      Object.defineProperty(window2.RTCPeerConnection, "generateCertificate", {
        get() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
  }
  function shimTrackEventTransceiver(window2) {
    if (typeof window2 === "object" && window2.RTCTrackEvent && "receiver" in window2.RTCTrackEvent.prototype && !("transceiver" in window2.RTCTrackEvent.prototype)) {
      Object.defineProperty(window2.RTCTrackEvent.prototype, "transceiver", {
        get() {
          return { receiver: this.receiver };
        }
      });
    }
  }
  function shimCreateOfferLegacy(window2) {
    const origCreateOffer = window2.RTCPeerConnection.prototype.createOffer;
    window2.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== "undefined") {
          offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
        }
        const audioTransceiver = this.getTransceivers().find((transceiver) => transceiver.receiver.track.kind === "audio");
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === "sendrecv") {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("sendonly");
            } else {
              audioTransceiver.direction = "sendonly";
            }
          } else if (audioTransceiver.direction === "recvonly") {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection("inactive");
            } else {
              audioTransceiver.direction = "inactive";
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
          this.addTransceiver("audio", { direction: "recvonly" });
        }
        if (typeof offerOptions.offerToReceiveVideo !== "undefined") {
          offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
        }
        const videoTransceiver = this.getTransceivers().find((transceiver) => transceiver.receiver.track.kind === "video");
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === "sendrecv") {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("sendonly");
            } else {
              videoTransceiver.direction = "sendonly";
            }
          } else if (videoTransceiver.direction === "recvonly") {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection("inactive");
            } else {
              videoTransceiver.direction = "inactive";
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
          this.addTransceiver("video", { direction: "recvonly" });
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
  }
  function shimAudioContext(window2) {
    if (typeof window2 !== "object" || window2.AudioContext) {
      return;
    }
    window2.AudioContext = window2.webkitAudioContext;
  }

  // node_modules/webrtc-adapter/src/js/common_shim.js
  var common_shim_exports = {};
  __export(common_shim_exports, {
    removeExtmapAllowMixed: () => removeExtmapAllowMixed,
    shimAddIceCandidateNullOrEmpty: () => shimAddIceCandidateNullOrEmpty,
    shimConnectionState: () => shimConnectionState,
    shimMaxMessageSize: () => shimMaxMessageSize,
    shimParameterlessSetLocalDescription: () => shimParameterlessSetLocalDescription,
    shimRTCIceCandidate: () => shimRTCIceCandidate,
    shimRTCIceCandidateRelayProtocol: () => shimRTCIceCandidateRelayProtocol,
    shimSendThrowTypeError: () => shimSendThrowTypeError
  });
  var import_sdp = __toESM(require_sdp());
  function shimRTCIceCandidate(window2) {
    if (!window2.RTCIceCandidate || window2.RTCIceCandidate && "foundation" in window2.RTCIceCandidate.prototype) {
      return;
    }
    const NativeRTCIceCandidate = window2.RTCIceCandidate;
    window2.RTCIceCandidate = function RTCIceCandidate(args) {
      if (typeof args === "object" && args.candidate && args.candidate.indexOf("a=") === 0) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substring(2);
      }
      if (args.candidate && args.candidate.length) {
        const nativeCandidate = new NativeRTCIceCandidate(args);
        const parsedCandidate = import_sdp.default.parseCandidate(args.candidate);
        for (const key in parsedCandidate) {
          if (!(key in nativeCandidate)) {
            Object.defineProperty(
              nativeCandidate,
              key,
              { value: parsedCandidate[key] }
            );
          }
        }
        nativeCandidate.toJSON = function toJSON() {
          return {
            candidate: nativeCandidate.candidate,
            sdpMid: nativeCandidate.sdpMid,
            sdpMLineIndex: nativeCandidate.sdpMLineIndex,
            usernameFragment: nativeCandidate.usernameFragment
          };
        };
        return nativeCandidate;
      }
      return new NativeRTCIceCandidate(args);
    };
    window2.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
    wrapPeerConnectionEvent(window2, "icecandidate", (e) => {
      if (e.candidate) {
        Object.defineProperty(e, "candidate", {
          value: new window2.RTCIceCandidate(e.candidate),
          writable: "false"
        });
      }
      return e;
    });
  }
  function shimRTCIceCandidateRelayProtocol(window2) {
    if (!window2.RTCIceCandidate || window2.RTCIceCandidate && "relayProtocol" in window2.RTCIceCandidate.prototype) {
      return;
    }
    wrapPeerConnectionEvent(window2, "icecandidate", (e) => {
      if (e.candidate) {
        const parsedCandidate = import_sdp.default.parseCandidate(e.candidate.candidate);
        if (parsedCandidate.type === "relay") {
          e.candidate.relayProtocol = {
            0: "tls",
            1: "tcp",
            2: "udp"
          }[parsedCandidate.priority >> 24];
        }
      }
      return e;
    });
  }
  function shimMaxMessageSize(window2, browserDetails) {
    if (!window2.RTCPeerConnection) {
      return;
    }
    if (browserDetails.browser === "chrome" && browserDetails.version > 102) {
      return;
    }
    if (browserDetails.browser === "firefox" && browserDetails.version >= 113) {
      return;
    }
    if (!("sctp" in window2.RTCPeerConnection.prototype)) {
      Object.defineProperty(window2.RTCPeerConnection.prototype, "sctp", {
        get() {
          return typeof this._sctp === "undefined" ? null : this._sctp;
        }
      });
    }
    const sctpInDescription = function(description) {
      if (!description || !description.sdp) {
        return false;
      }
      const sections = import_sdp.default.splitSections(description.sdp);
      sections.shift();
      return sections.some((mediaSection) => {
        const mLine = import_sdp.default.parseMLine(mediaSection);
        return mLine && mLine.kind === "application" && mLine.protocol.indexOf("SCTP") !== -1;
      });
    };
    const getRemoteFirefoxVersion = function(description) {
      const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (match === null || match.length < 2) {
        return -1;
      }
      const version = parseInt(match[1], 10);
      return version !== version ? -1 : version;
    };
    const getCanSendMaxMessageSize = function(remoteIsFirefox) {
      let canSendMaxMessageSize = 65536;
      if (browserDetails.browser === "firefox") {
        if (browserDetails.version < 57) {
          if (remoteIsFirefox === -1) {
            canSendMaxMessageSize = 16384;
          } else {
            canSendMaxMessageSize = 2147483637;
          }
        } else if (browserDetails.version < 60) {
          canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
        } else {
          canSendMaxMessageSize = 2147483637;
        }
      }
      return canSendMaxMessageSize;
    };
    const getMaxMessageSize = function(description, remoteIsFirefox) {
      let maxMessageSize = 65536;
      if (browserDetails.browser === "firefox" && browserDetails.version === 57) {
        maxMessageSize = 65535;
      }
      const match = import_sdp.default.matchPrefix(
        description.sdp,
        "a=max-message-size:"
      );
      if (match.length > 0) {
        maxMessageSize = parseInt(match[0].substring(19), 10);
      } else if (browserDetails.browser === "firefox" && remoteIsFirefox !== -1) {
        maxMessageSize = 2147483637;
      }
      return maxMessageSize;
    };
    const origSetRemoteDescription = window2.RTCPeerConnection.prototype.setRemoteDescription;
    window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      this._sctp = null;
      if (browserDetails.browser === "chrome" && browserDetails.version >= 76) {
        const { sdpSemantics } = this.getConfiguration();
        if (sdpSemantics === "plan-b") {
          Object.defineProperty(this, "sctp", {
            get() {
              return typeof this._sctp === "undefined" ? null : this._sctp;
            },
            enumerable: true,
            configurable: true
          });
        }
      }
      if (sctpInDescription(arguments[0])) {
        const isFirefox = getRemoteFirefoxVersion(arguments[0]);
        const canSendMMS = getCanSendMaxMessageSize(isFirefox);
        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
        let maxMessageSize;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }
        const sctp = {};
        Object.defineProperty(sctp, "maxMessageSize", {
          get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  }
  function shimSendThrowTypeError(window2, browserDetails) {
    if (!(window2.RTCPeerConnection && "createDataChannel" in window2.RTCPeerConnection.prototype)) {
      return;
    }
    if (browserDetails.browser === "chrome" && browserDetails.version >= 149) {
      return;
    }
    if (browserDetails.browser === "firefox" && browserDetails.version > 60) {
      return;
    }
    function wrapDcSend(dc, pc) {
      const origDataChannelSend = dc.send;
      dc.send = function send() {
        const data = arguments[0];
        const length = data.length || data.size || data.byteLength;
        if (dc.readyState === "open" && pc.sctp && length > pc.sctp.maxMessageSize) {
          throw new TypeError("Message too large (can send a maximum of " + pc.sctp.maxMessageSize + " bytes)");
        }
        return origDataChannelSend.apply(dc, arguments);
      };
    }
    const origCreateDataChannel = window2.RTCPeerConnection.prototype.createDataChannel;
    window2.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
      const dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
    wrapPeerConnectionEvent(window2, "datachannel", (e) => {
      wrapDcSend(e.channel, e.target);
      return e;
    });
  }
  function shimConnectionState(window2) {
    if (!window2.RTCPeerConnection || "connectionState" in window2.RTCPeerConnection.prototype) {
      return;
    }
    const proto = window2.RTCPeerConnection.prototype;
    Object.defineProperty(proto, "connectionState", {
      get() {
        return {
          completed: "connected",
          checking: "connecting"
        }[this.iceConnectionState] || this.iceConnectionState;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(proto, "onconnectionstatechange", {
      get() {
        return this._onconnectionstatechange || null;
      },
      set(cb) {
        if (this._onconnectionstatechange) {
          this.removeEventListener(
            "connectionstatechange",
            this._onconnectionstatechange
          );
          delete this._onconnectionstatechange;
        }
        if (cb) {
          this.addEventListener(
            "connectionstatechange",
            this._onconnectionstatechange = cb
          );
        }
      },
      enumerable: true,
      configurable: true
    });
    ["setLocalDescription", "setRemoteDescription"].forEach((method) => {
      const origMethod = proto[method];
      proto[method] = function() {
        if (!this._connectionstatechangepoly) {
          this._connectionstatechangepoly = (e) => {
            const pc = e.target;
            if (pc._lastConnectionState !== pc.connectionState) {
              pc._lastConnectionState = pc.connectionState;
              const newEvent = new Event("connectionstatechange", e);
              pc.dispatchEvent(newEvent);
            }
            return e;
          };
          this.addEventListener(
            "iceconnectionstatechange",
            this._connectionstatechangepoly
          );
        }
        return origMethod.apply(this, arguments);
      };
    });
  }
  function removeExtmapAllowMixed(window2, browserDetails) {
    if (!window2.RTCPeerConnection) {
      return;
    }
    if (browserDetails.browser === "chrome" && browserDetails.version >= 71) {
      return;
    }
    if (browserDetails.browser === "safari" && browserDetails._safariVersion >= 13.1) {
      return;
    }
    const nativeSRD = window2.RTCPeerConnection.prototype.setRemoteDescription;
    window2.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
      if (desc && desc.sdp && desc.sdp.indexOf("\na=extmap-allow-mixed") !== -1) {
        const sdp2 = desc.sdp.split("\n").filter((line) => {
          return line.trim() !== "a=extmap-allow-mixed";
        }).join("\n");
        if (window2.RTCSessionDescription && desc instanceof window2.RTCSessionDescription) {
          arguments[0] = new window2.RTCSessionDescription({
            type: desc.type,
            sdp: sdp2
          });
        } else {
          desc.sdp = sdp2;
        }
      }
      return nativeSRD.apply(this, arguments);
    };
  }
  function shimAddIceCandidateNullOrEmpty(window2, browserDetails) {
    if (!(window2.RTCPeerConnection && window2.RTCPeerConnection.prototype)) {
      return;
    }
    const nativeAddIceCandidate = window2.RTCPeerConnection.prototype.addIceCandidate;
    if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
      return;
    }
    window2.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      if ((browserDetails.browser === "chrome" && browserDetails.version < 78 || browserDetails.browser === "firefox" && browserDetails.version < 68 || browserDetails.browser === "safari") && arguments[0] && arguments[0].candidate === "") {
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }
  function shimParameterlessSetLocalDescription(window2, browserDetails) {
    if (!(window2.RTCPeerConnection && window2.RTCPeerConnection.prototype)) {
      return;
    }
    const nativeSetLocalDescription = window2.RTCPeerConnection.prototype.setLocalDescription;
    if (!nativeSetLocalDescription || nativeSetLocalDescription.length === 0) {
      return;
    }
    window2.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
      let desc = arguments[0] || {};
      if (typeof desc !== "object" || desc.type && desc.sdp) {
        return nativeSetLocalDescription.apply(this, arguments);
      }
      desc = { type: desc.type, sdp: desc.sdp };
      if (!desc.type) {
        switch (this.signalingState) {
          case "stable":
          case "have-local-offer":
          case "have-remote-pranswer":
            desc.type = "offer";
            break;
          default:
            desc.type = "answer";
            break;
        }
      }
      if (desc.sdp || desc.type !== "offer" && desc.type !== "answer") {
        return nativeSetLocalDescription.apply(this, [desc]);
      }
      const func = desc.type === "offer" ? this.createOffer : this.createAnswer;
      return func.apply(this).then((d) => nativeSetLocalDescription.apply(this, [d]));
    };
  }

  // node_modules/webrtc-adapter/src/js/adapter_factory.js
  var sdp = __toESM(require_sdp());
  function adapterFactory({ window: window2 } = {}, options = {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
  }) {
    const logging2 = log;
    const browserDetails = detectBrowser(window2);
    const adapter2 = {
      browserDetails,
      commonShim: common_shim_exports,
      extractVersion,
      disableLog,
      disableWarnings,
      // Expose sdp as a convenience. For production apps include directly.
      sdp
    };
    switch (browserDetails.browser) {
      case "chrome":
        if (!chrome_shim_exports || !shimPeerConnection || !options.shimChrome) {
          logging2("Chrome shim is not included in this adapter release.");
          return adapter2;
        }
        if (browserDetails.version === null) {
          logging2("Chrome shim can not determine version, not shimming.");
          return adapter2;
        }
        logging2("adapter.js shimming chrome.");
        adapter2.browserShim = chrome_shim_exports;
        shimAddIceCandidateNullOrEmpty(window2, browserDetails);
        shimParameterlessSetLocalDescription(window2, browserDetails);
        shimGetUserMedia(window2, browserDetails);
        shimMediaStream(window2, browserDetails);
        shimPeerConnection(window2, browserDetails);
        shimOnTrack(window2, browserDetails);
        shimAddTrackRemoveTrack(window2, browserDetails);
        shimGetSendersWithDtmf(window2, browserDetails);
        shimSenderReceiverGetStats(window2, browserDetails);
        fixNegotiationNeeded(window2, browserDetails);
        shimRTCIceCandidate(window2, browserDetails);
        shimRTCIceCandidateRelayProtocol(window2, browserDetails);
        shimConnectionState(window2, browserDetails);
        shimMaxMessageSize(window2, browserDetails);
        shimSendThrowTypeError(window2, browserDetails);
        removeExtmapAllowMixed(window2, browserDetails);
        break;
      case "firefox":
        if (!firefox_shim_exports || !shimPeerConnection2 || !options.shimFirefox) {
          logging2("Firefox shim is not included in this adapter release.");
          return adapter2;
        }
        logging2("adapter.js shimming firefox.");
        adapter2.browserShim = firefox_shim_exports;
        shimAddIceCandidateNullOrEmpty(window2, browserDetails);
        shimParameterlessSetLocalDescription(window2, browserDetails);
        shimGetUserMedia2(window2, browserDetails);
        shimPeerConnection2(window2, browserDetails);
        shimGetStats(window2, browserDetails);
        shimOnTrack2(window2, browserDetails);
        shimRemoveStream(window2, browserDetails);
        shimSenderGetStats(window2, browserDetails);
        shimReceiverGetStats(window2, browserDetails);
        shimRTCDataChannel(window2, browserDetails);
        shimAddTransceiver(window2, browserDetails);
        shimGetParameters(window2, browserDetails);
        shimCreateOffer(window2, browserDetails);
        shimCreateAnswer(window2, browserDetails);
        shimRTCIceCandidate(window2, browserDetails);
        shimConnectionState(window2, browserDetails);
        shimMaxMessageSize(window2, browserDetails);
        shimSendThrowTypeError(window2, browserDetails);
        break;
      case "safari":
        if (!safari_shim_exports || !options.shimSafari) {
          logging2("Safari shim is not included in this adapter release.");
          return adapter2;
        }
        logging2("adapter.js shimming safari.");
        adapter2.browserShim = safari_shim_exports;
        shimAddIceCandidateNullOrEmpty(window2, browserDetails);
        shimParameterlessSetLocalDescription(window2, browserDetails);
        shimRTCIceServerUrls(window2, browserDetails);
        shimCreateOfferLegacy(window2, browserDetails);
        shimCallbacksAPI(window2, browserDetails);
        shimLocalStreamsAPI(window2, browserDetails);
        shimRemoteStreamsAPI(window2, browserDetails);
        shimTrackEventTransceiver(window2, browserDetails);
        shimGetUserMedia3(window2, browserDetails);
        shimAudioContext(window2, browserDetails);
        shimRTCIceCandidate(window2, browserDetails);
        shimRTCIceCandidateRelayProtocol(window2, browserDetails);
        shimMaxMessageSize(window2, browserDetails);
        shimSendThrowTypeError(window2, browserDetails);
        removeExtmapAllowMixed(window2, browserDetails);
        break;
      default:
        logging2("Unsupported browser!");
        break;
    }
    return adapter2;
  }

  // node_modules/webrtc-adapter/src/js/adapter_core.js
  var adapter = adapterFactory({ window: typeof window === "undefined" ? void 0 : window });
  var adapter_core_default = adapter;

  // node_modules/peerjs/dist/bundler.mjs
  function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
  }
  var $fcbcc7538a6776d5$export$f1c5f4c9cb95390b = class {
    constructor() {
      this.chunkedMTU = 16300;
      this._dataCount = 1;
      this.chunk = (blob) => {
        const chunks = [];
        const size = blob.byteLength;
        const total = Math.ceil(size / this.chunkedMTU);
        let index = 0;
        let start2 = 0;
        while (start2 < size) {
          const end = Math.min(size, start2 + this.chunkedMTU);
          const b = blob.slice(start2, end);
          const chunk = {
            __peerData: this._dataCount,
            n: index,
            data: b,
            total
          };
          chunks.push(chunk);
          start2 = end;
          index++;
        }
        this._dataCount++;
        return chunks;
      };
    }
  };
  function $fcbcc7538a6776d5$export$52c89ebcdc4f53f2(bufs) {
    let size = 0;
    for (const buf of bufs) size += buf.byteLength;
    const result = new Uint8Array(size);
    let offset = 0;
    for (const buf of bufs) {
      result.set(buf, offset);
      offset += buf.byteLength;
    }
    return result;
  }
  var $fb63e766cfafaab9$var$webRTCAdapter = (
    //@ts-ignore
    (0, adapter_core_default).default || (0, adapter_core_default)
  );
  var $fb63e766cfafaab9$export$25be9502477c137d = new class {
    isWebRTCSupported() {
      return typeof RTCPeerConnection !== "undefined";
    }
    isBrowserSupported() {
      const browser = this.getBrowser();
      const version = this.getVersion();
      const validBrowser = this.supportedBrowsers.includes(browser);
      if (!validBrowser) return false;
      if (browser === "chrome") return version >= this.minChromeVersion;
      if (browser === "firefox") return version >= this.minFirefoxVersion;
      if (browser === "safari") return !this.isIOS && version >= this.minSafariVersion;
      return false;
    }
    getBrowser() {
      return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.browser;
    }
    getVersion() {
      return $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
    }
    isUnifiedPlanSupported() {
      const browser = this.getBrowser();
      const version = $fb63e766cfafaab9$var$webRTCAdapter.browserDetails.version || 0;
      if (browser === "chrome" && version < this.minChromeVersion) return false;
      if (browser === "firefox" && version >= this.minFirefoxVersion) return true;
      if (!window.RTCRtpTransceiver || !("currentDirection" in RTCRtpTransceiver.prototype)) return false;
      let tempPc;
      let supported = false;
      try {
        tempPc = new RTCPeerConnection();
        tempPc.addTransceiver("audio");
        supported = true;
      } catch (e) {
      } finally {
        if (tempPc) tempPc.close();
      }
      return supported;
    }
    toString() {
      return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`;
    }
    constructor() {
      this.isIOS = typeof navigator !== "undefined" ? [
        "iPad",
        "iPhone",
        "iPod"
      ].includes(navigator.platform) : false;
      this.supportedBrowsers = [
        "firefox",
        "chrome",
        "safari"
      ];
      this.minFirefoxVersion = 59;
      this.minChromeVersion = 72;
      this.minSafariVersion = 605;
    }
  }();
  var $9a84a32bf0bf36bb$export$f35f128fd59ea256 = (id) => {
    return !id || /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(id);
  };
  var $0e5fd1585784c252$export$4e61f672936bec77 = () => Math.random().toString(36).slice(2);
  var $4f4134156c446392$var$DEFAULT_CONFIG = {
    iceServers: [
      {
        urls: "stun:stun.l.google.com:19302"
      },
      {
        urls: [
          "turn:eu-0.turn.peerjs.com:3478",
          "turn:us-0.turn.peerjs.com:3478"
        ],
        username: "peerjs",
        credential: "peerjsp"
      }
    ],
    sdpSemantics: "unified-plan"
  };
  var $4f4134156c446392$export$f8f26dd395d7e1bd = class extends (0, $fcbcc7538a6776d5$export$f1c5f4c9cb95390b) {
    noop() {
    }
    blobToArrayBuffer(blob, cb) {
      const fr = new FileReader();
      fr.onload = function(evt) {
        if (evt.target) cb(evt.target.result);
      };
      fr.readAsArrayBuffer(blob);
      return fr;
    }
    binaryStringToArrayBuffer(binary) {
      const byteArray = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) byteArray[i] = binary.charCodeAt(i) & 255;
      return byteArray.buffer;
    }
    isSecure() {
      return location.protocol === "https:";
    }
    constructor(...args) {
      super(...args);
      this.CLOUD_HOST = "0.peerjs.com";
      this.CLOUD_PORT = 443;
      this.chunkedBrowsers = {
        Chrome: 1,
        chrome: 1
      };
      this.defaultConfig = $4f4134156c446392$var$DEFAULT_CONFIG;
      this.browser = (0, $fb63e766cfafaab9$export$25be9502477c137d).getBrowser();
      this.browserVersion = (0, $fb63e766cfafaab9$export$25be9502477c137d).getVersion();
      this.pack = $0cfd7828ad59115f$export$2a703dbb0cb35339;
      this.unpack = $0cfd7828ad59115f$export$417857010dc9287f;
      this.supports = (function() {
        const supported = {
          browser: (0, $fb63e766cfafaab9$export$25be9502477c137d).isBrowserSupported(),
          webRTC: (0, $fb63e766cfafaab9$export$25be9502477c137d).isWebRTCSupported(),
          audioVideo: false,
          data: false,
          binaryBlob: false,
          reliable: false
        };
        if (!supported.webRTC) return supported;
        let pc;
        try {
          pc = new RTCPeerConnection($4f4134156c446392$var$DEFAULT_CONFIG);
          supported.audioVideo = true;
          let dc;
          try {
            dc = pc.createDataChannel("_PEERJSTEST", {
              ordered: true
            });
            supported.data = true;
            supported.reliable = !!dc.ordered;
            try {
              dc.binaryType = "blob";
              supported.binaryBlob = !(0, $fb63e766cfafaab9$export$25be9502477c137d).isIOS;
            } catch (e) {
            }
          } catch (e) {
          } finally {
            if (dc) dc.close();
          }
        } catch (e) {
        } finally {
          if (pc) pc.close();
        }
        return supported;
      })();
      this.validateId = (0, $9a84a32bf0bf36bb$export$f35f128fd59ea256);
      this.randomToken = (0, $0e5fd1585784c252$export$4e61f672936bec77);
    }
  };
  var $4f4134156c446392$export$7debb50ef11d5e0b = new $4f4134156c446392$export$f8f26dd395d7e1bd();
  var $257947e92926277a$var$LOG_PREFIX = "PeerJS: ";
  var $257947e92926277a$export$243e62d78d3b544d;
  (function(LogLevel) {
    LogLevel[LogLevel["Disabled"] = 0] = "Disabled";
    LogLevel[LogLevel["Errors"] = 1] = "Errors";
    LogLevel[LogLevel["Warnings"] = 2] = "Warnings";
    LogLevel[LogLevel["All"] = 3] = "All";
  })($257947e92926277a$export$243e62d78d3b544d || ($257947e92926277a$export$243e62d78d3b544d = {}));
  var $257947e92926277a$var$Logger = class {
    get logLevel() {
      return this._logLevel;
    }
    set logLevel(logLevel) {
      this._logLevel = logLevel;
    }
    log(...args) {
      if (this._logLevel >= 3) this._print(3, ...args);
    }
    warn(...args) {
      if (this._logLevel >= 2) this._print(2, ...args);
    }
    error(...args) {
      if (this._logLevel >= 1) this._print(1, ...args);
    }
    setLogFunction(fn) {
      this._print = fn;
    }
    _print(logLevel, ...rest) {
      const copy = [
        $257947e92926277a$var$LOG_PREFIX,
        ...rest
      ];
      for (const i in copy) if (copy[i] instanceof Error) copy[i] = "(" + copy[i].name + ") " + copy[i].message;
      if (logLevel >= 3) console.log(...copy);
      else if (logLevel >= 2) console.warn("WARNING", ...copy);
      else if (logLevel >= 1) console.error("ERROR", ...copy);
    }
    constructor() {
      this._logLevel = 0;
    }
  };
  var $257947e92926277a$export$2e2bcd8739ae039 = new $257947e92926277a$var$Logger();
  var $c4dcfd1d1ea86647$exports = {};
  var $c4dcfd1d1ea86647$var$has = Object.prototype.hasOwnProperty;
  var $c4dcfd1d1ea86647$var$prefix = "~";
  function $c4dcfd1d1ea86647$var$Events() {
  }
  if (Object.create) {
    $c4dcfd1d1ea86647$var$Events.prototype = /* @__PURE__ */ Object.create(null);
    if (!new $c4dcfd1d1ea86647$var$Events().__proto__) $c4dcfd1d1ea86647$var$prefix = false;
  }
  function $c4dcfd1d1ea86647$var$EE(fn, context, once2) {
    this.fn = fn;
    this.context = context;
    this.once = once2 || false;
  }
  function $c4dcfd1d1ea86647$var$addListener(emitter, event, fn, context, once2) {
    if (typeof fn !== "function") throw new TypeError("The listener must be a function");
    var listener = new $c4dcfd1d1ea86647$var$EE(fn, context || emitter, once2), evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
      emitter._events[evt],
      listener
    ];
    return emitter;
  }
  function $c4dcfd1d1ea86647$var$clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new $c4dcfd1d1ea86647$var$Events();
    else delete emitter._events[evt];
  }
  function $c4dcfd1d1ea86647$var$EventEmitter() {
    this._events = new $c4dcfd1d1ea86647$var$Events();
    this._eventsCount = 0;
  }
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for (name in events = this._events) if ($c4dcfd1d1ea86647$var$has.call(events, name)) names.push($c4dcfd1d1ea86647$var$prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.listeners = function listeners2(event) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
      handlers.fn
    ];
    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) ee[i] = handlers[i].fn;
    return ee;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event, listeners3 = this._events[evt];
    if (!listeners3) return 0;
    if (listeners3.fn) return 1;
    return listeners3.length;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.emit = function emit2(event, a1, a2, a3, a4, a5) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners3 = this._events[evt], len = arguments.length, args, i;
    if (listeners3.fn) {
      if (listeners3.once) this.removeListener(event, listeners3.fn, void 0, true);
      switch (len) {
        case 1:
          return listeners3.fn.call(listeners3.context), true;
        case 2:
          return listeners3.fn.call(listeners3.context, a1), true;
        case 3:
          return listeners3.fn.call(listeners3.context, a1, a2), true;
        case 4:
          return listeners3.fn.call(listeners3.context, a1, a2, a3), true;
        case 5:
          return listeners3.fn.call(listeners3.context, a1, a2, a3, a4), true;
        case 6:
          return listeners3.fn.call(listeners3.context, a1, a2, a3, a4, a5), true;
      }
      for (i = 1, args = new Array(len - 1); i < len; i++) args[i - 1] = arguments[i];
      listeners3.fn.apply(listeners3.context, args);
    } else {
      var length = listeners3.length, j;
      for (i = 0; i < length; i++) {
        if (listeners3[i].once) this.removeListener(event, listeners3[i].fn, void 0, true);
        switch (len) {
          case 1:
            listeners3[i].fn.call(listeners3[i].context);
            break;
          case 2:
            listeners3[i].fn.call(listeners3[i].context, a1);
            break;
          case 3:
            listeners3[i].fn.call(listeners3[i].context, a1, a2);
            break;
          case 4:
            listeners3[i].fn.call(listeners3[i].context, a1, a2, a3);
            break;
          default:
            if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) args[j - 1] = arguments[j];
            listeners3[i].fn.apply(listeners3[i].context, args);
        }
      }
    }
    return true;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.on = function on(event, fn, context) {
    return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, false);
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.once = function once(event, fn, context) {
    return $c4dcfd1d1ea86647$var$addListener(this, event, fn, context, true);
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once2) {
    var evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
      $c4dcfd1d1ea86647$var$clearEvent(this, evt);
      return this;
    }
    var listeners3 = this._events[evt];
    if (listeners3.fn) {
      if (listeners3.fn === fn && (!once2 || listeners3.once) && (!context || listeners3.context === context)) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    } else {
      for (var i = 0, events = [], length = listeners3.length; i < length; i++) if (listeners3[i].fn !== fn || once2 && !listeners3[i].once || context && listeners3[i].context !== context) events.push(listeners3[i]);
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    }
    return this;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
      evt = $c4dcfd1d1ea86647$var$prefix ? $c4dcfd1d1ea86647$var$prefix + event : event;
      if (this._events[evt]) $c4dcfd1d1ea86647$var$clearEvent(this, evt);
    } else {
      this._events = new $c4dcfd1d1ea86647$var$Events();
      this._eventsCount = 0;
    }
    return this;
  };
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.off = $c4dcfd1d1ea86647$var$EventEmitter.prototype.removeListener;
  $c4dcfd1d1ea86647$var$EventEmitter.prototype.addListener = $c4dcfd1d1ea86647$var$EventEmitter.prototype.on;
  $c4dcfd1d1ea86647$var$EventEmitter.prefixed = $c4dcfd1d1ea86647$var$prefix;
  $c4dcfd1d1ea86647$var$EventEmitter.EventEmitter = $c4dcfd1d1ea86647$var$EventEmitter;
  $c4dcfd1d1ea86647$exports = $c4dcfd1d1ea86647$var$EventEmitter;
  var $78455e22dea96b8c$exports = {};
  $parcel$export($78455e22dea96b8c$exports, "ConnectionType", () => $78455e22dea96b8c$export$3157d57b4135e3bc);
  $parcel$export($78455e22dea96b8c$exports, "PeerErrorType", () => $78455e22dea96b8c$export$9547aaa2e39030ff);
  $parcel$export($78455e22dea96b8c$exports, "BaseConnectionErrorType", () => $78455e22dea96b8c$export$7974935686149686);
  $parcel$export($78455e22dea96b8c$exports, "DataConnectionErrorType", () => $78455e22dea96b8c$export$49ae800c114df41d);
  $parcel$export($78455e22dea96b8c$exports, "SerializationType", () => $78455e22dea96b8c$export$89f507cf986a947);
  $parcel$export($78455e22dea96b8c$exports, "SocketEventType", () => $78455e22dea96b8c$export$3b5c4a4b6354f023);
  $parcel$export($78455e22dea96b8c$exports, "ServerMessageType", () => $78455e22dea96b8c$export$adb4a1754da6f10d);
  var $78455e22dea96b8c$export$3157d57b4135e3bc;
  (function(ConnectionType) {
    ConnectionType["Data"] = "data";
    ConnectionType["Media"] = "media";
  })($78455e22dea96b8c$export$3157d57b4135e3bc || ($78455e22dea96b8c$export$3157d57b4135e3bc = {}));
  var $78455e22dea96b8c$export$9547aaa2e39030ff;
  (function(PeerErrorType) {
    PeerErrorType["BrowserIncompatible"] = "browser-incompatible";
    PeerErrorType["Disconnected"] = "disconnected";
    PeerErrorType["InvalidID"] = "invalid-id";
    PeerErrorType["InvalidKey"] = "invalid-key";
    PeerErrorType["Network"] = "network";
    PeerErrorType["PeerUnavailable"] = "peer-unavailable";
    PeerErrorType["SslUnavailable"] = "ssl-unavailable";
    PeerErrorType["ServerError"] = "server-error";
    PeerErrorType["SocketError"] = "socket-error";
    PeerErrorType["SocketClosed"] = "socket-closed";
    PeerErrorType["UnavailableID"] = "unavailable-id";
    PeerErrorType["WebRTC"] = "webrtc";
  })($78455e22dea96b8c$export$9547aaa2e39030ff || ($78455e22dea96b8c$export$9547aaa2e39030ff = {}));
  var $78455e22dea96b8c$export$7974935686149686;
  (function(BaseConnectionErrorType) {
    BaseConnectionErrorType["NegotiationFailed"] = "negotiation-failed";
    BaseConnectionErrorType["ConnectionClosed"] = "connection-closed";
  })($78455e22dea96b8c$export$7974935686149686 || ($78455e22dea96b8c$export$7974935686149686 = {}));
  var $78455e22dea96b8c$export$49ae800c114df41d;
  (function(DataConnectionErrorType) {
    DataConnectionErrorType["NotOpenYet"] = "not-open-yet";
    DataConnectionErrorType["MessageToBig"] = "message-too-big";
  })($78455e22dea96b8c$export$49ae800c114df41d || ($78455e22dea96b8c$export$49ae800c114df41d = {}));
  var $78455e22dea96b8c$export$89f507cf986a947;
  (function(SerializationType) {
    SerializationType["Binary"] = "binary";
    SerializationType["BinaryUTF8"] = "binary-utf8";
    SerializationType["JSON"] = "json";
    SerializationType["None"] = "raw";
  })($78455e22dea96b8c$export$89f507cf986a947 || ($78455e22dea96b8c$export$89f507cf986a947 = {}));
  var $78455e22dea96b8c$export$3b5c4a4b6354f023;
  (function(SocketEventType) {
    SocketEventType["Message"] = "message";
    SocketEventType["Disconnected"] = "disconnected";
    SocketEventType["Error"] = "error";
    SocketEventType["Close"] = "close";
  })($78455e22dea96b8c$export$3b5c4a4b6354f023 || ($78455e22dea96b8c$export$3b5c4a4b6354f023 = {}));
  var $78455e22dea96b8c$export$adb4a1754da6f10d;
  (function(ServerMessageType) {
    ServerMessageType["Heartbeat"] = "HEARTBEAT";
    ServerMessageType["Candidate"] = "CANDIDATE";
    ServerMessageType["Offer"] = "OFFER";
    ServerMessageType["Answer"] = "ANSWER";
    ServerMessageType["Open"] = "OPEN";
    ServerMessageType["Error"] = "ERROR";
    ServerMessageType["IdTaken"] = "ID-TAKEN";
    ServerMessageType["InvalidKey"] = "INVALID-KEY";
    ServerMessageType["Leave"] = "LEAVE";
    ServerMessageType["Expire"] = "EXPIRE";
  })($78455e22dea96b8c$export$adb4a1754da6f10d || ($78455e22dea96b8c$export$adb4a1754da6f10d = {}));
  var $f5f881ec4575f1fc$exports = {};
  $f5f881ec4575f1fc$exports = JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');
  var $8f5bfa60836d261d$export$4798917dbf149b79 = class extends (0, $c4dcfd1d1ea86647$exports.EventEmitter) {
    constructor(secure, host, port, path, key, pingInterval = 5e3) {
      super();
      this.pingInterval = pingInterval;
      this._disconnected = true;
      this._messagesQueue = [];
      const wsProtocol = secure ? "wss://" : "ws://";
      this._baseUrl = wsProtocol + host + ":" + port + path + "peerjs?key=" + key;
    }
    start(id, token) {
      this._id = id;
      const wsUrl = `${this._baseUrl}&id=${id}&token=${token}`;
      if (!!this._socket || !this._disconnected) return;
      this._socket = new WebSocket(wsUrl + "&version=" + (0, $f5f881ec4575f1fc$exports.version));
      this._disconnected = false;
      this._socket.onmessage = (event) => {
        let data;
        try {
          data = JSON.parse(event.data);
          (0, $257947e92926277a$export$2e2bcd8739ae039).log("Server message received:", data);
        } catch (e) {
          (0, $257947e92926277a$export$2e2bcd8739ae039).log("Invalid server message", event.data);
          return;
        }
        this.emit((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Message, data);
      };
      this._socket.onclose = (event) => {
        if (this._disconnected) return;
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Socket closed.", event);
        this._cleanup();
        this._disconnected = true;
        this.emit((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Disconnected);
      };
      this._socket.onopen = () => {
        if (this._disconnected) return;
        this._sendQueuedMessages();
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Socket open");
        this._scheduleHeartbeat();
      };
    }
    _scheduleHeartbeat() {
      this._wsPingTimer = setTimeout(() => {
        this._sendHeartbeat();
      }, this.pingInterval);
    }
    _sendHeartbeat() {
      if (!this._wsOpen()) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Cannot send heartbeat, because socket closed`);
        return;
      }
      const message = JSON.stringify({
        type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Heartbeat
      });
      this._socket.send(message);
      this._scheduleHeartbeat();
    }
    /** Is the websocket currently open? */
    _wsOpen() {
      return !!this._socket && this._socket.readyState === 1;
    }
    /** Send queued messages. */
    _sendQueuedMessages() {
      const copiedQueue = [
        ...this._messagesQueue
      ];
      this._messagesQueue = [];
      for (const message of copiedQueue) this.send(message);
    }
    /** Exposed send for DC & Peer. */
    send(data) {
      if (this._disconnected) return;
      if (!this._id) {
        this._messagesQueue.push(data);
        return;
      }
      if (!data.type) {
        this.emit((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Error, "Invalid message");
        return;
      }
      if (!this._wsOpen()) return;
      const message = JSON.stringify(data);
      this._socket.send(message);
    }
    close() {
      if (this._disconnected) return;
      this._cleanup();
      this._disconnected = true;
    }
    _cleanup() {
      if (this._socket) {
        this._socket.onopen = this._socket.onmessage = this._socket.onclose = null;
        this._socket.close();
        this._socket = void 0;
      }
      clearTimeout(this._wsPingTimer);
    }
  };
  var $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a = class {
    constructor(connection) {
      this.connection = connection;
    }
    /** Returns a PeerConnection object set up correctly (for data, media). */
    startConnection(options) {
      const peerConnection = this._startPeerConnection();
      this.connection.peerConnection = peerConnection;
      if (this.connection.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Media && options._stream) this._addTracksToConnection(options._stream, peerConnection);
      if (options.originator) {
        const dataConnection = this.connection;
        const config = {
          ordered: !!options.reliable
        };
        const dataChannel = peerConnection.createDataChannel(dataConnection.label, config);
        dataConnection._initializeDataChannel(dataChannel);
        this._makeOffer();
      } else this.handleSDP("OFFER", options.sdp);
    }
    /** Start a PC. */
    _startPeerConnection() {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Creating RTCPeerConnection.");
      const peerConnection = new RTCPeerConnection(this.connection.provider.options.config);
      this._setupListeners(peerConnection);
      return peerConnection;
    }
    /** Set up various WebRTC listeners. */
    _setupListeners(peerConnection) {
      const peerId = this.connection.peer;
      const connectionId = this.connection.connectionId;
      const connectionType = this.connection.type;
      const provider = this.connection.provider;
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Listening for ICE candidates.");
      peerConnection.onicecandidate = (evt) => {
        if (!evt.candidate || !evt.candidate.candidate) return;
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Received ICE candidates for ${peerId}:`, evt.candidate);
        provider.socket.send({
          type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Candidate,
          payload: {
            candidate: evt.candidate,
            type: connectionType,
            connectionId
          },
          dst: peerId
        });
      };
      peerConnection.oniceconnectionstatechange = () => {
        switch (peerConnection.iceConnectionState) {
          case "failed":
            (0, $257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState is failed, closing connections to " + peerId);
            this.connection.emitError((0, $78455e22dea96b8c$export$7974935686149686).NegotiationFailed, "Negotiation of connection to " + peerId + " failed.");
            this.connection.close();
            break;
          case "closed":
            (0, $257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState is closed, closing connections to " + peerId);
            this.connection.emitError((0, $78455e22dea96b8c$export$7974935686149686).ConnectionClosed, "Connection to " + peerId + " closed.");
            this.connection.close();
            break;
          case "disconnected":
            (0, $257947e92926277a$export$2e2bcd8739ae039).log("iceConnectionState changed to disconnected on the connection with " + peerId);
            break;
          case "completed":
            peerConnection.onicecandidate = () => {
            };
            break;
        }
        this.connection.emit("iceStateChanged", peerConnection.iceConnectionState);
      };
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Listening for data channel");
      peerConnection.ondatachannel = (evt) => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Received data channel");
        const dataChannel = evt.channel;
        const connection = provider.getConnection(peerId, connectionId);
        connection._initializeDataChannel(dataChannel);
      };
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Listening for remote stream");
      peerConnection.ontrack = (evt) => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Received remote stream");
        const stream = evt.streams[0];
        const connection = provider.getConnection(peerId, connectionId);
        if (connection.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Media) {
          const mediaConnection = connection;
          this._addStreamToMediaConnection(stream, mediaConnection);
        }
      };
    }
    cleanup() {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Cleaning up PeerConnection to " + this.connection.peer);
      const peerConnection = this.connection.peerConnection;
      if (!peerConnection) return;
      this.connection.peerConnection = null;
      peerConnection.onicecandidate = peerConnection.oniceconnectionstatechange = peerConnection.ondatachannel = peerConnection.ontrack = () => {
      };
      const peerConnectionNotClosed = peerConnection.signalingState !== "closed";
      let dataChannelNotClosed = false;
      const dataChannel = this.connection.dataChannel;
      if (dataChannel) dataChannelNotClosed = !!dataChannel.readyState && dataChannel.readyState !== "closed";
      if (peerConnectionNotClosed || dataChannelNotClosed) peerConnection.close();
    }
    async _makeOffer() {
      const peerConnection = this.connection.peerConnection;
      const provider = this.connection.provider;
      try {
        const offer = await peerConnection.createOffer(this.connection.options.constraints);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Created offer.");
        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") offer.sdp = this.connection.options.sdpTransform(offer.sdp) || offer.sdp;
        try {
          await peerConnection.setLocalDescription(offer);
          (0, $257947e92926277a$export$2e2bcd8739ae039).log("Set localDescription:", offer, `for:${this.connection.peer}`);
          let payload = {
            sdp: offer,
            type: this.connection.type,
            connectionId: this.connection.connectionId,
            metadata: this.connection.metadata
          };
          if (this.connection.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Data) {
            const dataConnection = this.connection;
            payload = {
              ...payload,
              label: dataConnection.label,
              reliable: dataConnection.reliable,
              serialization: dataConnection.serialization
            };
          }
          provider.socket.send({
            type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Offer,
            payload,
            dst: this.connection.peer
          });
        } catch (err) {
          if (err != "OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer") {
            provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
            (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to setLocalDescription, ", err);
          }
        }
      } catch (err_1) {
        provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err_1);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to createOffer, ", err_1);
      }
    }
    async _makeAnswer() {
      const peerConnection = this.connection.peerConnection;
      const provider = this.connection.provider;
      try {
        const answer = await peerConnection.createAnswer();
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Created answer.");
        if (this.connection.options.sdpTransform && typeof this.connection.options.sdpTransform === "function") answer.sdp = this.connection.options.sdpTransform(answer.sdp) || answer.sdp;
        try {
          await peerConnection.setLocalDescription(answer);
          (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Set localDescription:`, answer, `for:${this.connection.peer}`);
          provider.socket.send({
            type: (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Answer,
            payload: {
              sdp: answer,
              type: this.connection.type,
              connectionId: this.connection.connectionId
            },
            dst: this.connection.peer
          });
        } catch (err) {
          provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
          (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to setLocalDescription, ", err);
        }
      } catch (err_1) {
        provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err_1);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to create answer, ", err_1);
      }
    }
    /** Handle an SDP. */
    async handleSDP(type, sdp2) {
      sdp2 = new RTCSessionDescription(sdp2);
      const peerConnection = this.connection.peerConnection;
      const provider = this.connection.provider;
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Setting remote description", sdp2);
      const self = this;
      try {
        await peerConnection.setRemoteDescription(sdp2);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Set remoteDescription:${type} for:${this.connection.peer}`);
        if (type === "OFFER") await self._makeAnswer();
      } catch (err) {
        provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to setRemoteDescription, ", err);
      }
    }
    /** Handle a candidate. */
    async handleCandidate(ice) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`handleCandidate:`, ice);
      try {
        await this.connection.peerConnection.addIceCandidate(ice);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Added ICE candidate for:${this.connection.peer}`);
      } catch (err) {
        this.connection.provider.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).WebRTC, err);
        (0, $257947e92926277a$export$2e2bcd8739ae039).log("Failed to handleCandidate, ", err);
      }
    }
    _addTracksToConnection(stream, peerConnection) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`add tracks from stream ${stream.id} to peer connection`);
      if (!peerConnection.addTrack) return (0, $257947e92926277a$export$2e2bcd8739ae039).error(`Your browser does't support RTCPeerConnection#addTrack. Ignored.`);
      stream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, stream);
      });
    }
    _addStreamToMediaConnection(stream, mediaConnection) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`add stream ${stream.id} to media connection ${mediaConnection.connectionId}`);
      mediaConnection.addStream(stream);
    }
  };
  var $23779d1881157a18$export$6a678e589c8a4542 = class extends (0, $c4dcfd1d1ea86647$exports.EventEmitter) {
    /**
    * Emits a typed error message.
    *
    * @internal
    */
    emitError(type, err) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).error("Error:", err);
      this.emit("error", new $23779d1881157a18$export$98871882f492de82(`${type}`, err));
    }
  };
  var $23779d1881157a18$export$98871882f492de82 = class extends Error {
    /**
    * @internal
    */
    constructor(type, err) {
      if (typeof err === "string") super(err);
      else {
        super();
        Object.assign(this, err);
      }
      this.type = type;
    }
  };
  var $5045192fc6d387ba$export$23a2a68283c24d80 = class extends (0, $23779d1881157a18$export$6a678e589c8a4542) {
    /**
    * Whether the media connection is active (e.g. your call has been answered).
    * You can check this if you want to set a maximum wait time for a one-sided call.
    */
    get open() {
      return this._open;
    }
    constructor(peer, provider, options) {
      super();
      this.peer = peer;
      this.provider = provider;
      this.options = options;
      this._open = false;
      this.metadata = options.metadata;
    }
  };
  var $5c1d08c7c57da9a3$export$4a84e95a2324ac29 = class _$5c1d08c7c57da9a3$export$4a84e95a2324ac29 extends (0, $5045192fc6d387ba$export$23a2a68283c24d80) {
    static #_ = this.ID_PREFIX = "mc_";
    /**
    * For media connections, this is always 'media'.
    */
    get type() {
      return (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Media;
    }
    get localStream() {
      return this._localStream;
    }
    get remoteStream() {
      return this._remoteStream;
    }
    constructor(peerId, provider, options) {
      super(peerId, provider, options);
      this._localStream = this.options._stream;
      this.connectionId = this.options.connectionId || _$5c1d08c7c57da9a3$export$4a84e95a2324ac29.ID_PREFIX + (0, $4f4134156c446392$export$7debb50ef11d5e0b).randomToken();
      this._negotiator = new (0, $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a)(this);
      if (this._localStream) this._negotiator.startConnection({
        _stream: this._localStream,
        originator: true
      });
    }
    /** Called by the Negotiator when the DataChannel is ready. */
    _initializeDataChannel(dc) {
      this.dataChannel = dc;
      this.dataChannel.onopen = () => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc connection success`);
        this.emit("willCloseOnRemote");
      };
      this.dataChannel.onclose = () => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc closed for:`, this.peer);
        this.close();
      };
    }
    addStream(remoteStream) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log("Receiving stream", remoteStream);
      this._remoteStream = remoteStream;
      super.emit("stream", remoteStream);
    }
    /**
    * @internal
    */
    handleMessage(message) {
      const type = message.type;
      const payload = message.payload;
      switch (message.type) {
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Answer:
          this._negotiator.handleSDP(type, payload.sdp);
          this._open = true;
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Candidate:
          this._negotiator.handleCandidate(payload.candidate);
          break;
        default:
          (0, $257947e92926277a$export$2e2bcd8739ae039).warn(`Unrecognized message type:${type} from peer:${this.peer}`);
          break;
      }
    }
    /**
         * When receiving a {@apilink PeerEvents | `call`} event on a peer, you can call
         * `answer` on the media connection provided by the callback to accept the call
         * and optionally send your own media stream.
    
         *
         * @param stream A WebRTC media stream.
         * @param options
         * @returns
         */
    answer(stream, options = {}) {
      if (this._localStream) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");
        return;
      }
      this._localStream = stream;
      if (options && options.sdpTransform) this.options.sdpTransform = options.sdpTransform;
      this._negotiator.startConnection({
        ...this.options._payload,
        _stream: stream
      });
      const messages = this.provider._getMessages(this.connectionId);
      for (const message of messages) this.handleMessage(message);
      this._open = true;
    }
    /**
    * Exposed functionality for users.
    */
    /**
    * Closes the media connection.
    */
    close() {
      if (this._negotiator) {
        this._negotiator.cleanup();
        this._negotiator = null;
      }
      this._localStream = null;
      this._remoteStream = null;
      if (this.provider) {
        this.provider._removeConnection(this);
        this.provider = null;
      }
      if (this.options && this.options._stream) this.options._stream = null;
      if (!this.open) return;
      this._open = false;
      super.emit("close");
    }
  };
  var $abf266641927cd89$export$2c4e825dc9120f87 = class {
    constructor(_options) {
      this._options = _options;
    }
    _buildRequest(method) {
      const protocol = this._options.secure ? "https" : "http";
      const { host, port, path, key } = this._options;
      const url = new URL(`${protocol}://${host}:${port}${path}${key}/${method}`);
      url.searchParams.set("ts", `${Date.now()}${Math.random()}`);
      url.searchParams.set("version", (0, $f5f881ec4575f1fc$exports.version));
      return fetch(url.href, {
        referrerPolicy: this._options.referrerPolicy
      });
    }
    /** Get a unique ID from the server via XHR and initialize with it. */
    async retrieveId() {
      try {
        const response = await this._buildRequest("id");
        if (response.status !== 200) throw new Error(`Error. Status:${response.status}`);
        return response.text();
      } catch (error) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).error("Error retrieving ID", error);
        let pathError = "";
        if (this._options.path === "/" && this._options.host !== (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) pathError = " If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer.";
        throw new Error("Could not get an ID from the server." + pathError);
      }
    }
    /** @deprecated */
    async listAllPeers() {
      try {
        const response = await this._buildRequest("peers");
        if (response.status !== 200) {
          if (response.status === 401) {
            let helpfulError = "";
            if (this._options.host === (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) helpfulError = "It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.";
            else helpfulError = "You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.";
            throw new Error("It doesn't look like you have permission to list peers IDs. " + helpfulError);
          }
          throw new Error(`Error. Status:${response.status}`);
        }
        return response.json();
      } catch (error) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).error("Error retrieving list peers", error);
        throw new Error("Could not get list peers from the server." + error);
      }
    }
  };
  var $6366c4ca161bc297$export$d365f7ad9d7df9c9 = class _$6366c4ca161bc297$export$d365f7ad9d7df9c9 extends (0, $5045192fc6d387ba$export$23a2a68283c24d80) {
    static #_ = this.ID_PREFIX = "dc_";
    static #_2 = this.MAX_BUFFERED_AMOUNT = 8388608;
    get type() {
      return (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Data;
    }
    constructor(peerId, provider, options) {
      super(peerId, provider, options);
      this.connectionId = this.options.connectionId || _$6366c4ca161bc297$export$d365f7ad9d7df9c9.ID_PREFIX + (0, $0e5fd1585784c252$export$4e61f672936bec77)();
      this.label = this.options.label || this.connectionId;
      this.reliable = !!this.options.reliable;
      this._negotiator = new (0, $b82fb8fc0514bfc1$export$89e6bb5ad64bf4a)(this);
      this._negotiator.startConnection(this.options._payload || {
        originator: true,
        reliable: this.reliable
      });
    }
    /** Called by the Negotiator when the DataChannel is ready. */
    _initializeDataChannel(dc) {
      this.dataChannel = dc;
      this.dataChannel.onopen = () => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc connection success`);
        this._open = true;
        this.emit("open");
      };
      this.dataChannel.onmessage = (e) => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc onmessage:`, e.data);
      };
      this.dataChannel.onclose = () => {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} dc closed for:`, this.peer);
        this.close();
      };
    }
    /**
    * Exposed functionality for users.
    */
    /** Allows user to close connection. */
    close(options) {
      if (options?.flush) {
        this.send({
          __peerData: {
            type: "close"
          }
        });
        return;
      }
      if (this._negotiator) {
        this._negotiator.cleanup();
        this._negotiator = null;
      }
      if (this.provider) {
        this.provider._removeConnection(this);
        this.provider = null;
      }
      if (this.dataChannel) {
        this.dataChannel.onopen = null;
        this.dataChannel.onmessage = null;
        this.dataChannel.onclose = null;
        this.dataChannel = null;
      }
      if (!this.open) return;
      this._open = false;
      super.emit("close");
    }
    /** Allows user to send data. */
    send(data, chunked = false) {
      if (!this.open) {
        this.emitError((0, $78455e22dea96b8c$export$49ae800c114df41d).NotOpenYet, "Connection is not open. You should listen for the `open` event before sending messages.");
        return;
      }
      return this._send(data, chunked);
    }
    async handleMessage(message) {
      const payload = message.payload;
      switch (message.type) {
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Answer:
          await this._negotiator.handleSDP(message.type, payload.sdp);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Candidate:
          await this._negotiator.handleCandidate(payload.candidate);
          break;
        default:
          (0, $257947e92926277a$export$2e2bcd8739ae039).warn("Unrecognized message type:", message.type, "from peer:", this.peer);
          break;
      }
    }
  };
  var $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b = class extends (0, $6366c4ca161bc297$export$d365f7ad9d7df9c9) {
    get bufferSize() {
      return this._bufferSize;
    }
    _initializeDataChannel(dc) {
      super._initializeDataChannel(dc);
      this.dataChannel.binaryType = "arraybuffer";
      this.dataChannel.addEventListener("message", (e) => this._handleDataMessage(e));
    }
    _bufferedSend(msg) {
      if (this._buffering || !this._trySend(msg)) {
        this._buffer.push(msg);
        this._bufferSize = this._buffer.length;
      }
    }
    // Returns true if the send succeeds.
    _trySend(msg) {
      if (!this.open) return false;
      if (this.dataChannel.bufferedAmount > (0, $6366c4ca161bc297$export$d365f7ad9d7df9c9).MAX_BUFFERED_AMOUNT) {
        this._buffering = true;
        setTimeout(() => {
          this._buffering = false;
          this._tryBuffer();
        }, 50);
        return false;
      }
      try {
        this.dataChannel.send(msg);
      } catch (e) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).error(`DC#:${this.connectionId} Error when sending:`, e);
        this._buffering = true;
        this.close();
        return false;
      }
      return true;
    }
    // Try to send the first message in the buffer.
    _tryBuffer() {
      if (!this.open) return;
      if (this._buffer.length === 0) return;
      const msg = this._buffer[0];
      if (this._trySend(msg)) {
        this._buffer.shift();
        this._bufferSize = this._buffer.length;
        this._tryBuffer();
      }
    }
    close(options) {
      if (options?.flush) {
        this.send({
          __peerData: {
            type: "close"
          }
        });
        return;
      }
      this._buffer = [];
      this._bufferSize = 0;
      super.close();
    }
    constructor(...args) {
      super(...args);
      this._buffer = [];
      this._bufferSize = 0;
      this._buffering = false;
    }
  };
  var $9fcfddb3ae148f88$export$f0a5a64d5bb37108 = class extends (0, $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
    close(options) {
      super.close(options);
      this._chunkedData = {};
    }
    constructor(peerId, provider, options) {
      super(peerId, provider, options);
      this.chunker = new (0, $fcbcc7538a6776d5$export$f1c5f4c9cb95390b)();
      this.serialization = (0, $78455e22dea96b8c$export$89f507cf986a947).Binary;
      this._chunkedData = {};
    }
    // Handles a DataChannel message.
    _handleDataMessage({ data }) {
      const deserializedData = (0, $0cfd7828ad59115f$export$417857010dc9287f)(data);
      const peerData = deserializedData["__peerData"];
      if (peerData) {
        if (peerData.type === "close") {
          this.close();
          return;
        }
        this._handleChunk(deserializedData);
        return;
      }
      this.emit("data", deserializedData);
    }
    _handleChunk(data) {
      const id = data.__peerData;
      const chunkInfo = this._chunkedData[id] || {
        data: [],
        count: 0,
        total: data.total
      };
      chunkInfo.data[data.n] = new Uint8Array(data.data);
      chunkInfo.count++;
      this._chunkedData[id] = chunkInfo;
      if (chunkInfo.total === chunkInfo.count) {
        delete this._chunkedData[id];
        const data2 = (0, $fcbcc7538a6776d5$export$52c89ebcdc4f53f2)(chunkInfo.data);
        this._handleDataMessage({
          data: data2
        });
      }
    }
    _send(data, chunked) {
      const blob = (0, $0cfd7828ad59115f$export$2a703dbb0cb35339)(data);
      if (blob instanceof Promise) return this._send_blob(blob);
      if (!chunked && blob.byteLength > this.chunker.chunkedMTU) {
        this._sendChunks(blob);
        return;
      }
      this._bufferedSend(blob);
    }
    async _send_blob(blobPromise) {
      const blob = await blobPromise;
      if (blob.byteLength > this.chunker.chunkedMTU) {
        this._sendChunks(blob);
        return;
      }
      this._bufferedSend(blob);
    }
    _sendChunks(blob) {
      const blobs = this.chunker.chunk(blob);
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`DC#${this.connectionId} Try to send ${blobs.length} chunks...`);
      for (const blob2 of blobs) this.send(blob2, true);
    }
  };
  var $bbaee3f15f714663$export$6f88fe47d32c9c94 = class extends (0, $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
    _handleDataMessage({ data }) {
      super.emit("data", data);
    }
    _send(data, _chunked) {
      this._bufferedSend(data);
    }
    constructor(...args) {
      super(...args);
      this.serialization = (0, $78455e22dea96b8c$export$89f507cf986a947).None;
    }
  };
  var $817f931e3f9096cf$export$48880ac635f47186 = class extends (0, $a229bedbcaa6ca23$export$ff7c9d4c11d94e8b) {
    // Handles a DataChannel message.
    _handleDataMessage({ data }) {
      const deserializedData = this.parse(this.decoder.decode(data));
      const peerData = deserializedData["__peerData"];
      if (peerData && peerData.type === "close") {
        this.close();
        return;
      }
      this.emit("data", deserializedData);
    }
    _send(data, _chunked) {
      const encodedData = this.encoder.encode(this.stringify(data));
      if (encodedData.byteLength >= (0, $4f4134156c446392$export$7debb50ef11d5e0b).chunkedMTU) {
        this.emitError((0, $78455e22dea96b8c$export$49ae800c114df41d).MessageToBig, "Message too big for JSON channel");
        return;
      }
      this._bufferedSend(encodedData);
    }
    constructor(...args) {
      super(...args);
      this.serialization = (0, $78455e22dea96b8c$export$89f507cf986a947).JSON;
      this.encoder = new TextEncoder();
      this.decoder = new TextDecoder();
      this.stringify = JSON.stringify;
      this.parse = JSON.parse;
    }
  };
  var $416260bce337df90$export$ecd1fc136c422448 = class _$416260bce337df90$export$ecd1fc136c422448 extends (0, $23779d1881157a18$export$6a678e589c8a4542) {
    static #_ = this.DEFAULT_KEY = "peerjs";
    /**
    * The brokering ID of this peer
    *
    * If no ID was specified in {@apilink Peer | the constructor},
    * this will be `undefined` until the {@apilink PeerEvents | `open`} event is emitted.
    */
    get id() {
      return this._id;
    }
    get options() {
      return this._options;
    }
    get open() {
      return this._open;
    }
    /**
    * @internal
    */
    get socket() {
      return this._socket;
    }
    /**
    * A hash of all connections associated with this peer, keyed by the remote peer's ID.
    * @deprecated
    * Return type will change from Object to Map<string,[]>
    */
    get connections() {
      const plainConnections = /* @__PURE__ */ Object.create(null);
      for (const [k, v] of this._connections) plainConnections[k] = v;
      return plainConnections;
    }
    /**
    * true if this peer and all of its connections can no longer be used.
    */
    get destroyed() {
      return this._destroyed;
    }
    /**
    * false if there is an active connection to the PeerServer.
    */
    get disconnected() {
      return this._disconnected;
    }
    constructor(id, options) {
      super();
      this._serializers = {
        raw: (0, $bbaee3f15f714663$export$6f88fe47d32c9c94),
        json: (0, $817f931e3f9096cf$export$48880ac635f47186),
        binary: (0, $9fcfddb3ae148f88$export$f0a5a64d5bb37108),
        "binary-utf8": (0, $9fcfddb3ae148f88$export$f0a5a64d5bb37108),
        default: (0, $9fcfddb3ae148f88$export$f0a5a64d5bb37108)
      };
      this._id = null;
      this._lastServerId = null;
      this._destroyed = false;
      this._disconnected = false;
      this._open = false;
      this._connections = /* @__PURE__ */ new Map();
      this._lostMessages = /* @__PURE__ */ new Map();
      let userId;
      if (id && id.constructor == Object) options = id;
      else if (id) userId = id.toString();
      options = {
        debug: 0,
        host: (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST,
        port: (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_PORT,
        path: "/",
        key: _$416260bce337df90$export$ecd1fc136c422448.DEFAULT_KEY,
        token: (0, $4f4134156c446392$export$7debb50ef11d5e0b).randomToken(),
        config: (0, $4f4134156c446392$export$7debb50ef11d5e0b).defaultConfig,
        referrerPolicy: "strict-origin-when-cross-origin",
        serializers: {},
        ...options
      };
      this._options = options;
      this._serializers = {
        ...this._serializers,
        ...this.options.serializers
      };
      if (this._options.host === "/") this._options.host = window.location.hostname;
      if (this._options.path) {
        if (this._options.path[0] !== "/") this._options.path = "/" + this._options.path;
        if (this._options.path[this._options.path.length - 1] !== "/") this._options.path += "/";
      }
      if (this._options.secure === void 0 && this._options.host !== (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) this._options.secure = (0, $4f4134156c446392$export$7debb50ef11d5e0b).isSecure();
      else if (this._options.host == (0, $4f4134156c446392$export$7debb50ef11d5e0b).CLOUD_HOST) this._options.secure = true;
      if (this._options.logFunction) (0, $257947e92926277a$export$2e2bcd8739ae039).setLogFunction(this._options.logFunction);
      (0, $257947e92926277a$export$2e2bcd8739ae039).logLevel = this._options.debug || 0;
      this._api = new (0, $abf266641927cd89$export$2c4e825dc9120f87)(options);
      this._socket = this._createServerConnection();
      if (!(0, $4f4134156c446392$export$7debb50ef11d5e0b).supports.audioVideo && !(0, $4f4134156c446392$export$7debb50ef11d5e0b).supports.data) {
        this._delayedAbort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).BrowserIncompatible, "The current browser does not support WebRTC");
        return;
      }
      if (!!userId && !(0, $4f4134156c446392$export$7debb50ef11d5e0b).validateId(userId)) {
        this._delayedAbort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).InvalidID, `ID "${userId}" is invalid`);
        return;
      }
      if (userId) this._initialize(userId);
      else this._api.retrieveId().then((id2) => this._initialize(id2)).catch((error) => this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, error));
    }
    _createServerConnection() {
      const socket = new (0, $8f5bfa60836d261d$export$4798917dbf149b79)(this._options.secure, this._options.host, this._options.port, this._options.path, this._options.key, this._options.pingInterval);
      socket.on((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Message, (data) => {
        this._handleMessage(data);
      });
      socket.on((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Error, (error) => {
        this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).SocketError, error);
      });
      socket.on((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Disconnected, () => {
        if (this.disconnected) return;
        this.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).Network, "Lost connection to server.");
        this.disconnect();
      });
      socket.on((0, $78455e22dea96b8c$export$3b5c4a4b6354f023).Close, () => {
        if (this.disconnected) return;
        this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).SocketClosed, "Underlying socket is already closed.");
      });
      return socket;
    }
    /** Initialize a connection with the server. */
    _initialize(id) {
      this._id = id;
      this.socket.start(id, this._options.token);
    }
    /** Handles messages from the server. */
    _handleMessage(message) {
      const type = message.type;
      const payload = message.payload;
      const peerId = message.src;
      switch (type) {
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Open:
          this._lastServerId = this.id;
          this._open = true;
          this.emit("open", this.id);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Error:
          this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, payload.msg);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).IdTaken:
          this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).UnavailableID, `ID "${this.id}" is taken`);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).InvalidKey:
          this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).InvalidKey, `API KEY "${this._options.key}" is invalid`);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Leave:
          (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Received leave message from ${peerId}`);
          this._cleanupPeer(peerId);
          this._connections.delete(peerId);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Expire:
          this.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).PeerUnavailable, `Could not connect to peer ${peerId}`);
          break;
        case (0, $78455e22dea96b8c$export$adb4a1754da6f10d).Offer: {
          const connectionId = payload.connectionId;
          let connection = this.getConnection(peerId, connectionId);
          if (connection) {
            connection.close();
            (0, $257947e92926277a$export$2e2bcd8739ae039).warn(`Offer received for existing Connection ID:${connectionId}`);
          }
          if (payload.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Media) {
            const mediaConnection = new (0, $5c1d08c7c57da9a3$export$4a84e95a2324ac29)(peerId, this, {
              connectionId,
              _payload: payload,
              metadata: payload.metadata
            });
            connection = mediaConnection;
            this._addConnection(peerId, connection);
            this.emit("call", mediaConnection);
          } else if (payload.type === (0, $78455e22dea96b8c$export$3157d57b4135e3bc).Data) {
            const dataConnection = new this._serializers[payload.serialization](peerId, this, {
              connectionId,
              _payload: payload,
              metadata: payload.metadata,
              label: payload.label,
              serialization: payload.serialization,
              reliable: payload.reliable
            });
            connection = dataConnection;
            this._addConnection(peerId, connection);
            this.emit("connection", dataConnection);
          } else {
            (0, $257947e92926277a$export$2e2bcd8739ae039).warn(`Received malformed connection type:${payload.type}`);
            return;
          }
          const messages = this._getMessages(connectionId);
          for (const message2 of messages) connection.handleMessage(message2);
          break;
        }
        default: {
          if (!payload) {
            (0, $257947e92926277a$export$2e2bcd8739ae039).warn(`You received a malformed message from ${peerId} of type ${type}`);
            return;
          }
          const connectionId = payload.connectionId;
          const connection = this.getConnection(peerId, connectionId);
          if (connection && connection.peerConnection)
            connection.handleMessage(message);
          else if (connectionId)
            this._storeMessage(connectionId, message);
          else (0, $257947e92926277a$export$2e2bcd8739ae039).warn("You received an unrecognized message:", message);
          break;
        }
      }
    }
    /** Stores messages without a set up connection, to be claimed later. */
    _storeMessage(connectionId, message) {
      if (!this._lostMessages.has(connectionId)) this._lostMessages.set(connectionId, []);
      this._lostMessages.get(connectionId).push(message);
    }
    /**
    * Retrieve messages from lost message store
    * @internal
    */
    //TODO Change it to private
    _getMessages(connectionId) {
      const messages = this._lostMessages.get(connectionId);
      if (messages) {
        this._lostMessages.delete(connectionId);
        return messages;
      }
      return [];
    }
    /**
    * Connects to the remote peer specified by id and returns a data connection.
    * @param peer The brokering ID of the remote peer (their {@apilink Peer.id}).
    * @param options for specifying details about Peer Connection
    */
    connect(peer, options = {}) {
      options = {
        serialization: "default",
        ...options
      };
      if (this.disconnected) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available.");
        this.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }
      const dataConnection = new this._serializers[options.serialization](peer, this, options);
      this._addConnection(peer, dataConnection);
      return dataConnection;
    }
    /**
    * Calls the remote peer specified by id and returns a media connection.
    * @param peer The brokering ID of the remote peer (their peer.id).
    * @param stream The caller's media stream
    * @param options Metadata associated with the connection, passed in by whoever initiated the connection.
    */
    call(peer, stream, options = {}) {
      if (this.disconnected) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect.");
        this.emitError((0, $78455e22dea96b8c$export$9547aaa2e39030ff).Disconnected, "Cannot connect to new Peer after disconnecting from server.");
        return;
      }
      if (!stream) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");
        return;
      }
      const mediaConnection = new (0, $5c1d08c7c57da9a3$export$4a84e95a2324ac29)(peer, this, {
        ...options,
        _stream: stream
      });
      this._addConnection(peer, mediaConnection);
      return mediaConnection;
    }
    /** Add a data/media connection to this peer. */
    _addConnection(peerId, connection) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`add connection ${connection.type}:${connection.connectionId} to peerId:${peerId}`);
      if (!this._connections.has(peerId)) this._connections.set(peerId, []);
      this._connections.get(peerId).push(connection);
    }
    //TODO should be private
    _removeConnection(connection) {
      const connections = this._connections.get(connection.peer);
      if (connections) {
        const index = connections.indexOf(connection);
        if (index !== -1) connections.splice(index, 1);
      }
      this._lostMessages.delete(connection.connectionId);
    }
    /** Retrieve a data/media connection for this peer. */
    getConnection(peerId, connectionId) {
      const connections = this._connections.get(peerId);
      if (!connections) return null;
      for (const connection of connections) {
        if (connection.connectionId === connectionId) return connection;
      }
      return null;
    }
    _delayedAbort(type, message) {
      setTimeout(() => {
        this._abort(type, message);
      }, 0);
    }
    /**
    * Emits an error message and destroys the Peer.
    * The Peer is not destroyed if it's in a disconnected state, in which case
    * it retains its disconnected state and its existing connections.
    */
    _abort(type, message) {
      (0, $257947e92926277a$export$2e2bcd8739ae039).error("Aborting!");
      this.emitError(type, message);
      if (!this._lastServerId) this.destroy();
      else this.disconnect();
    }
    /**
    * Destroys the Peer: closes all active connections as well as the connection
    * to the server.
    *
    * :::caution
    * This cannot be undone; the respective peer object will no longer be able
    * to create or receive any connections, its ID will be forfeited on the server,
    * and all of its data and media connections will be closed.
    * :::
    */
    destroy() {
      if (this.destroyed) return;
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Destroy peer with ID:${this.id}`);
      this.disconnect();
      this._cleanup();
      this._destroyed = true;
      this.emit("close");
    }
    /** Disconnects every connection on this peer. */
    _cleanup() {
      for (const peerId of this._connections.keys()) {
        this._cleanupPeer(peerId);
        this._connections.delete(peerId);
      }
      this.socket.removeAllListeners();
    }
    /** Closes all connections to this peer. */
    _cleanupPeer(peerId) {
      const connections = this._connections.get(peerId);
      if (!connections) return;
      for (const connection of connections) connection.close();
    }
    /**
    * Disconnects the Peer's connection to the PeerServer. Does not close any
    *  active connections.
    * Warning: The peer can no longer create or accept connections after being
    *  disconnected. It also cannot reconnect to the server.
    */
    disconnect() {
      if (this.disconnected) return;
      const currentId = this.id;
      (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Disconnect peer with ID:${currentId}`);
      this._disconnected = true;
      this._open = false;
      this.socket.close();
      this._lastServerId = currentId;
      this._id = null;
      this.emit("disconnected", currentId);
    }
    /** Attempts to reconnect with the same ID.
    *
    * Only {@apilink Peer.disconnect | disconnected peers} can be reconnected.
    * Destroyed peers cannot be reconnected.
    * If the connection fails (as an example, if the peer's old ID is now taken),
    * the peer's existing connections will not close, but any associated errors events will fire.
    */
    reconnect() {
      if (this.disconnected && !this.destroyed) {
        (0, $257947e92926277a$export$2e2bcd8739ae039).log(`Attempting reconnection to server with ID ${this._lastServerId}`);
        this._disconnected = false;
        this._initialize(this._lastServerId);
      } else if (this.destroyed) throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");
      else if (!this.disconnected && !this.open)
        (0, $257947e92926277a$export$2e2bcd8739ae039).error("In a hurry? We're still trying to make the initial connection!");
      else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`);
    }
    /**
    * Get a list of available peer IDs. If you're running your own server, you'll
    * want to set allow_discovery: true in the PeerServer options. If you're using
    * the cloud server, email team@peerjs.com to get the functionality enabled for
    * your key.
    */
    listAllPeers(cb = (_) => {
    }) {
      this._api.listAllPeers().then((peers) => cb(peers)).catch((error) => this._abort((0, $78455e22dea96b8c$export$9547aaa2e39030ff).ServerError, error));
    }
  };
  var $dd0187d7f28e386f$export$2e2bcd8739ae039 = (0, $416260bce337df90$export$ecd1fc136c422448);

  // src/net/peer.ts
  var PREFIX = "vitrea-mp-";
  var CODE_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  function makeCode(rand3 = Math.random) {
    let code = "";
    for (let i = 0; i < 5; i++) code += CODE_CHARS[Math.floor(rand3() * CODE_CHARS.length)];
    return code;
  }
  function cleanCode(text) {
    return text.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 5);
  }
  function stationId(code, side) {
    return PREFIX + code + (side === 1 ? "-g" : "");
  }
  function wrap(conn) {
    let closed = false;
    const closeHandlers = [];
    const closeOnce = () => {
      if (closed) return;
      closed = true;
      for (const h of closeHandlers) h();
    };
    conn.on("close", closeOnce);
    conn.on("error", closeOnce);
    const watchdog = setInterval(() => {
      if (!closed && conn.peerConnection && ["failed", "closed", "disconnected"].includes(conn.peerConnection.iceConnectionState)) closeOnce();
      if (closed) clearInterval(watchdog);
    }, 1e3);
    return {
      send: (m) => {
        if (!closed && conn.open) conn.send(m);
      },
      onMessage: (h) => conn.on("data", (d) => h(d)),
      onClose: (h) => {
        if (closed) h();
        else closeHandlers.push(h);
      },
      close: () => {
        closeOnce();
        conn.close();
      }
    };
  }
  function describe(err) {
    switch (err.type) {
      case "peer-unavailable":
        return "No game with that code is open. Check it and try again.";
      case "unavailable-id":
        return "That code is in use. Try again in a moment.";
      case "network":
      case "server-error":
      case "socket-error":
      case "socket-closed":
        return "Couldn't reach the matchmaking server. Check your internet connection.";
      case "browser-incompatible":
        return "This browser can't make direct connections. Try Chrome, Edge or Firefox.";
      default:
        return err.message ?? "Connection failed.";
    }
  }
  var Station = class {
    peer;
    /** Called for every incoming connection, once it's open. */
    onConnection = () => {
    };
    /** Called on errors, with a message for the player. */
    onError = () => {
    };
    ready;
    constructor(id) {
      this.peer = id ? new $dd0187d7f28e386f$export$2e2bcd8739ae039(id) : new $dd0187d7f28e386f$export$2e2bcd8739ae039();
      this.ready = new Promise((resolve, reject) => {
        this.peer.on("open", () => resolve());
        this.peer.on("error", (e) => {
          const text = describe(e);
          reject(new Error(text));
          this.onError(text);
        });
      });
      this.ready.catch(() => {
      });
      this.peer.on("connection", (conn) => conn.on("open", () => this.onConnection(wrap(conn))));
      this.peer.on("disconnected", () => {
        if (!this.peer.destroyed) this.peer.reconnect();
      });
    }
    /** Resolves once the station is registered (and so findable). */
    whenReady() {
      return this.ready;
    }
    /** Connect to another station by id. */
    async connect(id) {
      await this.ready;
      return new Promise((resolve, reject) => {
        const conn = this.peer.connect(id, { reliable: true, serialization: "json" });
        const timer = setTimeout(() => reject(new Error("No answer from the other player.")), 12e3);
        conn.on("open", () => {
          clearTimeout(timer);
          resolve(wrap(conn));
        });
        conn.on("error", () => {
          clearTimeout(timer);
          reject(new Error("Connection failed."));
        });
      });
    }
    destroy() {
      this.peer.destroy();
    }
  };

  // src/titlebg.ts
  var STORM_PERIOD = 70;
  var SWAY_PERIOD = 46;
  var MIN_OPEN = 260;
  function startTitleBackground(canvas, menuBox) {
    const ctx = canvas.getContext("2d");
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let w = 0;
    let h = 0;
    let scenery = null;
    let shards = [];
    let glints = [];
    let running = true;
    let scale = 1;
    let raf = 0;
    const t0 = performance.now();
    const paintScenery = () => {
      const rnd = mulberry32(1337);
      const s = document.createElement("canvas");
      s.width = w;
      s.height = h;
      const c = s.getContext("2d");
      const horizon = h * 0.6;
      const sky = c.createLinearGradient(0, 0, 0, horizon);
      sky.addColorStop(0, "#110f0d");
      sky.addColorStop(0.55, "#2a241e");
      sky.addColorStop(1, "#5a4c3b");
      c.fillStyle = sky;
      c.fillRect(0, 0, w, horizon);
      const ground = c.createLinearGradient(0, horizon, 0, h);
      ground.addColorStop(0, "#3d352c");
      ground.addColorStop(1, "#1a1714");
      c.fillStyle = ground;
      c.fillRect(0, horizon, w, h - horizon);
      const range = (base, height, colour, count2) => {
        c.fillStyle = colour;
        c.beginPath();
        c.moveTo(0, base);
        let x = 0;
        while (x < w) {
          const gap = w / count2 * (0.4 + rnd());
          const top = base - height * (0.35 + rnd() * 0.65);
          const width = w / count2 * (0.5 + rnd() * 0.9);
          c.lineTo(x + gap * 0.3, base);
          c.lineTo(x + gap * 0.45, top);
          c.lineTo(x + gap * 0.45 + width, top + rnd() * 6);
          c.lineTo(x + gap * 0.6 + width, base);
          x += gap + width;
        }
        c.lineTo(w, base);
        c.closePath();
        c.fill();
      };
      range(horizon + 2, h * 0.16, "rgba(58, 50, 42, 0.9)", 6);
      range(horizon + 6, h * 0.1, "rgba(38, 33, 28, 0.95)", 9);
      c.strokeStyle = "rgba(255, 235, 200, 0.03)";
      c.lineWidth = 1;
      for (let i = 0; i < 70; i++) {
        const y = horizon + 12 + rnd() * (h - horizon);
        const x = rnd() * w;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x + 60 + rnd() * 180, y + 2);
        c.stroke();
      }
      glints = [];
      const clusters = Math.max(4, Math.round(w / 260));
      for (let k = 0; k < clusters; k++) {
        const cx = (k + 0.3 + rnd() * 0.4) * (w / clusters);
        const cy = h * (0.82 + rnd() * 0.14);
        const scale2 = (0.6 + rnd() * 0.8) * Math.min(1.4, h / 800);
        const glow2 = c.createRadialGradient(cx, cy, 0, cx, cy, 70 * scale2);
        glow2.addColorStop(0, "rgba(111, 227, 240, 0.22)");
        glow2.addColorStop(1, "rgba(111, 227, 240, 0)");
        c.fillStyle = glow2;
        c.fillRect(cx - 80 * scale2, cy - 80 * scale2, 160 * scale2, 160 * scale2);
        for (let i = 0; i < 7; i++) {
          const x = cx + (rnd() - 0.5) * 50 * scale2;
          const tall = (14 + rnd() * 30) * scale2;
          const lean = (rnd() - 0.5) * 0.7;
          const half = tall * 0.22;
          const g = c.createLinearGradient(x, cy - tall, x, cy);
          g.addColorStop(0, "#effcff");
          g.addColorStop(0.45, "#6fe3f0");
          g.addColorStop(1, "#1c5a63");
          c.fillStyle = g;
          c.beginPath();
          c.moveTo(x + lean * tall, cy - tall);
          c.lineTo(x + half, cy - tall * 0.4);
          c.lineTo(x + half * 0.5, cy);
          c.lineTo(x - half * 0.5, cy);
          c.lineTo(x - half, cy - tall * 0.4);
          c.closePath();
          c.fill();
          glints.push({ x: x + lean * tall, y: cy - tall, size: 1.5 + rnd() * 2.5, phase: rnd() * 6.28, rate: 0.6 + rnd() * 1.6 });
        }
      }
      scenery = s;
    };
    const resize = () => {
      scale = Math.min(1.5, window.devicePixelRatio || 1);
      w = Math.max(1, Math.round(window.innerWidth * scale));
      h = Math.max(1, Math.round(window.innerHeight * scale));
      canvas.width = w;
      canvas.height = h;
      paintScenery();
      const rnd = mulberry32(99);
      shards = Array.from({ length: Math.round(w * h / 9e3) }, () => ({
        x: rnd() * w,
        y: rnd() * h,
        len: 4 + rnd() * 14,
        speed: 120 + rnd() * 380,
        alpha: 0.15 + rnd() * 0.5
      }));
      if (still) draw(STORM_PERIOD * 0.55, 0);
    };
    const stormPlace = (t) => {
      const box2 = menuBox?.();
      const right = box2 ? box2.right * scale : w;
      const open = w - right;
      if (box2 && open >= MIN_OPEN * scale) {
        const sway = Math.sin(t / SWAY_PERIOD * Math.PI * 2);
        return { x: right + open * (0.62 + sway * 0.3), width: Math.max(open * 1.05, 240 * scale) };
      }
      return { x: t % STORM_PERIOD / STORM_PERIOD * (w + w * 0.9) - w * 0.45, width: Math.max(w * 0.38, 420) };
    };
    const draw = (t, dt) => {
      if (scenery) ctx.drawImage(scenery, 0, 0);
      const horizon = h * 0.6;
      const { x: sx, width: sw } = stormPlace(t);
      const column = ctx.createLinearGradient(sx - sw * 0.6, 0, sx + sw * 0.6, 0);
      column.addColorStop(0, "rgba(60, 52, 44, 0)");
      column.addColorStop(0.3, "rgba(60, 52, 44, 0.55)");
      column.addColorStop(0.7, "rgba(60, 52, 44, 0.55)");
      column.addColorStop(1, "rgba(60, 52, 44, 0)");
      ctx.fillStyle = column;
      ctx.fillRect(sx - sw * 0.6, horizon - h * 0.5, sw * 1.2, h * 0.54);
      for (let i = 0; i < 26; i++) {
        const a = i * 1.7 + t * (0.16 + i % 3 * 0.05);
        const x = sx + Math.cos(a) * sw * 0.34 + (i - 13) * sw * 0.035;
        const y = horizon - h * 0.12 + Math.sin(a * 1.3) * h * 0.06 - i % 6 * h * 0.07;
        const r = sw * (0.2 + i % 5 * 0.05);
        const lit = i % 6 >= 4;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, lit ? "rgba(176, 156, 126, 0.55)" : "rgba(98, 86, 72, 0.6)");
        g.addColorStop(0.55, lit ? "rgba(140, 124, 102, 0.25)" : "rgba(80, 70, 58, 0.3)");
        g.addColorStop(1, "rgba(80, 70, 58, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      const flare = Math.max(0, Math.sin(t * 0.9) * Math.sin(t * 2.3 + 1)) ** 3;
      const core = ctx.createRadialGradient(sx, horizon - h * 0.2, 0, sx, horizon - h * 0.2, sw * 0.55);
      core.addColorStop(0, `rgba(160, 240, 250, ${0.16 + flare * 0.45})`);
      core.addColorStop(1, "rgba(111, 227, 240, 0)");
      ctx.fillStyle = core;
      ctx.fillRect(sx - sw, horizon - h * 0.2 - sw, sw * 2, sw * 2);
      const haze = ctx.createLinearGradient(0, horizon - h * 0.05, 0, horizon + h * 0.12);
      haze.addColorStop(0, "rgba(120, 105, 85, 0)");
      haze.addColorStop(0.5, "rgba(120, 105, 85, 0.18)");
      haze.addColorStop(1, "rgba(120, 105, 85, 0)");
      ctx.fillStyle = haze;
      ctx.fillRect(sx - sw * 1.2, horizon - h * 0.05, sw * 2.6, h * 0.17);
      ctx.lineCap = "round";
      for (const s of shards) {
        s.x += s.speed * dt;
        s.y += s.speed * 0.18 * dt;
        if (s.x > w + 20) {
          s.x = -20;
          s.y = Math.random() * h;
        }
        if (s.y > h + 20) s.y = -20;
        const near = Math.max(0, 1 - Math.abs(s.x - sx) / (sw * 1.1));
        const a = s.alpha * (0.15 + near * 0.85);
        if (a < 0.03) continue;
        ctx.strokeStyle = near > 0.5 && s.len > 12 ? `rgba(170, 240, 250, ${a})` : `rgba(225, 210, 185, ${a * 0.8})`;
        ctx.lineWidth = s.len > 12 ? 1.6 : 1;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len, s.y - s.len * 0.18);
        ctx.stroke();
      }
      for (const gl of glints) {
        const tw = Math.max(0, Math.sin(t * gl.rate + gl.phase)) ** 6;
        if (tw < 0.05) continue;
        ctx.fillStyle = `rgba(235, 252, 255, ${tw})`;
        ctx.beginPath();
        ctx.moveTo(gl.x, gl.y - gl.size * 3);
        ctx.lineTo(gl.x + gl.size * 0.6, gl.y);
        ctx.lineTo(gl.x, gl.y + gl.size * 3);
        ctx.lineTo(gl.x - gl.size * 0.6, gl.y);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(gl.x - gl.size * 3, gl.y);
        ctx.lineTo(gl.x, gl.y + gl.size * 0.6);
        ctx.lineTo(gl.x + gl.size * 3, gl.y);
        ctx.lineTo(gl.x, gl.y - gl.size * 0.6);
        ctx.closePath();
        ctx.fill();
      }
      const side = ctx.createLinearGradient(0, 0, w * 0.6, 0);
      side.addColorStop(0, "rgba(12, 10, 8, 0.55)");
      side.addColorStop(1, "rgba(12, 10, 8, 0)");
      ctx.fillStyle = side;
      ctx.fillRect(0, 0, w * 0.6, h);
      const vignette = ctx.createRadialGradient(w / 2, h * 0.45, Math.min(w, h) * 0.35, w / 2, h * 0.45, Math.max(w, h) * 0.75);
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
    };
    let last = t0;
    const frame = (now) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1e3);
      last = now;
      draw((now - t0) / 1e3 + STORM_PERIOD * 0.55, dt);
      raf = requestAnimationFrame(frame);
    };
    window.addEventListener("resize", resize);
    resize();
    if (!still) raf = requestAnimationFrame(frame);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }

  // src/replay.ts
  var REPLAY_VERSION = 2;
  var STEP2 = 1 / 60;
  function createReplayGame(setup) {
    const mission = setup.mission ? missionById(setup.mission) : void 0;
    if (mission) return createMissionGame(mission);
    return createGame(setup.seed, setup.difficulty, {
      hazards: setup.hazards,
      fog: setup.fog,
      playerFaction: setup.factions[0],
      enemyFaction: setup.factions[1],
      factions: setup.factions,
      pvp: setup.pvp,
      mode: setup.mode,
      weather: setup.weather,
      time: setup.time
    });
  }
  var ReplayRecorder = class {
    cmds = [];
    setup;
    local;
    title;
    at;
    id;
    constructor(setup, local, title, at = Date.now()) {
      this.setup = setup;
      this.local = local;
      this.title = title;
      this.at = at;
      this.id = `${at.toString(36)}-${setup.seed}`;
    }
    record(tick, owner, c) {
      this.cmds.push([tick, owner, JSON.parse(JSON.stringify(c))]);
    }
    /** The replay so far (call again later for a longer one: same id). */
    finish(g) {
      return {
        v: REPLAY_VERSION,
        id: this.id,
        at: this.at,
        setup: this.setup,
        local: this.local,
        title: this.title,
        cmds: this.cmds.slice(),
        ticks: g.tick,
        hash: stateHash(g),
        result: g.result,
        resultReason: g.resultReason
      };
    }
  };
  var ReplayPlayer = class {
    g;
    next = 0;
    replay;
    constructor(replay) {
      this.replay = replay;
      this.g = createReplayGame(replay.setup);
    }
    get tick() {
      return this.g.tick;
    }
    get done() {
      return this.g.tick >= this.replay.ticks;
    }
    /** Run up to `steps` steps, stopping at the end of the recording. Returns how many ran. */
    advance(steps) {
      let ran = 0;
      const cmds = this.replay.cmds;
      const applyDue = () => {
        while (this.next < cmds.length && cmds[this.next][0] <= this.g.tick) {
          const [, owner, c] = cmds[this.next++];
          applyCommand(this.g, owner, c);
        }
      };
      while (ran < steps && !this.done) {
        applyDue();
        update(this.g, STEP2);
        ran++;
      }
      if (this.done) applyDue();
      if (this.done && !this.g.result && this.replay.result) {
        this.g.result = this.replay.result;
        this.g.resultReason = this.replay.resultReason;
      }
      return ran;
    }
    /** Start again from step 0 (a new Game object: callers must pick up `g`). */
    restart() {
      this.g = createReplayGame(this.replay.setup);
      this.next = 0;
    }
    /** True once the end state matches the recording. */
    verify() {
      return this.done && stateHash(this.g) === this.replay.hash;
    }
  };
  function parseReplay(text) {
    try {
      const r = JSON.parse(text);
      if (!r || r.v !== REPLAY_VERSION || !r.setup || !Array.isArray(r.cmds) || typeof r.ticks !== "number") return null;
      if (!Number.isFinite(r.setup.seed) || !Array.isArray(r.setup.factions)) return null;
      if (!r.cmds.every((e) => Array.isArray(e) && typeof e[0] === "number" && [0, 1, 2, 3].includes(e[1]) && e[2] && typeof e[2].t === "string")) return null;
      return r;
    } catch {
      return null;
    }
  }
  var REPLAY_KEY = "vitrea.replays";
  var MAX_REPLAYS = 12;
  function loadReplays(store) {
    try {
      const list = JSON.parse(store?.getItem(REPLAY_KEY) ?? "[]");
      return Array.isArray(list) ? list.map((r) => parseReplay(JSON.stringify(r))).filter((r) => !!r) : [];
    } catch {
      return [];
    }
  }
  function saveReplay(store, r) {
    if (!store) return false;
    let list = [r, ...loadReplays(store).filter((x) => x.id !== r.id)].slice(0, MAX_REPLAYS);
    while (list.length > 0) {
      try {
        store.setItem(REPLAY_KEY, JSON.stringify(list));
        return list.includes(r);
      } catch {
        list = list.slice(0, -1);
      }
    }
    return false;
  }
  function deleteReplay(store, id) {
    if (!store) return;
    try {
      store.setItem(REPLAY_KEY, JSON.stringify(loadReplays(store).filter((r) => r.id !== id)));
    } catch {
    }
  }
  function clock(ticks) {
    const s = Math.floor(ticks * STEP2);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }

  // src/main.ts
  var stopTitle = null;
  var STEP3 = 1 / 60;
  function el(id) {
    return document.getElementById(id);
  }
  var LEVEL_LABELS = { easy: "Easy", normal: "Normal", hard: "Hard" };
  var REJOIN_WAIT = 120;
  var LAUNCH_KEY = "vitrea.launch";
  function navigate(query) {
    if (window.top === window) {
      location.search = query;
      return;
    }
    try {
      sessionStorage.setItem(LAUNCH_KEY, query);
    } catch {
    }
    location.reload();
  }
  function launchQuery() {
    if (location.search) return new URLSearchParams(location.search);
    try {
      const saved = sessionStorage.getItem(LAUNCH_KEY);
      sessionStorage.removeItem(LAUNCH_KEY);
      if (saved) return new URLSearchParams(saved);
    } catch {
    }
    return new URLSearchParams();
  }
  function showMenu(settings) {
    const menu = el("menu");
    const seed = el("menu-seed");
    const level = el("menu-ai");
    const storms = el("menu-storms");
    const edge = el("menu-edge");
    edge.checked = settings.edgeScroll;
    const fog = el("menu-fog");
    const enemy = el("menu-enemy");
    const speed = el("menu-speed");
    speed.value = settings.speed;
    const modeSelect = el("menu-mode");
    modeSelect.value = settings.mode;
    const weatherSelect = el("menu-weather");
    weatherSelect.value = settings.weather;
    const timeSelect = el("menu-time");
    timeSelect.value = settings.time;
    seed.value = String(settings.seed);
    level.value = settings.difficulty;
    storms.checked = settings.hazards;
    fog.checked = settings.fog;
    enemy.value = settings.enemyFaction;
    buildFactionCards(settings.faction);
    buildCampaign(settings);
    buildReplays();
    buildOnline(() => {
      const faction = document.querySelector('input[name="faction"]:checked')?.value ?? "concord";
      return {
        ...settings,
        seed: Number(seed.value) || settings.seed,
        hazards: storms.checked,
        fog: fog.checked,
        faction,
        speed: speed.value,
        edgeScroll: edge.checked,
        weather: weatherSelect.value,
        time: timeSelect.value
      };
    });
    menu.hidden = false;
    const wrap2 = menu.querySelector(".wrap");
    stopTitle = startTitleBackground(el("menu-bg"), () => wrap2?.getBoundingClientRect() ?? null);
    const paintMap = (canvas, n) => {
      const mode = modeSelect.value;
      const m = mode === "1v1" ? generateMap(n) : generateMap(n, MAP4, MAP4, 4);
      const bases = m.starts ? MODES[mode].sides.map((s) => ({ at: m.starts[MODES[mode].corners[s]], colour: SIDE_COLOURS[s] })) : void 0;
      canvas.width = m.w;
      canvas.height = m.h;
      canvas.getContext("2d").putImageData(new ImageData(previewPixels(m, bases), m.w, m.h), 0, 0);
      return m;
    };
    const picker = el("map-picker");
    const info = el("map-info");
    const cards = MAP_POOL.map((p) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "map-card";
      card.title = `${p.name} \u2014 ${p.blurb}`;
      card.setAttribute("role", "option");
      const c = document.createElement("canvas");
      paintMap(c, p.seed);
      const name = document.createElement("span");
      name.textContent = p.name;
      card.append(c, name);
      card.addEventListener("click", () => {
        seed.value = String(p.seed);
        showMap();
      });
      picker.append(card);
      return { card, seed: p.seed };
    });
    const infoCanvas = document.createElement("canvas");
    const showMap = () => {
      const n = Math.floor(Number(seed.value));
      if (!(n >= 1 && n <= 99999)) return;
      for (const c of cards) {
        c.card.classList.toggle("selected", c.seed === n);
        c.card.setAttribute("aria-selected", String(c.seed === n));
      }
      const m = paintMap(infoCanvas, n);
      const named = MAP_POOL.find((p) => p.seed === n);
      const text = document.createElement("div");
      const title = document.createElement("b");
      title.textContent = mapName(n);
      const blurb = document.createElement("p");
      blurb.textContent = named?.blurb ?? "A map made from this number. Every number is a different map.";
      const traits = document.createElement("div");
      traits.className = "traits";
      for (const t of describeTraits(mapTraits(m))) {
        const s = document.createElement("span");
        s.textContent = t;
        traits.append(s);
      }
      text.append(title, blurb, traits);
      info.replaceChildren(infoCanvas, text);
    };
    seed.addEventListener("input", showMap);
    showMap();
    modeSelect.addEventListener("change", () => {
      cards.forEach((c, i) => paintMap(c.card.querySelector("canvas"), MAP_POOL[i].seed));
      showMap();
    });
    el("menu-random").addEventListener("click", () => {
      seed.value = String(randomSeed());
      showMap();
    });
    el("menu-bench").addEventListener("click", () => navigate("bench=1"));
    el("menu-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const faction = document.querySelector('input[name="faction"]:checked')?.value ?? "concord";
      const chosen = parseSettings(
        settingsToQuery(
          {
            seed: Number(seed.value),
            difficulty: level.value,
            hazards: storms.checked,
            fog: fog.checked,
            faction,
            enemyFaction: enemy.value,
            speed: speed.value,
            edgeScroll: edge.checked,
            mode: modeSelect.value,
            weather: weatherSelect.value,
            time: timeSelect.value
          },
          false
        )
      );
      save(chosen);
      const picked = resolveFactions(chosen, Math.random);
      navigate(settingsToQuery({ ...chosen, faction: picked.player, enemyFaction: picked.enemy }, true).toString());
    });
    seed.focus();
  }
  function buildFactionCards(selected) {
    const box2 = el("menu-factions");
    const card = (value, title, blurb, perks) => {
      const label = document.createElement("label");
      label.className = `faction faction-${value}`;
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "faction";
      input.value = value;
      input.checked = value === selected;
      const h = document.createElement("b");
      h.textContent = title;
      const p = document.createElement("span");
      p.className = "blurb";
      p.textContent = blurb;
      const ul = document.createElement("ul");
      for (const perk of perks) {
        const li = document.createElement("li");
        li.textContent = perk;
        ul.append(li);
      }
      if (value !== "random") label.append(Object.assign(emblem(value), { className: "emblem big" }));
      label.append(input, h, p, ul);
      box2.append(label);
    };
    for (const id of FACTION_IDS) card(id, FACTIONS[id].label, FACTIONS[id].blurb, FACTIONS[id].perks);
    card("random", "Random", "Let the frontier decide.", []);
  }
  var SESSION_KEY = "vitrea.online";
  var SESSION_MAX_AGE = 3 * 60 * 60 * 1e3;
  function saveSession(s) {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(s));
    } catch {
    }
  }
  function loadSession() {
    try {
      const s = JSON.parse(localStorage.getItem(SESSION_KEY) ?? "null");
      return s && Date.now() - s.at < SESSION_MAX_AGE ? s : null;
    } catch {
      return null;
    }
  }
  function clearSession() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
    }
  }
  async function claimStation(id) {
    const s = new Station(id);
    try {
      await s.whenReady();
      return s;
    } catch {
      s.destroy();
      const spare = new Station(null);
      await spare.whenReady();
      return spare;
    }
  }
  function buildOnline(current2) {
    const status = el("online-status");
    const hostBtn = el("host-btn");
    const joinBtn = el("join-btn");
    const rejoinBtn = el("rejoin-btn");
    const codeInput = el("join-code");
    let station = null;
    if (window.top !== window) {
      hostBtn.disabled = joinBtn.disabled = codeInput.disabled = true;
      status.textContent = "Online play needs the full game site; it doesn't work inside this embedded preview.";
      return;
    }
    const say = (html) => status.innerHTML = html;
    const busy = (on2) => hostBtn.disabled = joinBtn.disabled = rejoinBtn.disabled = on2;
    const fail = (text) => {
      station?.destroy();
      station = null;
      busy(false);
      const span2 = document.createElement("span");
      span2.className = "err";
      span2.textContent = text;
      status.replaceChildren(span2);
    };
    const pick2 = (choice, not) => {
      if (choice !== "random") return choice;
      const options = FACTION_IDS.filter((f) => f !== not);
      return options[Math.floor(Math.random() * options.length)];
    };
    const session = loadSession();
    if (session) {
      rejoinBtn.hidden = false;
      rejoinBtn.textContent = `Rejoin game ${session.code}`;
    }
    hostBtn.addEventListener("click", async () => {
      station?.destroy();
      busy(true);
      say("Setting up\u2026");
      const code = makeCode();
      station = new Station(stationId(code, 0));
      station.onError = fail;
      try {
        await station.whenReady();
      } catch {
        return;
      }
      say(`Send your friend this code: <span class="code">${code}</span><br>Waiting for them to join\u2026`);
      const host = station;
      host.onConnection = (link) => {
        host.onConnection = (extra) => extra.close();
        say("Friend connected. Starting\u2026");
        link.onMessage((m) => {
          const msg = m;
          if (msg.type !== "hello") return;
          const s = current2();
          const mine = pick2(s.faction);
          const theirs = pick2(msg.faction ?? "random", mine);
          const factions = [mine, theirs];
          link.send({ type: "start", seed: s.seed, hazards: s.hazards, fog: s.fog, speed: s.speed, factions, weather: s.weather, time: s.time });
          start({ ...s }, void 0, { station: host, link, code, local: 0, factions });
        });
      };
    });
    const join = async () => {
      const code = cleanCode(codeInput.value);
      if (code.length !== 5) return fail("Room codes are 5 letters and numbers.");
      station?.destroy();
      busy(true);
      say("Connecting\u2026");
      try {
        station = await claimStation(stationId(code, 1));
        const guest = station;
        const link = await guest.connect(stationId(code, 0));
        say("Connected. Waiting for the host to start\u2026");
        link.onMessage((m) => {
          const msg = m;
          if (msg.type !== "start" || !msg.factions) return;
          const s = current2();
          start(
            { ...s, seed: msg.seed ?? s.seed, hazards: !!msg.hazards, fog: msg.fog !== false, speed: msg.speed ?? "normal", weather: msg.weather === "dust" ? "dust" : "clear", time: TIME_MODES.find((t) => t === msg.time) ?? "day" },
            void 0,
            { station: guest, link, code, local: 1, factions: msg.factions }
          );
        });
        link.send({ type: "hello", faction: current2().faction });
      } catch (e) {
        fail(e instanceof Error && e.message.startsWith("No answer") ? "No game with that code is open. Check it and try again." : e.message);
      }
    };
    joinBtn.addEventListener("click", join);
    codeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") void join();
    });
    rejoinBtn.addEventListener("click", async () => {
      const s = loadSession();
      if (!s) return fail("That game has ended.");
      station?.destroy();
      busy(true);
      say(`Reconnecting to game <b>${s.code}</b>\u2026`);
      try {
        station = await claimStation(stationId(s.code, s.side === 0 ? 0 : 1));
        const me = station;
        const link = await me.connect(stationId(s.code, s.side === 0 ? 1 : 0));
        say("Connected. Fetching the game\u2026");
        link.onMessage((m) => {
          const msg = m;
          if (msg.type !== "catchup" || !msg.data) return;
          const base = current2();
          start(
            { ...base, seed: s.seed, hazards: s.hazards, fog: s.fog, speed: s.speed },
            void 0,
            { station: me, link, code: s.code, local: s.side, factions: s.factions, catchUp: msg.data }
          );
        });
        link.send({ type: "rejoin", fresh: true });
      } catch {
        clearSession();
        rejoinBtn.hidden = true;
        fail("Couldn't reach your opponent. They may have left the game.");
      }
    });
  }
  function missionQuery(id, settings) {
    const q = settingsToQuery(settings, true);
    q.set("mission", id);
    return q.toString();
  }
  function buildCampaign(settings) {
    const list = el("campaign-list");
    const menuSound = new Sound();
    const readBriefing = async (id, still) => {
      menuSound.ensure();
      for (let t = 0; t < 50 && !menuSound.samples.loaded; t++) await new Promise((r) => setTimeout(r, 100));
      if (still()) menuSound.voice("briefing", [briefingKey(id)], true);
    };
    const completed = loadProgress();
    let open = null;
    [TUTORIAL, ...MISSIONS].forEach((m, k) => {
      const i = k - 1;
      const training = m === TUTORIAL;
      const unlocked = training || isUnlocked(completed, i);
      const won = completed.includes(m.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `mission${won ? " won" : ""}${training ? " training" : ""}`;
      button.disabled = !unlocked;
      const title = document.createElement("span");
      title.textContent = m.title;
      const status = document.createElement("span");
      status.className = "status";
      status.textContent = won ? "Complete" : training ? "Start here" : unlocked ? FACTIONS[m.faction].label : "Locked";
      if (unlocked && !won && !training) status.prepend(emblem(m.faction));
      button.append(title, status);
      list.append(button);
      button.addEventListener("click", () => {
        const wasOpen = open?.button === button;
        if (open) {
          open.button.classList.remove("open");
          open.briefing.remove();
          open = null;
        }
        menuSound.stopVoice("briefing");
        if (wasOpen) return;
        const briefing = describeMission(m, () => navigate(missionQuery(m.id, settings)));
        button.after(briefing);
        button.classList.add("open");
        open = { button, briefing };
        void readBriefing(m.id, () => open?.button === button);
      });
    });
  }
  function describeMission(m, begin) {
    const box2 = document.createElement("div");
    box2.className = "briefing";
    for (const text of m.briefing) {
      const p = document.createElement("p");
      p.textContent = text;
      box2.append(p);
    }
    const h = document.createElement("h3");
    h.textContent = "Objectives";
    const ul = document.createElement("ul");
    for (const o of m.objectives) {
      const li = document.createElement("li");
      li.textContent = o.text;
      if (o.bonus) li.className = "bonus";
      ul.append(li);
    }
    const go = document.createElement("button");
    go.type = "button";
    go.className = "btn";
    go.textContent = "Begin mission";
    go.addEventListener("click", begin);
    box2.append(h, ul, go);
    return box2;
  }
  function labelControls() {
    const keys = prefs().keys;
    for (const dt of document.querySelectorAll("#controls dt[data-keys]")) {
      dt.textContent = (dt.dataset.keys ?? "").replace(/\{(\w+)\}/g, (_, a) => keyLabel(keys[a] ?? ""));
    }
  }
  function boot() {
    initSettings();
    labelControls();
    onPrefs(labelControls);
    el("menu-settings").addEventListener("click", () => openSettings());
    const params = launchQuery();
    const settings = parseSettings(params, loadSaved());
    const replayId = params.get("replay");
    if (replayId) {
      const r = findReplay(replayId);
      if (r) return start(settings, r.setup.mission ? missionById(r.setup.mission) : void 0, void 0, false, { replay: r, from: Math.max(0, Number(params.get("t")) || 0) });
      showMenu(settings);
      el("replay-status").textContent = "That replay isn't here any more.";
      return;
    }
    if (params.get("bench") === "1") {
      start({ ...settings, seed: BENCH.seed, difficulty: "normal", faction: "concord", enemyFaction: "shardbound", hazards: true, fog: false, speed: "normal" }, void 0, void 0, true);
    } else if (params.get("play") === "1") start(settings, missionById(params.get("mission")));
    else showMenu(settings);
  }
  function storage() {
    try {
      return localStorage;
    } catch {
      return void 0;
    }
  }
  var REPLAY_FILE_KEY = "vitrea.replayFile";
  function findReplay(id) {
    if (id === "file") {
      try {
        return parseReplay(sessionStorage.getItem(REPLAY_FILE_KEY) ?? "");
      } catch {
        return null;
      }
    }
    return loadReplays(storage()).find((r) => r.id === id) ?? null;
  }
  function watchReplay(r, from = 0) {
    const t = from > 0 ? `&t=${from}` : "";
    if (loadReplays(storage()).some((x) => x.id === r.id)) return navigate(`replay=${encodeURIComponent(r.id)}${t}`);
    try {
      sessionStorage.setItem(REPLAY_FILE_KEY, JSON.stringify(r));
      navigate(`replay=file${t}`);
    } catch {
    }
  }
  function downloadReplay(r) {
    const blob = new Blob([JSON.stringify(r)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    const d = new Date(r.at);
    const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}-${String(d.getHours()).padStart(2, "0")}${String(d.getMinutes()).padStart(2, "0")}`;
    a.download = `vitrea-replay-${stamp}.json`;
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 5e3);
  }
  function replayWon(r) {
    return r.result ? r.result === "victory" === (r.local === 0) : null;
  }
  function buildReplays() {
    const list = el("replay-list");
    const status = el("replay-status");
    const render2 = () => {
      const replays = loadReplays(storage());
      list.replaceChildren();
      if (replays.length === 0) {
        const p = document.createElement("p");
        p.className = "online-hint";
        p.textContent = "No replays yet. Every game you play is recorded here.";
        list.append(p);
        return;
      }
      for (const r of replays) {
        const row = document.createElement("div");
        row.className = "replay-row";
        const text = document.createElement("div");
        const title = document.createElement("b");
        title.textContent = r.title;
        const meta = document.createElement("span");
        const won = replayWon(r);
        const when = new Date(r.at).toLocaleString(void 0, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
        meta.textContent = `${when} \xB7 ${clock(r.ticks)} \xB7 ${won === null ? "Unfinished" : won ? "Won" : "Lost"}`;
        meta.className = won === null ? "" : won ? "won" : "lost";
        text.append(title, meta);
        const watch = document.createElement("button");
        watch.type = "button";
        watch.className = "btn";
        watch.textContent = "Watch";
        watch.addEventListener("click", () => watchReplay(r));
        const save2 = document.createElement("button");
        save2.type = "button";
        save2.className = "btn ghost icon";
        save2.title = "Save as a file";
        save2.textContent = "\u2913";
        save2.addEventListener("click", () => downloadReplay(r));
        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn ghost icon";
        del.title = "Delete";
        del.textContent = "\u2715";
        let armed = 0;
        del.addEventListener("click", () => {
          if (performance.now() - armed > 3e3) {
            armed = performance.now();
            del.textContent = "Sure?";
            setTimeout(() => del.textContent = "\u2715", 3e3);
            return;
          }
          deleteReplay(storage(), r.id);
          render2();
        });
        row.append(text, watch, save2, del);
        list.append(row);
      }
    };
    render2();
    el("replay-file").addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const r = parseReplay(await file.text());
      if (!r) {
        status.textContent = "That file isn't a Vitrea replay (or it's from a different version).";
        return;
      }
      saveReplay(storage(), r);
      watchReplay(r);
    });
  }
  function lineupNodes(g) {
    const side = (s) => {
      const span2 = document.createElement("span");
      span2.className = "side";
      span2.append(emblem(g.factions[s]), FACTIONS[g.factions[s]].label);
      return span2;
    };
    const word = (t) => document.createTextNode(` ${t} `);
    if (g.mode === "1v1") return [side(0), word("vs"), side(1)];
    if (g.mode === "2v2") return [side(0), word("+"), side(2), word("vs"), side(1), word("+"), side(3)];
    return g.sides.flatMap((s, i) => i ? [word("\xB7"), side(s)] : [side(s)]);
  }
  function matchup(g) {
    const name = (s) => FACTIONS[g.factions[s]].label;
    if (g.mode === "1v1") return `${name(0)} vs ${name(1)}`;
    if (g.mode === "2v2") return `${name(0)} + ${name(2)} vs ${name(1)} + ${name(3)}`;
    return `${g.sides.length}-way: ${g.sides.map(name).join(", ")}`;
  }
  function progressTag(text) {
    const s = document.createElement("span");
    s.className = "progress";
    s.textContent = ` ${text}`;
    return s;
  }
  function playScene(lines2, factions) {
    const box2 = el("scene");
    const pic = box2.querySelector(".scene-pic");
    const name = box2.querySelector(".scene-name");
    const text = box2.querySelector(".scene-line");
    const bars = el("scene-bars");
    return new Promise((done) => {
      let i = -1;
      let shown = 0;
      let timer = 0;
      const finish = () => {
        clearInterval(timer);
        box2.hidden = true;
        bars.hidden = true;
        window.removeEventListener("keydown", onKey, true);
        box2.removeEventListener("click", next);
        done();
      };
      const next = () => {
        const line = lines2[i];
        if (line && shown < line.text.length) {
          shown = line.text.length;
          text.textContent = line.text;
          return;
        }
        if (++i >= lines2.length) return finish();
        const l = lines2[i];
        pic.src = portraitOf(l.who, l.side);
        pic.alt = l.name;
        box2.dataset.side = String(l.side);
        name.replaceChildren(emblem(factions[l.side]), l.name);
        shown = 0;
        text.textContent = "";
        clearInterval(timer);
        timer = window.setInterval(() => {
          shown = Math.min(l.text.length, shown + 2);
          text.textContent = l.text.slice(0, shown);
          if (shown >= l.text.length) clearInterval(timer);
        }, 30);
      };
      const onKey = (e) => {
        if (e.key === "Escape") finish();
        else if (e.key === "Enter" || e.key === " ") next();
        else return;
        e.preventDefault();
        e.stopPropagation();
      };
      window.addEventListener("keydown", onKey, true);
      box2.addEventListener("click", next);
      box2.hidden = false;
      bars.hidden = false;
      next();
    });
  }
  var REPLAY_SPEEDS = [0.5, 1, 2, 4, 8];
  function start(settings, mission, online, bench = false, replayView) {
    el("menu").hidden = true;
    stopTitle?.();
    stopTitle = null;
    const watching = replayView?.replay ?? null;
    const playback = watching ? new ReplayPlayer(watching) : null;
    const sides = watching ? { player: watching.setup.factions[0], enemy: watching.setup.factions[1] } : online ? { player: online.factions[0], enemy: online.factions[1] } : mission ? { player: mission.faction, enemy: mission.enemyFaction } : resolveFactions(settings, mulberry32(settings.seed * 31 + 7));
    const seed = watching?.setup.seed ?? mission?.seed ?? settings.seed;
    const difficulty = watching?.setup.difficulty ?? mission?.difficulty ?? settings.difficulty;
    const mode = watching ? watching.setup.mode ?? "1v1" : online || mission || bench ? "1v1" : settings.mode;
    const lineup = watching ? watching.setup.factions : sideFactions(mode, sides.player, sides.enemy, settings.enemyFaction, mulberry32(seed * 131 + 9));
    const game = playback ? playback.g : mission ? createMissionGame(mission) : createGame(seed, difficulty, {
      hazards: settings.hazards,
      fog: settings.fog,
      playerFaction: sides.player,
      enemyFaction: sides.enemy,
      factions: lineup,
      pvp: !!online,
      mode,
      weather: watching?.setup.weather ?? (mission ? void 0 : settings.weather),
      time: watching?.setup.time ?? (mission ? void 0 : settings.time)
    });
    if (online) {
      game.local = online.local;
      game.fog = game.fogs[online.local];
    }
    if (watching) game.local = watching.local;
    const recorder = bench || watching || mission?.sequential ? null : new ReplayRecorder(
      {
        seed,
        difficulty,
        hazards: settings.hazards,
        fog: settings.fog,
        factions: lineup,
        pvp: !!online,
        mission: mission?.id,
        mode,
        weather: settings.weather,
        time: settings.time
      },
      game.local,
      `${online ? "Online \xB7 " : ""}${matchup(game)} \xB7 ${mission ? mission.title : mapName(seed)}`
    );
    let savedReplay = null;
    const keepReplay = () => {
      if (!recorder || savedReplay?.result) return savedReplay;
      if (!savedReplay || savedReplay.ticks !== game.tick || savedReplay.result !== game.result) {
        savedReplay = recorder.finish(game);
        saveReplay(storage(), savedReplay);
      }
      return savedReplay;
    };
    window.addEventListener("pagehide", () => {
      if (recorder && game.tick > 60 * 30) keepReplay();
    });
    if (watching) document.body.classList.add("replaying");
    if (mission) document.title = `${mission.title.replace(/^\d+\. /, "")} \u2014 Vitrea`;
    el("difficulty").textContent = watching?.setup.pvp || online ? "Online" : LEVEL_LABELS[difficulty];
    el("factions").replaceChildren(...lineupNodes(game));
    el("factions").title = matchup(game);
    el("map-seed").textContent = mapName(seed).replace(/^Map /, "");
    el("map-seed").title = `Map ${seed}`;
    let paused = false;
    let speed = settings.speed;
    const speedLabel = el("speed");
    const showSpeed = () => speedLabel.textContent = SPEED_LABELS[speed];
    showSpeed();
    const pauseOverlay = el("paused");
    const sound = new Sound();
    const muteButton = el("mute");
    const showMute = () => {
      muteButton.textContent = sound.muted ? "\u{1F507}" : "\u{1F50A}";
      muteButton.title = sound.muted ? "Sound off (M)" : "Sound on (M)";
    };
    showMute();
    el("settings-btn").addEventListener("click", (e) => {
      e.currentTarget.blur();
      const wasPaused = paused;
      if (!online) paused = true;
      openSettings(() => {
        if (!online) paused = wasPaused;
      });
    });
    muteButton.addEventListener("click", () => {
      sound.toggleMute();
      showMute();
      muteButton.blur();
    });
    const perf = new PerfMeter();
    const perfBox = el("perf");
    perfBox.hidden = !(bench || launchQuery().get("perf") === "1" || new URLSearchParams(location.search).get("perf") === "1");
    let perfShownAt = 0;
    const gpu = graphicsInfo();
    const benchRun = bench ? new Benchmark(game) : null;
    window.perf = perf;
    const controls = el("controls");
    window.addEventListener("keydown", (e) => {
      if (typingIn(e.target)) return;
      if (e.code === keyFor("controls") || keyFor("controls") === "Slash" && (e.key === "/" || e.key === "?")) {
        e.preventDefault();
        controls.hidden = !controls.hidden;
        return;
      }
      if (e.key === "Escape" && !controls.hidden) controls.hidden = true;
      if (e.code === keyFor("perf")) {
        e.preventDefault();
        perfBox.hidden = !perfBox.hidden;
      }
    });
    window.addEventListener("keydown", (e) => {
      if (typingIn(e.target)) return;
      if (e.code === keyFor("mute")) {
        sound.toggleMute();
        showMute();
      }
      const faster = e.code === "Equal" || e.code === "NumpadAdd";
      const slower = e.code === "Minus" || e.code === "NumpadSubtract";
      if ((faster || slower) && watching) {
        const i = REPLAY_SPEEDS.indexOf(replaySpeed) + (faster ? 1 : -1);
        setReplaySpeed(REPLAY_SPEEDS[Math.max(0, Math.min(REPLAY_SPEEDS.length - 1, i))]);
        return;
      }
      if ((faster || slower) && !online) {
        const i = SPEED_ORDER.indexOf(speed) + (faster ? 1 : -1);
        speed = SPEED_ORDER[Math.max(0, Math.min(SPEED_ORDER.length - 1, i))];
        showSpeed();
        return;
      }
      if (e.code !== keyFor("pause") || game.result || online || inScene) return;
      setPaused(!paused);
    });
    const setPaused = (on2) => {
      paused = on2;
      pauseOverlay.hidden = !paused;
      rpPlay.textContent = paused ? "\u25B6" : "\u23F8";
      rpPlay.title = paused ? "Play (P)" : "Pause (P)";
    };
    const rpPlay = el("rp-play");
    const rpSpeed = el("rp-speed");
    const rpSeek = el("rp-seek");
    const rpTime = el("rp-time");
    const rpView = el("rp-view");
    let replaySpeed = 1;
    let seekTarget = replayView?.from ? replayView.from : null;
    let seeking = false;
    const setReplaySpeed = (s) => {
      replaySpeed = s;
      rpSpeed.value = String(s);
      speedLabel.textContent = `Replay ${s}\xD7`;
    };
    if (watching && playback) {
      el("replay-bar").hidden = false;
      for (const s of REPLAY_SPEEDS) rpSpeed.append(new Option(`${s === 0.5 ? "\xBD" : s}\xD7`, String(s)));
      setReplaySpeed(1);
      rpSeek.max = String(watching.ticks);
      rpSpeed.addEventListener("change", () => {
        setReplaySpeed(Number(rpSpeed.value));
        rpSpeed.blur();
      });
      rpPlay.addEventListener("click", () => {
        if (!game.result) setPaused(!paused);
        rpPlay.blur();
      });
      el("rp-restart").addEventListener("click", () => watchReplay(watching));
      el("rp-exit").addEventListener("click", () => navigate(settingsToQuery(settings, false).toString()));
      rpSeek.addEventListener("input", () => {
        seeking = true;
        rpTime.textContent = `${clock(Number(rpSeek.value))} / ${clock(watching.ticks)}`;
      });
      rpSeek.addEventListener("change", () => {
        seeking = false;
        const to = Number(rpSeek.value);
        rpSeek.blur();
        if (to < game.tick - 30) watchReplay(watching, to);
        else seekTarget = to;
      });
      const allVisible = createFog(game.map.w, game.map.h, false);
      rpView.append(new Option("Whole map", "all"));
      for (const side of game.humans) {
        rpView.append(new Option(`${FACTIONS[game.factions[side]].label}'s view${watching.setup.pvp && side === watching.local ? " (yours)" : ""}`, String(side)));
      }
      const setView = (v) => {
        if (v === "all") game.fog = allVisible;
        else {
          game.local = Number(v);
          game.fog = game.fogs[game.local];
        }
      };
      setView("all");
      rpView.addEventListener("change", () => {
        setView(rpView.value);
        rpView.blur();
      });
    }
    const view = el("view");
    const minimap = el("minimap");
    const credits = el("credits");
    const coresEl = el("cores");
    const storageBox = document.querySelector(".storage");
    const storageBar = el("storage-bar");
    const storageText = el("storage-text");
    const power2 = el("power");
    const infoCard = new InfoCard(el("info"));
    const notices = el("notices");
    const result = el("result");
    const ability = el("ability");
    let lastAbility = "";
    const again = el("again");
    const next = mission ? MISSIONS[MISSIONS.indexOf(mission) + 1] : void 0;
    again.addEventListener("click", () => {
      if (watching) watchReplay(watching);
      else if (!mission) navigate(settingsToQuery({ ...settings, seed: seed % 99999 + 1 }, true).toString());
      else if (game.result === "victory" && next) navigate(missionQuery(next.id, settings));
      else navigate(missionQuery(mission.id, settings));
    });
    const objectives = el("objectives");
    let lastObjectives = "";
    const showObjectives = () => {
      const m = game.mission;
      if (!m) return;
      const key = m.done.join() + m.def.objectives.map((o) => o.progress?.(game) ?? "").join("|");
      if (key === lastObjectives) return;
      lastObjectives = key;
      const head = document.createElement("b");
      head.textContent = m.def.title;
      if (m.def.sequential) {
        const current2 = m.done.indexOf(false);
        head.textContent = current2 < 0 ? `${m.def.title} \u2014 done` : `${m.def.title} \u2014 step ${current2 + 1} of ${m.def.objectives.length}`;
        const rows = [head];
        m.def.objectives.forEach((o, i) => {
          if (current2 >= 0 && i > current2) return;
          const d = document.createElement("div");
          d.textContent = o.text;
          d.className = m.done[i] ? "done" : "current";
          if (o.progress && !m.done[i]) d.append(progressTag(o.progress(game)));
          rows.push(d);
          if (i === current2 && o.hint) {
            const p = document.createElement("p");
            p.className = "hint";
            p.textContent = o.hint;
            rows.push(p);
          }
        });
        objectives.replaceChildren(...rows);
        objectives.hidden = false;
        const point = current2 >= 0 ? m.def.objectives[current2].point : void 0;
        for (const b of document.querySelectorAll(".build")) {
          b.classList.toggle("coach", !!point && b.querySelector(".name")?.textContent === point);
        }
        return;
      }
      objectives.replaceChildren(
        head,
        ...m.def.objectives.map((o, i) => {
          const d = document.createElement("div");
          d.textContent = o.text;
          d.className = [m.done[i] ? "done" : "", o.bonus ? "bonus" : ""].join(" ").trim();
          if (o.progress && !m.done[i]) d.append(progressTag(o.progress(game)));
          return d;
        })
      );
      objectives.hidden = false;
    };
    let inScene = false;
    if (mission?.scene && !watching && !bench) {
      inScene = true;
      paused = true;
      void playScene(mission.scene, game.factions).then(() => {
        inScene = false;
        paused = false;
      });
    }
    el("to-menu").addEventListener("click", () => {
      navigate(settingsToQuery(settings, false).toString());
    });
    const cam = { x: 0, y: 0, w: 0, h: 0 };
    const renderer = new Renderer(view, minimap, game.map, game.factions, game.sides);
    renderer.radarAlways = !!watching;
    const input = new Input(game, cam, view, minimap);
    const lockstep = online ? new Lockstep(game, online.local, (m) => online.link?.send(m)) : null;
    if (lockstep && recorder) lockstep.onApply = (owner, c, tick) => recorder.record(tick, owner, c);
    const complain = (text) => {
      notify(game, text);
      emit(game, { kind: "error" });
    };
    const issue = (c) => {
      if (watching) return;
      if (lockstep && (online?.link || c.t !== "surrender")) return lockstep.issue(c);
      recorder?.record(game.tick, game.local, c);
      const problem = applyCommand(game, game.local, c);
      if (problem) complain(problem);
    };
    input.issue = issue;
    let opponentGoneAt = null;
    let owesCatchUp = null;
    if (lockstep && online) {
      lockstep.onError = complain;
      lockstep.onDesync = () => notify(game, "Warning: the two games have drifted out of sync.");
      if (online.catchUp) lockstep.loadCatchUp(online.catchUp);
      saveSession({ code: online.code, side: online.local, seed, hazards: settings.hazards, fog: settings.fog, speed: settings.speed, factions: online.factions, at: Date.now() });
      const attach = (link) => {
        online.link = link;
        opponentGoneAt = null;
        link.onMessage((m) => {
          const msg = m;
          if (msg.type === "turn" || msg.type === "hash") lockstep.receive(m);
          else if (msg.type === "chat") {
            const text = cleanChat(m.text);
            if (text) showChat(FACTIONS[game.factions[online.local === 0 ? 1 : 0]].label, text, "theirs");
          } else if (msg.type === "rejoin" && msg.fresh) owesCatchUp = link;
          else if (msg.type === "rejoin") {
            link.send({ type: "resume", turn: lockstep.turn });
            lockstep.resendFrom(msg.turn ?? 0);
          } else if (msg.type === "resume") lockstep.resendFrom(msg.turn ?? 0);
        });
        link.onClose(() => {
          if (online.link !== link || game.result) return;
          online.link = null;
          opponentGoneAt = performance.now();
          notify(game, "Your opponent disconnected.");
          if (online.local === 1) void reconnect();
        });
      };
      const reconnect = async () => {
        while (!online.link && !game.result) {
          try {
            const link = await online.station.connect(stationId(online.code, 0));
            if (online.link || game.result) return link.close();
            attach(link);
            link.send({ type: "rejoin", fresh: false, turn: lockstep.turn });
            return;
          } catch {
            await new Promise((r) => setTimeout(r, 3e3));
          }
        }
      };
      online.station.onConnection = (link) => {
        if (online.link || game.result) return link.close();
        attach(link);
      };
      if (online.link) attach(online.link);
    }
    input.edgeScroll = settings.edgeScroll;
    const sellButton = el("sell");
    const repairButton = el("repair");
    sellButton.addEventListener("click", () => {
      input.toggleMode("sell");
      sellButton.blur();
    });
    repairButton.addEventListener("click", () => {
      input.toggleMode("repair");
      repairButton.blur();
    });
    const modeLabel = el("mode");
    ability.addEventListener("click", () => {
      input.heroAbility();
      ability.blur();
    });
    const sidebar = new Sidebar(el("structures"), el("units"), el("research"), game, {
      beginPlacing: (kind) => {
        input.placing = kind;
        game.selection.clear();
        game.selectedBuilding = null;
      },
      cancelPlacing: () => input.placing = null,
      layWalls: () => input.toggleMode("wall"),
      issue
    });
    const resize = () => {
      view.width = window.innerWidth;
      view.height = window.innerHeight;
      cam.w = view.width;
      cam.h = view.height;
      input.clampCamera();
    };
    window.addEventListener("resize", resize);
    resize();
    input.goHome();
    let last = performance.now();
    let acc = 0;
    let lastNotices = "";
    let waitingFor = 0;
    const chatLog = el("chat-log");
    const chatInput = el("chat-input");
    const chatLimiter = new ChatLimiter();
    const showChat = (who, text, side) => {
      const line = document.createElement("div");
      line.className = `chat-line ${side}`;
      if (side !== "system") {
        const name = document.createElement("b");
        name.textContent = `${who}: `;
        line.append(name);
      }
      line.append(text);
      chatLog.append(line);
      while (chatLog.children.length > 8) chatLog.firstElementChild?.remove();
      setTimeout(() => line.classList.add("old"), 15e3);
      if (side === "theirs") emit(game, { kind: "chat" });
    };
    const closeChat = () => {
      chatInput.value = "";
      chatInput.hidden = true;
      chatInput.blur();
      chatLog.classList.remove("open");
    };
    if (online) {
      window.addEventListener("keydown", (e) => {
        if (e.key !== "Enter" || typingIn(e.target)) return;
        e.preventDefault();
        chatInput.hidden = false;
        chatLog.classList.add("open");
        chatInput.focus();
      });
      chatInput.addEventListener("keydown", (e) => {
        e.stopPropagation();
        if (e.key === "Escape") return closeChat();
        if (e.key !== "Enter") return;
        const text = cleanChat(chatInput.value);
        if (text) {
          if (!online.link) showChat("", "Not sent: your opponent is away.", "system");
          else if (!chatLimiter.allow(performance.now() / 1e3)) showChat("", "Slow down a little before sending more.", "system");
          else {
            online.link.send({ type: "chat", text });
            showChat("You", text, "mine");
          }
        }
        closeChat();
      });
      chatInput.addEventListener("blur", () => {
        if (!chatInput.value) closeChat();
      });
    }
    const netWait = el("netwait");
    const netWaitText = el("netwait-text");
    const claimVictory = () => {
      if (game.result) return;
      game.result = game.local === 0 ? "victory" : "defeat";
      game.resultReason = "Your opponent left the game.";
      emit(game, { kind: game.result });
    };
    el("claim-btn").addEventListener("click", claimVictory);
    const surrenderBtn = el("surrender");
    let surrenderArmed = 0;
    surrenderBtn.addEventListener("click", () => {
      surrenderBtn.blur();
      if (game.result) return;
      if (performance.now() - surrenderArmed > 3e3) {
        surrenderArmed = performance.now();
        surrenderBtn.textContent = "Click again to surrender";
        surrenderBtn.classList.add("armed");
        setTimeout(() => {
          surrenderBtn.textContent = "Surrender";
          surrenderBtn.classList.remove("armed");
        }, 3e3);
        return;
      }
      issue({ t: "surrender" });
    });
    let music = null;
    const frame = (now) => {
      perf.start();
      if (benchRun && !benchRun.done) {
        if (!perf.recording) perf.record();
        benchRun.update(game);
        input.centreOn(benchRun.x, benchRun.y);
        if (benchRun.done) showBench(perf.stop());
      }
      const dt = Math.min(0.1, (now - last) / 1e3);
      last = now;
      if (!paused) acc += dt * (watching ? replaySpeed : SPEEDS[speed]);
      input.update(dt);
      if (lockstep && lockstep.catchingUp) {
        const t0 = performance.now();
        while (lockstep.catchingUp && performance.now() - t0 < 40) lockstep.advance(600);
        game.events.length = 0;
        game.notices.length = 0;
        acc = 0;
        pauseOverlay.textContent = `CATCHING UP\u2026 ${Math.round(lockstep.catchUpProgress * 100)}%`;
        pauseOverlay.hidden = false;
        if (!lockstep.catchingUp) {
          pauseOverlay.hidden = true;
          input.goHome();
          notify(game, "Back in the game.");
        }
      } else if (lockstep) {
        if (owesCatchUp && lockstep.step === 0) {
          owesCatchUp.send({ type: "catchup", data: lockstep.catchUpData() });
          owesCatchUp = null;
        }
        const ran = lockstep.advance(Math.min(12, Math.floor(acc / STEP3)));
        acc = Math.min(acc - ran * STEP3, STEP3 * 12);
        waitingFor = lockstep.waiting && !game.result ? waitingFor + dt : 0;
        const waitText = waitingFor > 0.6 && opponentGoneAt === null ? "WAITING FOR OPPONENT\u2026" : "";
        if (pauseOverlay.textContent !== (waitText || "PAUSED")) pauseOverlay.textContent = waitText || "PAUSED";
        pauseOverlay.hidden = !waitText;
        const left = opponentGoneAt === null || game.result ? -1 : REJOIN_WAIT - (performance.now() - opponentGoneAt) / 1e3;
        netWait.hidden = left < 0;
        if (left >= 0) {
          const text = `Your opponent disconnected. Waiting for them to rejoin\u2026 ${Math.floor(left / 60)}:${String(Math.floor(left % 60)).padStart(2, "0")}`;
          if (netWaitText.textContent !== text) netWaitText.textContent = text;
          if (left <= 0) claimVictory();
        }
      } else if (playback && watching) {
        if (seekTarget !== null) {
          const t0 = performance.now();
          while (game.tick < seekTarget && !playback.done && performance.now() - t0 < 70) playback.advance(Math.min(240, seekTarget - game.tick));
          game.events.length = 0;
          game.notices.length = 0;
          acc = 0;
          pauseOverlay.textContent = `SKIPPING AHEAD\u2026 ${clock(game.tick)}`;
          pauseOverlay.hidden = false;
          if (game.tick >= seekTarget || playback.done) {
            seekTarget = null;
            pauseOverlay.textContent = "PAUSED";
            pauseOverlay.hidden = !paused;
          }
        } else {
          const cap2 = 12 * Math.max(1, replaySpeed);
          for (let steps = 0; acc >= STEP3 && steps < cap2; steps++) {
            playback.advance(1);
            acc -= STEP3;
          }
          if (acc > STEP3 * cap2) acc = 0;
        }
        if (!seeking) {
          rpSeek.value = String(game.tick);
          const t = `${clock(game.tick)} / ${clock(watching.ticks)}`;
          if (rpTime.textContent !== t) rpTime.textContent = t;
        }
      } else {
        for (let steps = 0; acc >= STEP3 && steps < 12; steps++) {
          update(game, STEP3);
          acc -= STEP3;
        }
        if (acc > STEP3 * 12) acc = 0;
      }
      if (input.placing && !structureOf(game, game.local)?.done) input.placing = null;
      renderer.showAllHealth = input.showAllHealth;
      renderer.aimRing = input.mode === "target" ? { ...input.mouseWorld, r: SUPER.orbitalRadius * TILE } : null;
      sellButton.classList.toggle("on", input.mode === "sell");
      repairButton.classList.toggle("on", input.mode === "repair");
      const modeText = input.mode === "sell" ? "SELL \u2014 click a building for half its price \xB7 right-click or Esc to stop" : input.mode === "repair" ? "REPAIR \u2014 click damaged buildings \xB7 right-click or Esc to stop" : input.mode === "wall" ? "WALLS \u2014 drag a line to lay wall (25 a segment) \xB7 right-click or Esc to stop" : input.mode === "target" ? "TARGET \u2014 click where to fire \xB7 right-click to cancel" : "";
      if (modeLabel.textContent !== modeText) {
        modeLabel.textContent = modeText;
        modeLabel.hidden = !modeText;
      }
      perf.mark();
      renderer.draw(game, cam, input.drag, input.ghost, dt);
      perf.mark();
      sidebar.update();
      if (!music && sound.ctx && sound.musicBus && sound.ctx.state === "running") music = new Player(sound.ctx, sound.musicBus);
      if (music) {
        const cx = cam.x + cam.w / 2;
        const cy = cam.y + cam.h / 2;
        const reach = Math.max(cam.w, cam.h) * 1.2;
        let hits = 0;
        for (const e of game.events) {
          if ((e.kind === "shot" || e.kind === "impact" || e.kind === "explode") && Math.hypot(e.x - cx, e.y - cy) < reach && visibleAt(game, e.x, e.y)) hits += e.kind === "explode" ? 3 : 1;
        }
        music.update(dt, hits);
      }
      sound.playEvents(game, cam);
      sound.updateWind(game, cam);
      sound.updateEngines(game, cam);
      credits.textContent = Math.floor(walletOf(game, game.local).credits).toLocaleString();
      const cap = storageOf(game, game.local);
      const have = walletOf(game, game.local).credits;
      const fill = cap > 0 ? Math.min(1, have / cap) : 1;
      storageBar.style.width = `${Math.round(fill * 100)}%`;
      const storeText = `${Math.floor(have).toLocaleString()} / ${cap.toLocaleString()}`;
      if (storageText.textContent !== storeText) storageText.textContent = storeText;
      storageBox.classList.toggle("slow", fill > STORAGE.slowFrom && fill < 1);
      storageBox.classList.toggle("full", fill >= 1);
      const coreText = String(Math.floor(walletOf(game, game.local).cores));
      if (coresEl.textContent !== coreText) coresEl.textContent = coreText;
      const p = powerInfo(game, game.local);
      power2.textContent = `${p.produced} / ${p.used}`;
      power2.classList.toggle("low", p.low);
      const chosen = [...game.selection].map((id) => game.units.find((u) => u.id === id)).filter((u) => u && u.owner === game.local);
      const hero = chosen.find((u) => u && isHero(u.kind));
      const rig = chosen.find((u) => u && DEPLOYS[u.kind]);
      const packable = game.buildings.find((b) => b.id === game.selectedBuilding && b.owner === game.local && PACKS[b.kind]);
      const ship = chosen.find((u) => u && u.kind === "dropship" && (u.passengers?.length ?? 0) > 0);
      const superB = game.buildings.find((b) => b.id === game.selectedBuilding && b.owner === game.local && SUPERWEAPONS[b.kind]);
      const status = superB ? `${SUPERWEAPONS[superB.kind].name} \u2014 ${superB.cooldown > 0 ? `${Math.floor(superB.cooldown / 60)}:${String(Math.ceil(superB.cooldown % 60) % 60).padStart(2, "0")}` : "ready"}` : ship ? `Unload ${ship.passengers.length} soldier${ship.passengers.length === 1 ? "" : "s"}` : rig ? `Deploy ${BUILDING_STATS[DEPLOYS[rig.kind]].label}${deploySpot(game, rig)?.ok ? "" : " \u2014 not here"}` : packable ? `Pack up into ${UNIT_STATS[PACKS[packable.kind]].label}` : hero ? abilityStatus(hero) : "";
      if (status !== lastAbility) {
        ability.hidden = !status;
        ability.innerHTML = status ? `<kbd>Q</kbd>${status}` : "";
        ability.classList.toggle("cooling", !!hero && !rig && !packable && hero.abilityCd > 0 || !!rig && !deploySpot(game, rig)?.ok);
        lastAbility = status;
      }
      infoCard.update(game);
      const n = game.notices.map((x) => x.text).join("\n");
      if (n !== lastNotices) {
        notices.replaceChildren(
          ...game.notices.map((x) => {
            const d = document.createElement("div");
            d.textContent = x.text;
            return d;
          })
        );
        lastNotices = n;
      }
      showObjectives();
      if (game.result && result.hidden) {
        result.hidden = false;
        music?.finish(game.result === "victory" === (game.local === 0));
        const time = `${Math.floor(game.time / 60)}m ${Math.floor(game.time % 60)}s`;
        const won = game.result === "victory" === (game.local === 0);
        el("result-title").textContent = won ? "Victory" : "Defeat";
        const kept = keepReplay();
        el("watch-replay").hidden = !kept;
        el("save-replay").hidden = !kept && !watching;
        if (watching) {
          const standing = game.sides.filter((s) => game.buildings.some((b) => b.owner === s));
          const winners = game.result === "victory" ? game.sides.filter((s) => game.teams[s] === game.teams[0]) : standing.filter((s) => game.teams[s] !== game.teams[0]);
          const winner = (winners.length ? winners : [game.result === "victory" ? 0 : 1]).map((s) => FACTIONS[game.factions[s]].label).join(" and ");
          el("result-title").textContent = "Replay over";
          const loser = FACTIONS[game.factions[game.result === "victory" ? 1 : 0]].label;
          const reason = game.resultReason.replace(/^You surrendered./, `${loser} surrendered.`).replace(/^Your opponent (surrendered|left the game)./, `${loser} $1.`);
          el("result-text").textContent = `${winner} won after ${time}.${reason ? ` ${reason}` : ""}`;
          again.textContent = "Watch again";
          again.hidden = false;
        } else if (online) {
          el("result-text").textContent = game.resultReason || (won ? `You broke your opponent's base after ${time}.` : "Your base has fallen.");
          again.hidden = true;
          netWait.hidden = true;
          clearSession();
          setTimeout(() => {
            online.link?.close();
            online.station.destroy();
          }, 1500);
        } else if (mission) {
          if (game.result === "victory") saveCompleted(mission.id);
          const bonuses = mission.objectives.filter((o, i) => o.bonus && game.mission?.done[i]).length;
          const bonusText = bonuses ? ` Bonus objectives: ${bonuses}.` : "";
          el("result-text").textContent = game.result === "victory" ? `${mission.title.replace(/^\d+\. /, "")} complete in ${time}.${bonusText}${next ? "" : " The campaign is won."}` : game.resultReason || "Mission failed.";
          again.textContent = game.result === "victory" ? next ? "Next mission" : "Play again" : "Retry mission";
        } else {
          el("result-text").textContent = game.mode === "1v1" ? game.result === "victory" ? `The enemy outpost is destroyed after ${time}.` : "Your base has fallen." : game.result === "victory" ? `Every rival base is destroyed after ${time}.` : game.mode === "2v2" ? "Your team's bases have fallen." : `Your base has fallen after ${time}.`;
        }
      }
      perf.mark();
      perf.end();
      if (!perfBox.hidden && now - perfShownAt > 250) {
        perfShownAt = now;
        const s = summarize(perf.recent);
        const wrecks = game.effects.reduce((n2, e) => n2 + (e.kind === "wreck" ? 1 : 0), 0);
        const lines2 = [
          `<b>${Math.round(s.fps)}</b> FPS \xB7 1% low ${Math.round(s.low1)}`,
          `frame ${s.avgFrame.toFixed(1)} ms \xB7 worst ${Math.round(s.worstFrame)}`,
          `sim ${s.sim.toFixed(1)} \xB7 draw ${s.draw.toFixed(1)} \xB7 ui ${s.ui.toFixed(1)} ms`,
          `units ${game.units.length} \xB7 fx ${game.effects.length} \xB7 wrecks ${wrecks} \xB7 tracks ${renderer.trackCount}`
        ];
        if (gpu.software) lines2.push('<span class="perf-warn">Hardware acceleration is OFF</span>');
        if (benchRun && !benchRun.done) lines2.unshift(`BENCHMARK ${Math.ceil(BENCH.seconds - benchRun.elapsed)}s`);
        perfBox.innerHTML = lines2.join("<br>");
      }
      requestAnimationFrame(frame);
    };
    const showBench = (s) => {
      const verdict = s.fps >= 55 && s.low1 >= 40 ? "Smooth" : s.fps >= 40 ? "Playable" : s.fps >= 25 ? "Struggling" : "Too slow";
      const text = [
        `Vitrea benchmark \u2014 ${verdict}`,
        `Average ${s.fps.toFixed(1)} FPS \xB7 1% low ${s.low1.toFixed(1)} FPS \xB7 worst frame ${Math.round(s.worstFrame)} ms`,
        `Per frame: simulation ${s.sim.toFixed(2)} ms \xB7 drawing ${s.draw.toFixed(2)} ms \xB7 panels ${s.ui.toFixed(2)} ms`,
        `${s.frames} frames over ${BENCH.seconds}s \xB7 peak units ${game.units.length} \xB7 effects ${game.effects.length}`,
        `Screen ${innerWidth}\xD7${innerHeight} at ${devicePixelRatio}x \xB7 canvas ${view.width}\xD7${view.height}`,
        `Graphics: ${gpu.name}`,
        ...gpu.software ? ["WARNING: this browser is drawing without the graphics card (hardware acceleration is off). Turn it on in the browser settings (System \u2192 Use graphics acceleration) and restart the browser for a big speed-up."] : [],
        navigator.userAgent
      ].join("\n");
      el("bench-text").textContent = text;
      el("bench").hidden = false;
    };
    el("watch-replay").addEventListener("click", () => {
      const r = keepReplay();
      if (r) watchReplay(r);
    });
    el("save-replay").addEventListener("click", (e) => {
      e.currentTarget.blur();
      const r = watching ?? keepReplay();
      if (r) downloadReplay(r);
    });
    el("bench-copy").addEventListener("click", async () => {
      const text = el("bench-text").textContent ?? "";
      const button = el("bench-copy");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(el("bench-text"));
        getSelection()?.removeAllRanges();
        getSelection()?.addRange(range);
        button.textContent = "Press Ctrl+C";
      }
    });
    el("bench-again").addEventListener("click", () => navigate("bench=1"));
    el("bench-menu").addEventListener("click", () => navigate(""));
    requestAnimationFrame(frame);
    if (lockstep) {
      setInterval(() => {
        if (!document.hidden) return;
        const now = performance.now();
        acc += Math.min(1.5, (now - last) / 1e3) * SPEEDS[speed];
        last = now;
        const ran = lockstep.advance(Math.min(90, Math.floor(acc / STEP3)));
        acc = Math.min(acc - ran * STEP3, STEP3 * 90);
        game.events.length = 0;
      }, 100);
    }
    Object.assign(window, {
      game,
      issue,
      sound,
      /** Point the camera at a tile. */
      look: (tx, ty) => input.centreOn((tx + 0.5) * TILE, (ty + 0.5) * TILE),
      skip: (seconds) => {
        if (online || watching) return;
        for (let t = 0; t < seconds; t += STEP3) update(game, STEP3);
      }
    });
  }
  boot();
})();
