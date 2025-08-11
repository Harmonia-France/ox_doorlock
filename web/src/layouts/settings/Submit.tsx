import { ActionIcon, Button, Center, Text, Tooltip } from '@mantine/core';
import { useStore } from '../../store';
import { fetchNui } from '../../utils/fetchNui';
import { HiOutlineClipboardCheck, HiOutlineTrash } from 'react-icons/hi';
import { useClipboard } from '../../store/clipboard';
import { useVisibility } from '../../store/visibility';
import { openConfirmModal } from '@mantine/modals';
import { useNavigate } from 'react-router-dom';
import DoorTable from '../doors/components/DoorTable';

const Submit: React.FC = () => {
  const navigate = useNavigate();
  const clipboard = useClipboard((state) => state.clipboard);
  const setVisible = useVisibility((state) => state.setVisible);

  const handleSubmit = () => {
    const data = { ...useStore.getState() };
    if (data.name === '') data.name = null;
    if (data.key_id === '') data.key_id = null;
    if (data.passcode === '') data.passcode = null;
    if (data.lockSound === '') data.lockSound = null;
    if (data.unlockSound === '') data.unlockSound = null;

    data.autolock = data.autolock || null;
    data.maxDistance = data.maxDistance || 2;
    data.doorRate = data.doorRate ? data.doorRate + 0.0 : null;
    data.auto = data.auto || null;
    data.lockpick = data.lockpick || null;
    data.hideUi = data.hideUi || null;
    data.holdOpen = data.holdOpen || null;

    if (data.lockpickDifficulty && data.lockpickDifficulty.length > 0) {
      const lockpickArr = [];
      for (let i = 0; i < data.lockpickDifficulty.length; i++) {
        const field = data.lockpickDifficulty[i];
        if (field !== '') lockpickArr.push(field);
      }

      data.lockpickDifficulty = lockpickArr;
    }

    setVisible(false);
    fetchNui('createDoor', data);
  };

  return (
    <Center>
      <Button color="blue" uppercase onClick={() => handleSubmit()} fullWidth>
        Confirmer la création
      </Button>
      <Tooltip label={!clipboard ? 'Aucun réglage de porte n\'a été copié' : 'Les règlages ont été copiés !'} withArrow arrowSize={10}>
        <ActionIcon
          variant="outline"
          disabled={!clipboard}
          size="lg"
          ml={16}
          sx={{ width: 36, height: 36 }}
          color="blue"
          onClick={() => {
            useStore.setState(
              {
                name: '',
                key_id: clipboard.key_id,
                passcode: clipboard.passcode,
                autolock: clipboard.autolock,
                maxDistance: clipboard.maxDistance,
                doorRate: clipboard.doorRate,
                lockSound: clipboard.lockSound,
                unlockSound: clipboard.unlockSound,
                auto: clipboard.auto,
                state: clipboard.state,
                lockpick: clipboard.lockpick,
                hideUi: clipboard.hideUi,
                doors: clipboard.doors,
                lockpickDifficulty: clipboard.lockpickDifficulty,
                holdOpen: clipboard.holdOpen
              },
              true
            );
            fetchNui('notify', 'Settings applied');
          }}
        >
          <HiOutlineClipboardCheck size={20} />
        </ActionIcon>
      </Tooltip>
      <ActionIcon
        variant="outline"
        size="lg"
        ml={16}
        sx={{ width: 36, height: 36 }}
        color="red"
        disabled={!useStore.getState().id}
        onClick={() =>
          openConfirmModal({
            title: 'Confirmer la suppression',
            centered: true,
            withCloseButton: false,
            children: (
              <Text>
                Êtes-vous sûr de vouloir supprimer la porte
                <Text component="span" weight={700}>{` ${useStore.getState().name}`}</Text>?
              </Text>
            ),
            labels: { confirm: 'Confirmer', cancel: 'Annuler' },
            confirmProps: { color: 'red' },
            onConfirm: () => {
              fetchNui('deleteDoor', useStore.getState().id);
              navigate('/')
            },
          })
        }
      >
        <HiOutlineTrash size={20} />
      </ActionIcon>
    </Center>
  );
};

export default Submit;
