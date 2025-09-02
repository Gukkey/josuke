import fs from "fs";

const regex =
  /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

// Load TLD list from JSON file
const tldData = JSON.parse(fs.readFileSync("./tld-list-basic.json", "utf8"));
const validTLDs = tldData;

function validate(emailAddress) {
  if (!emailAddress) {
    return false;
  }

  const emailAddressParts = emailAddress.split("@");

  if (emailAddressParts.length !== 2) {
    return false;
  }

  const localPart = emailAddressParts[0];
  const address = emailAddressParts[1];

  // https://en.wikipedia.org/wiki/Email_address#Local-part
  if (localPart.length > 64) {
    return false;
  } else if (address.length > 255) {
    return false;
  }

  const domainParts = address.split(".");

  if (domainParts.some((part) => part.length > 63)) {
    return false;
  }

  // Check if TLD is valid
  const tld = domainParts[domainParts.length - 1];
  if (!validTLDs.includes(tld)) {
    return false;
  }

  return regex.test(emailAddress);
}

export { validate };
