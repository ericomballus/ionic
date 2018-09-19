import { newE2EPage } from '@stencil/core/testing';

it('action-sheet: basic, scrollableOptions', async () => {
  const page = await newE2EPage({
    url: `/src/components/action-sheet/test/basic?ionic:animate=false`
  });

  const presentBtn = await page.find('#scrollableOptions');
  await presentBtn.click();

  const actionSheet = await page.find('ion-action-sheet');
  await actionSheet.waitForVisible();

  const compare = await page.compareScreenshot(`action-sheet: basic, scrollableOptions, presented`);
  expect(compare).toMatchScreenshot();
});
