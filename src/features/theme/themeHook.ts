import { getThemeSettings } from '@/store/modules';

export function useThemeSettings() {
  const themeSettings = useAppSelector(getThemeSettings);

  return themeSettings;
}
