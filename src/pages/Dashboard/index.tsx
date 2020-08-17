import React, { useState } from 'react';
import { FiPower, FiClock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem vindo,</span>
              <strong>Vinicius Klingenfus</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
                alt="Vinicius Klingenfus"
              />

              <strong>Vinicius Klingenfus</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
                  alt="Vinicius Klingenfus"
                />

                <strong>Vinicius Klingenfus</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
                  alt="Vinicius Klingenfus"
                />

                <strong>Vinicius Klingenfus</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/43184791?s=460&u=01ec492bf3af7f937123e2ded23d21dd14e71f3d&v=4"
                  alt="Vinicius Klingenfus"
                />

                <strong>Vinicius Klingenfus</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
