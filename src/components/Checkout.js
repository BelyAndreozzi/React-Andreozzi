import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Modal, Button, Group, TextInput, Checkbox, Box } from '@mantine/core';

function Checkout() {
    const [opened, setOpened] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            saveData: false,
        },

        validate: {
            name: (value) => (value.length < 2 ? 'Tu nombre debe tener al menos dos letras' : null),
            lastName: (value) => (value.length < 2 ? 'Tu apellido debe tener al menos dos letras' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : ' email inválido'),
        },
    });

    return (
        <>
            <Modal centered
                opened={opened}
                onClose={() => setOpened(false)}

                title="Completá los datos."
            >
                <Box sx={{ maxWidth: 300 }} mx="auto">
                    <form onSubmit={form.onSubmit((values) => console.log(values))}> {/* TENGO QUE ALMACENAR LOS DATOS PARA LA DB. PROBLEMAS DEL FUTURO. */}
                        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                        <TextInput label="Last name" placeholder="Last name" {...form.getInputProps('lastName')} />
                        <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />

                        <Checkbox
                            mt="md"
                            label="Quiero guardar mis datos para una futura compra"
                            {...form.getInputProps('saveData', { type: 'checkbox' })}
                        />

                        <Group position="right" mt="md">
                            <Button color="grape" type="submit">Confirmar compra</Button>
                        </Group>
                    </form>
                </Box>


            </Modal>

            <Group position="center">
                <Button color="violet" onClick={() => setOpened(true)}>Finalizar compra</Button>
            </Group>
        </>
    );
}

export { Checkout }