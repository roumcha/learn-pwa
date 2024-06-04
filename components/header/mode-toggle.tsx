'use client';

import {
  PhoneDesktopRegular,
  WeatherMoonRegular,
  WeatherSunnyRegular,
} from '@fluentui/react-icons';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <WeatherSunnyRegular
            fontSize="1.5rem"
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <WeatherMoonRegular
            fontSize="1.5rem"
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-[-100,100]"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <WeatherSunnyRegular fontSize="1.25rem" className="me-2" />
          <span>白</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <WeatherMoonRegular fontSize="1.25rem" className="me-2" />
          <span>黒</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <PhoneDesktopRegular fontSize="1.25rem" className="me-2" />
          <span>自動</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
