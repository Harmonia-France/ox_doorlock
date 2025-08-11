import { Box, Stack, Tabs } from '@mantine/core';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { TbSettings, TbBriefcase, TbBottle, TbBell, TbArrowBackUp, TbUser, TbLock } from 'react-icons/tb';
import General from './views/general';
import Sound from './views/sound';
import Submit from './Submit';
import { useStore } from '../../store';
import Lockpick from './views/lockpick';

const Settings: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lockpick = useStore((state) => state.lockpick);

  return (
    <>
      <Box sx={{ height: '100%', display: 'flex' }}>
        <Tabs
          orientation="vertical"
          color="blue"
          sx={{ height: '100%' }}
          value={location.pathname.substring(10)}
          onTabChange={(value) => navigate(`/settings/${value}`)}
        >
          <Tabs.List>
            <Tabs.Tab value={'back'} onClick={() => navigate('/')} icon={<TbArrowBackUp size={20} />}>
              Doors
            </Tabs.Tab>
            <Tabs.Tab value="general" icon={<TbSettings size={20} />}>
              General
            </Tabs.Tab>
            <Tabs.Tab value="lockpick" disabled={!lockpick} icon={<TbLock size={20} />}>
              Lockpick
            </Tabs.Tab>
            <Tabs.Tab value="sound" icon={<TbBell size={20} />}>
              Sound
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
        <Stack p={16} sx={{ width: '100%' }} justify="space-between">
          <Routes>
            <Route path="/general" element={<General />} />
            <Route path="/sound" element={<Sound />} />
            <Route path="/lockpick" element={<Lockpick />} />
          </Routes>
          <Submit />
        </Stack>
      </Box>
    </>
  );
};

export default Settings;
