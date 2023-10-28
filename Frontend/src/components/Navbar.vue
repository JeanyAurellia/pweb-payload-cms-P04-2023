<template>
    <nav class="bg-red-200">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <RouterLink to="/" class="text-gray-700 hover:bg-red-300 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Home</RouterLink>
                  <RouterLink to="/TodoList" class="text-gray-700 hover:bg-red-300 hover:text-white rounded-md px-3 py-2 text-lg font-medium">Todo List</RouterLink>
                </div>
              </div>
            </div>

            <div class="ml-auto">
              <RouterLink to="/User" class="text-gray-700 hover:bg-red-300 hover:text-white rounded-md px-3 py-2 text-lg font-medium">User</RouterLink>
            </div>
          </div>
        </div>
    </nav>
</template>