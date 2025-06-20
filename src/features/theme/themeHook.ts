import { getThemeSettings } from '@/stores/modules';

export function useThemeSettings() {
  const themeSettings = useAppSelector(getThemeSettings);

  return themeSettings;
}
