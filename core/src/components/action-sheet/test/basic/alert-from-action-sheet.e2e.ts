import { newE2EPage } from '@stencil/core/testing';

it('action-sheet: basic, alertFromActionSheet', async () => {
  const page = await newE2EPage({
    url: `/src/components/action-sheet/test/basic?ionic:animate=false`
  });

  const presentBtn = await page.find('#alertFromActionSheet');
  await presentBtn.click();

  const actionSheet = await page.find('ion-action-sheet');
  await actionSheet.waitForVisible();

  let compare = await page.compareScreenshot(`action-sheet: basic, alertFromActionSheet, presented`);
  expect(compare).toMatchScreenshot();

  const openAlertBtn = await page.find({ text: 'Open Alert' });
  await openAlertBtn.click();

  const alert = await page.find('ion-alert');
  await alert.waitForVisible();

  compare = await page.compareScreenshot(`action-sheet: basic, alertFromActionSheet, alert open`);
  expect(compare).toMatchScreenshot();

  const alertOkayBtn = await page.find({ contains: 'Okay' });
  await alertOkayBtn.click();

  await Promise.all([
    alert.waitForNotVisible(),
    actionSheet.waitForNotVisible()
  ]);

});
