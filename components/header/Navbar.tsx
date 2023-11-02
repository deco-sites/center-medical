import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "$store/islands/Header/Buttons.tsx";
import CartButtonLinx from "$store/islands/Header/Cart/linx.tsx";
import CartButtonShopify from "$store/islands/Header/Cart/shopify.tsx";
import CartButtonVDNA from "$store/islands/Header/Cart/vnda.tsx";
import CartButtonVTEX from "$store/islands/Header/Cart/vtex.tsx";
import CartButtonWake from "$store/islands/Header/Cart/wake.tsx";
import Searchbar from "$store/islands/Header/Searchbar.tsx";
import { usePlatform } from "$store/sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";

function Navbar({ items, searchbar, logo }: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
}) {
  const platform = usePlatform();

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2"
      >
        <MenuButton />

        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image src={logo.src} alt={logo.alt} width={126} height={16} />
          </a>
        )}

        <div class="flex gap-1">
          <SearchButton />
          {platform === "vtex" && <CartButtonVTEX />}
          {platform === "vnda" && <CartButtonVDNA />}
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden md:flex flex-row justify-between items-center border-b border-base-200 pl-2 pr-6 w-[1280px] mx-auto">
        <div class="w-[250px]">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block w-full"
            >
              <Image src={logo.src} alt={logo.alt} width={247} height={52} class="w-full h-auto" />
            </a>
          )}
        </div>
        <div class="w-full flex items-center space-x-4 gap-2">
          {/* <SearchButton /> */}
          <Searchbar searchbar={searchbar} />
          <a
            class="w-[15%] font-sans font-light flex items-center text-[13px]"
            href="/login"
            aria-label="Log in"
          >
            <Icon id="User" size={40} strokeWidth={0.4} class="flex items-center"/>
            <div class="flex flex-col">
              Olá visitante
              <span class="font-bold text-[#7c91c8]">Entrar </span>
            </div>
          </a>
          {/* <a
            class="btn btn-circle btn-sm btn-ghost w-15"
            href="/wishlist"
            aria-label="Wishlist"
          >
            <Icon
              id="Heart"
              size={24}
              strokeWidth={2}
              fill="none"
            />
          </a> */}
          {platform === "vtex" && <div class="w-[15%] font-sans font-light flex items-center text-[13px]"><CartButtonVTEX class="w-15"/> <p>Meu carrinho</p></div>}
          {platform === "vnda" && <CartButtonVDNA />}
          {platform === "wake" && <CartButtonWake />}
          {platform === "linx" && <CartButtonLinx />}
          {platform === "shopify" && <CartButtonShopify />}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
