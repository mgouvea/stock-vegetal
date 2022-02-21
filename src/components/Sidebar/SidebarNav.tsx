import { Stack } from '@chakra-ui/react';
import { GiGlassShot, GiWaterBottle } from 'react-icons/gi';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
      </NavSection>

      <NavSection title="REGISTRO">
        <NavLink href="/vegetal" icon={GiWaterBottle} fontSize={22}>
          Entrada de Vegetal
        </NavLink>
        <NavLink href="/consumo" icon={GiGlassShot} fontSize={22}>
          Consumo
        </NavLink>
      </NavSection>

      <NavSection title="ACESSOS">
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
    </Stack>
  );
}
