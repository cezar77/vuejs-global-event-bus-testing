import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  const mocks = {
    $eventBus: {
      $on: jest.fn(),
      $off: jest.fn(),
      $emit: jest.fn(),
    },
  };

  it('listens to event change-name', () => {
    const wrapper = shallowMount(HelloWorld, {
      mocks,
    });
    expect(wrapper.vm.$eventBus.$on).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$eventBus.$on).toHaveBeenCalledWith('change-name', wrapper.vm.changeName);
  });

  it('removes event listener for change-name', () => {
    const wrapper = shallowMount(HelloWorld, {
      mocks,
    });
    expect(wrapper.vm.$eventBus.$off).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$eventBus.$off).toHaveBeenCalledWith('change-name');
  });

  it('calls method changeName on event change-name', () => {
    const wrapper = shallowMount(HelloWorld, {
      mocks,
    });
    jest.spyOn(wrapper.vm, 'changeName');
    wrapper.vm.$eventBus.$emit('change-name', 'name');
    expect(wrapper.vm.changeName).toHaveBeenCalled();
    expect(wrapper.vm.changeName).toHaveBeenCalledWith('name');
  });
});
