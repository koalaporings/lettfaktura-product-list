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
        return await Product.findAll({
            order: [['id', 'ASC']]
        });
    });

    fastify.put('/:id', async (request, reply) => {
        const { id } = request.params;
        const updates = request.body;

        try {
            const product = await Product.findByPk(id);
            if (!product) {
                return reply.status(404).send({ error: 'Product not found' });
            }

            await product.update(updates);

            return reply.send(product);
        } catch (error) {
            console.error(error);
            return reply.status(500).send({ error: 'Failed to update product' });
        }
    });

    done();
};

export default textController;