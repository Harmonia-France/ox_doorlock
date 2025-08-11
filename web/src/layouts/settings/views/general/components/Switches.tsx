import { SimpleGrid } from '@mantine/core';
import { useSetters, useStore } from '../../../../../store';
import TooltipSwitch from './TooltipSwitch';

const Switches: React.FC = () => {
  // const checkboxes = useStore((state) => {locked: state.state,});
  const locked = useStore((state) => state.state);
  const double = useStore((state) => state.doors);
  const automatic = useStore((state) => state.auto);
  const lockpick = useStore((state) => state.lockpick);
  const hideUi = useStore((state) => state.hideUi);
  const holdOpen = useStore((state) => state.holdOpen);

  const toggleCheckbox = useSetters((setter) => setter.toggleCheckbox);

  return (
    <>
      <SimpleGrid cols={2} pt={16}>
        <TooltipSwitch
          label="Verrouiller"
          infoCircle="Permet de verrouiller la porte par défaut"
          value={locked || false}
          toggle={() => toggleCheckbox('state')}
        />
        <TooltipSwitch
          label="Double"
          infoCircle="Est-ce une double porte ?"
          value={double || false}
          toggle={() => toggleCheckbox('doors')}
        />
        <TooltipSwitch
          label="Automatique"
          infoCircle="Est-ce une porte automatique ? (porte de garage par exemple)"
          value={automatic || false}
          toggle={() => toggleCheckbox('auto')}
        />
        <TooltipSwitch
          label="Lockpick"
          infoCircle="Est-ce une porte crochetable ?"
          value={lockpick || false}
          toggle={() => toggleCheckbox('lockpick')}
        />
        <TooltipSwitch
          label="Cacher l'UI"
          infoCircle="Cacher l'UI de la porte"
          value={hideUi || false}
          toggle={() => toggleCheckbox('hideUi')}
        />
        <TooltipSwitch
          label="Garder la porte ouverte"
          infoCircle="Permet de garder la porte ouverte tant qu'elle est déverrouillée"
          value={holdOpen || false}
          toggle={() => toggleCheckbox('holdOpen')}
        />
      </SimpleGrid>
    </>
  );
};

export default Switches;
