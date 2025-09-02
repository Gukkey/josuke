"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var regex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

// Load TLD list from JSON file
var tldData = JSON.parse(_fs["default"].readFileSync("./tld-list-basic.json", "utf8"));
var validTLDs = tldData;
function validate(emailAddress) {
  if (!emailAddress) {
    return false;
  }
  var emailAddressParts = emailAddress.split("@");
  if (emailAddressParts.length !== 2) {
    return false;
  }
  var localPart = emailAddressParts[0];
  var address = emailAddressParts[1];

  // https://en.wikipedia.org/wiki/Email_address#Local-part
  if (localPart.length > 64) {
    return false;
  } else if (address.length > 255) {
    return false;
  }
  var domainParts = address.split(".");
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) {
    return false;
  }

  // Check if TLD is valid
  var tld = domainParts[domainParts.length - 1];
  if (!validTLDs.includes(tld)) {
    return false;
  }
  return regex.test(emailAddress);
}
