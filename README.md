# AWS S3 Sync by Hash

GitHub Action to sync files to S3 using [`aws-s3-sync-by-hash`][lib].

[lib]: https://github.com/akud/aws-s3-sync-by-hash

## Motivations

Every other AWS S3 Sync tool or Action I've found, which all claim to only
synchronize changed files, do so via timestamp. Timestamps on build systems in
fresh checkouts are not reliable and this results in all files being copied to
the remote bucket every time.

This is typically innocuous, but when a process is listening for files changes,
and running on files that haven't actually changed can cause errors, it is
unacceptable. For such cases, I have this Action.

## Usage

```yaml
- uses: restyled-io/aws-s3-sync-by-hash-action@main
  with:
    root: ./subdir
    bucket: some-bucket
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.aws_access_key_id }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.aws_secret_access_key }}
    AWS_DEFAULT_REGION: us-east-1
```

## Inputs

We mirror the options of the upstream library, with an Input for each option,
with the exception of AWS credential options. See next section.

## Environment

All standard `AWS_` environment variables should be respected.

---

[LICENSE](./LICENSE) | [CHANGELOG](./CHANGELOG.md)
