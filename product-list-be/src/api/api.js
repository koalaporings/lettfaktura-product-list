import Product from '../models/models.js'

const responseTextSchema = {
    response: {
        200: {
        type: "array",
        items: {
            type: "object",
            properties: {
                id: { type: "integer" },
                name: { type: "string" },
                in_price: { type: "integer" },
                price: { type: "integer" },
                unit: { type: "string" },
                stock: { type: "integer" },
                description: { type: "string" }
            }
        }
        }
    }
};

const textController = (fastify, options, done) => {
    fastify.get('/', { schema: responseTextSchema }, async (req, reply) => {
        return await Product.findAll();
    });

    done();
};

export default textController;