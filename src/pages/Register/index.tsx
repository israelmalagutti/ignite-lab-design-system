import { EnvelopeSimple, Lock } from 'phosphor-react';
import React from 'react';

import { Button, Checkbox, Heading, Logo, Text, TextInput } from '../../components/index';

const Register: React.FC = () => {
  return (
    <div className='flex flex-col w-full max-w-sm'>
      <header className="flex flex-col gap-1 items-center">
      <Logo />

      <Heading size='lg' className='mt-5'>
        Ignite Lab
      </Heading>

      <Text size='lg' className='text-gray-400'>
        Faça login e comece a usar!
      </Text>
      </header>

      <form className='flex flex-col items-stretch gap-4 mt-8'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <EnvelopeSimple />
            </TextInput.Icon>
            <TextInput.Input placeholder="jhondoe@email.com" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="*********" />
          </TextInput.Root>
        </label>


        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id="remember" />
          <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type="submit" className="mt-">Entrar na plataforma</Button>
      </form>


      <footer className="flex flex-col gap-4 mt-8 items-center justify-center">
        <Text asChild size="sm" className='text-gray-400 underline hover:text-gray-200'>
          <a href='#'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm" className='text-gray-400 underline hover:text-gray-200'>
          <a href='#'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}

export { Register };
