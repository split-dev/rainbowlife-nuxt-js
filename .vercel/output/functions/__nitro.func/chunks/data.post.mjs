import { defineEventHandler, readBody, createError } from 'h3';
import fs from 'fs';

const data_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  try {
    fs.writeFileSync("./data/data_v2.json", JSON.stringify(body), "utf-8");
  } catch (e) {
    console.error(e);
    throw createError({
      statusCode: 400,
      statusMessage: "File writing error. Check server console for details."
    });
  }
  return { body };
});

export { data_post as default };
//# sourceMappingURL=data.post.mjs.map
