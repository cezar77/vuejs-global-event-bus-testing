import { shallowMount } from '@vue/test-utils';
import ChangeName from '@/components/ChangeName.vue';

describe('ChangeName.vue', () => {
  const mocks = {
    $eventBus: {
      $on: jest.fn(),
      $off: jest.fn(),
      $emit: jest.fn(),
    },
  };

  it('emits an event change-name', () => {
    const wrapper = shallowMount(ChangeName, {
      mocks,
    });
    const input = wrapper.find('input');
    input.setValue('name');
    const button = wrapper.find('button');
    button.trigger('click');
    expect(wrapper.vm.$eventBus.$emit).toHaveBeenCalledTimes(1);
    expect(wrapper.vm.$eventBus.$emit).toHaveBeenCalledWith('change-name', 'name');
  });
});
