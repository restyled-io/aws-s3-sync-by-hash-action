const core = require("@actions/core");
const sync = require("@akud/aws-s3-sync-by-hash");

sync({
  bucket: core.getInput("bucket", { required: true }),
  root: core.getInput("root", { required: true }),
  force: core.getInput("force", { required: true }) === "true",
  delete: core.getInput("delete", { required: true }) === "true",
  maxAge: Number(core.getInput("maxAge", { required: true })),
  acl: core.getInput("acl", { required: true }),
});
