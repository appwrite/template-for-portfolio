'use client'

import Link from 'next/link'
import { Button } from './button'
import { Marble } from './marble'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { navItems } from '~/data'

export const Header = () => {
  return (
    <div className="w-full px-2">
      <header className="sticky top-7 z-20 mx-auto mt-12 flex w-full max-w-4xl animate-enter items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900/50 px-6 py-4 backdrop-blur-xl">
        <Link href="/#top" className="flex gap-2">
          <Marble />

          <div className="flex flex-col">
            <h1 className="font-medium text-white">Walter O'Brien</h1>
            <span className="text-neutral-500 text-sm">
              Technology Entrepreneur
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 font-medium md:flex">
          {navItems.map((item) => {
            const isButton = item.type === 'button'

            return isButton ? (
              <Button key={item.href} href={item.href}>
                {item.label}
              </Button>
            ) : (
              <Link key={item.href} href={item.href} className="text-white">
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="block md:hidden">
          <MobileNavigation />
        </div>
      </header>
    </div>
  )
}

export const MobileNavigation = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.Item className="list-none">
        <NavigationMenu.Trigger
          className="font-medium text-white"
          onPointerEnter={(event) => event.preventDefault()}
          onPointerMove={(event) => event.preventDefault()}
          onPointerLeave={(event) => event.preventDefault()}
        >
          Menu
        </NavigationMenu.Trigger>
        <NavigationMenu.Content
          className='absolute right-4 mt-4 rounded-2xl border border-neutral-800 bg-neutral-900/90 px-5 py-3 shadow-black/20 shadow-lg backdrop-blur-xl data-[state="closed"]:animate-leave data-[state="open"]:animate-enter'
          onPointerEnter={(event) => event.preventDefault()}
          onPointerLeave={(event) => event.preventDefault()}
        >
          <nav className="flex flex-col gap-4 text-right font-medium">
            {navItems.map((item) => {
              const isButton = item.type === 'button'

              return (
                <div key={item.href}>
                  {isButton ? (
                    <Button href={item.href}>{item.label}</Button>
                  ) : (
                    <Link href={item.href} className="text-white">
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </nav>
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    </NavigationMenu.Root>
  )
}
