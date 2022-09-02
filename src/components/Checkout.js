import { useState, useContext } from 'react';
import { useForm } from '@mantine/form';
import { Modal, Button, Group, TextInput, Checkbox, Box, NumberInput } from '@mantine/core';
import { IconCheck } from "@tabler/icons";
import { showNotification } from '@mantine/notifications';
import { CartContext } from "./CartContext"

function Checkout() {
    const [opened, setOpened] = useState(false)

    const { newOrder, id } = useContext(CartContext)

    const form = useForm({
        initialValues: {
            name: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            saveData: false,
        },

        validate: {
            name: (value) => (value.length < 2 ? 'Tu nombre debe tener al menos dos letras.' : null),
            lastName: (value) => (value.length < 2 ? 'Tu apellido debe tener al menos dos letras.' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'El es email inválido.'),
            mobileNumber: (value) => (value.length < 8 ? 'El número de teléfono inválido.' : null), /* ARREGLAR VALIDACION */   
        },
    });

    return (
        <>
            <Modal centered overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}

                title="Completá los datos."
            >
                <Box sx={{ maxWidth: 300 }} mx="auto">
                    <form onSubmit={form.onSubmit((values) => {newOrder(values)})}>
                        <TextInput label="Nombre" placeholder="Nombre" {...form.getInputProps('name')} />
                        <TextInput label="Apellido" placeholder="Apellido" {...form.getInputProps('lastName')} />
                        <TextInput
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />
                        <NumberInput label="Número de teléfono" placeholder='Nmero de teléfono' hideControls {...form.getInputProps('mobileNumber')} />

                        <Checkbox
                            mt="md"
                            label="Quiero guardar mis datos para una futura compra"
                            {...form.getInputProps('saveData', { type: 'checkbox' })}
                        />

                        <Group position="right" mt="md">
                            <Button color="grape" type="submit" onClick={() => {
                        showNotification({
                            title: '¡Compra realizada con éxito!',
                            message: `El id de tu compra es: ${id}`,
                            icon: <IconCheck/>,
                            color: "grape",
                            radius: "xl"
                        })
                    }} >Confirmar compra</Button>
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