import DrawerWrapper from '@components/ui/drawer/drawer-wrapper';
import Categories from '@components/categories/categories';

export default function MobileCategoryMenu() {
  return (
    <DrawerWrapper>
      <div className="h-full max-h-full">
        <Categories layout="classic" className="!block" />
      </div>
    </DrawerWrapper>
  );
}
