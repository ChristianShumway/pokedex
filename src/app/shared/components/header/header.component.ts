import { Component } from '@angular/core';

@Component({
  selector: 'shared-header',
  template: `
    <nav class="bg-orange-400 border-gray-200 dark:border-gray-600 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./../../../../assets/images/logo.png" class="w-full h-10" alt="Logo sivale" />
        </a>
        <div class="text-white dark:text-gray-400">
          {{ dateNow | date }}
        </div>
      </div>
    </nav>
  `
})

export class HeaderComponent {

  public dateNow = new Date();

}
