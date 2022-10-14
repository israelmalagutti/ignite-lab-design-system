import { EnvelopeSimple, Lock } from 'phosphor-react';
import React from 'react';

import { Button, Checkbox, Heading, Text, TextInput } from '../../components/index';

// import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <div className='max-w-[400px] relative top-[50%] translate-y-[-50%] mx-auto'>
      <div className="flex flex-col gap-2 items-center justify-center">
      <Heading size='lg'>Ignite Lab</Heading>
      <Text>Faça login e comece a usar!</Text>
      </div>

      <form className='flex flex-col gap-4 mt-8'>
        <div className='flex flex-col gap-3'>
          <Text>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input placeholder="jhondoe@email.com" />
          </TextInput.Root>
        </div>
        <div className='flex flex-col gap-3'>
          <Text>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="*********" />
          </TextInput.Root>
        </div>
        <div className='flex items-center gap-2'>
          <Checkbox />
          <Text>Lembrar de mim por 30 dias</Text>
        </div>
      </form>

      <div className="mt-8">
        <Button>Entrar na plataforma</Button>
      </div>

      <div className="flex flex-col gap-4 mt-8 items-center justify-center">
        <Text size="sm">Esqueceu sua senha?</Text>
        <Text size="sm">Não possui conta? Crie uma agora!</Text>
      </div>
    </div>
  )
}

export { Register };
