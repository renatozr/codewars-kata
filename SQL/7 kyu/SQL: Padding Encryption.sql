SELECT
  rpad(md5, length(sha256), '1') AS md5,
  lpad(sha1, length(sha256), '0') AS sha1,
  sha256
FROM encryption;