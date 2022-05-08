# Wiremock

`--record-mappings` - record the request <b> 
`--proxy-all` - proxy requests to the value, but if the mapping exist for the request - wiremock will serve the mapping

---

*url* - for exact match.
*urlPattern* for regex

Mappings are fired by order, one that is created last - will match first. \
Mapping with priority is always first in the line before mappings without priority, max priority is 1 \

