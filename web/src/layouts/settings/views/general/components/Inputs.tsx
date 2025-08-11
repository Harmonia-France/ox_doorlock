import { Grid } from '@mantine/core';
import Input from './Input';
import { useStore, useSetters } from '../../../../../store';

const Inputs: React.FC = () => {
  //   const [doorName, passcode, autolockInterval, interactDistance, doorRate] = useStore((state) => [
  //     state.doorName,
  //     state.passcode,
  //     state.autolockInterval,
  //     state.interactDistance,
  //     state.doorRate,
  //   ]);
  const doorName = useStore((state) => state.name);
  const keyId = useStore((state) => state.key_id);
  const passcode = useStore((state) => state.passcode);
  const autolockInterval = useStore((state) => state.autolock);
  const interactDistance = useStore((state) => state.maxDistance);
  const doorRate = useStore((state) => state.doorRate);

  //   const [setDoorName, setPasscode, setAutolockInterval, setInteractDistance, setDoorRate] = useSetters((setter) => [
  //     setter.setDoorName,
  //     setter.setPasscode,
  //     setter.setAutolockInterval,
  //     setter.setInteractDistance,
  //     setter.setDoorRate,
  //   ]);

  const setDoorName = useSetters((setter) => setter.setName);
  const setKeyId = useSetters((setter) => setter.setKeyId);
  const setPasscode = useSetters((setter) => setter.setPasscode);
  const setAutolockInterval = useSetters((setter) => setter.setAutolock);
  const setInteractDistance = useSetters((setter) => setter.setMaxDistance);
  const setDoorRate = useSetters((setter) => setter.setDoorRate);

  return (
    <>
      <Grid columns={2} sx={{ fontSize: 16 }}>
        <Input label="Nom" type="text" value={doorName || ''} setValue={(value: string) => setDoorName(value)} />
        <Input
          label="Key ID"
          type="text"
          value={keyId || ''}
          setValue={(value: string) => setKeyId(value)}
          infoCircle="Le key ID de la porte, utilisé par le script pour lier les clés à la porte"
        />
        <Input label="Code" type="text" value={passcode || ''} setValue={(value: string) => setPasscode(value)} />
        <Input
          label="Temps avant de se verrouiller"
          type="number"
          value={autolockInterval || 0}
          setValue={(value: number) => setAutolockInterval(value)}
          infoCircle="La durée avant que la porte ne se verrouille automatiquement"
        />
        <Input
          label="Distance d'intéraction"
          type="number"
          value={interactDistance || 0}
          setValue={(value: number) => setInteractDistance(value)}
          infoCircle="Distance à laquelle vous pouvez intéragir avec la porte"
        />
        <Input
          label="Vitesse"
          type="number"
          span={2}
          value={doorRate || 0}
          setValue={(value: number) => setDoorRate(value)}
          infoCircle="Vitesse d'ouverture/fermeture de la porte"
        />
      </Grid>
    </>
  );
};

export default Inputs;
