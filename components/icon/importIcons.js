try {
  ((requireContext) => requireContext.keys().forEach(requireContext))(
    require.context('./icons/', true, /\.svg$/)
  );
} catch (error) {}
