SELECT 
    id,
    (
        (split_part(last, '.', 1)::BIGINT * 16777216 + 
         split_part(last, '.', 2)::BIGINT * 65536 + 
         split_part(last, '.', 3)::BIGINT * 256 + 
         split_part(last, '.', 4)::BIGINT) 
        -
        (split_part(first, '.', 1)::BIGINT * 16777216 + 
         split_part(first, '.', 2)::BIGINT * 65536 + 
         split_part(first, '.', 3)::BIGINT * 256 + 
         split_part(first, '.', 4)::BIGINT)
    ) AS ips_between
FROM ip_addresses;
